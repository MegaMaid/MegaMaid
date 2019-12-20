<?php

namespace App\Rules;

use Aws\S3\S3Client;
use League\Flysystem\Filesystem;
use Aws\S3\Exception\S3Exception;
use Illuminate\Contracts\Validation\Rule;
use League\Flysystem\AwsS3v3\AwsS3Adapter;

class TestAmazonS3Credentials implements Rule
{
    protected $key;
    protected $secret;
    protected $region;
    protected $bucket;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($key, $secret, $region, $bucket)
    {
        $this->key = $key;
        $this->secret = $secret;
        $this->region = $region;
        $this->bucket = $bucket;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $client = new S3Client([
            'credentials' => [
                'key'    => $this->key,
                'secret' => $this->secret
            ],
            'region' => $this->region,
            'version' => 'latest',
        ]);

        $adapter = new AwsS3Adapter($client, $this->bucket);
        $filesystem = new Filesystem($adapter);

        try
        {
            $filename = 'megamaid_backup_verifysettings_' . bin2hex(openssl_random_pseudo_bytes(16));
            $contents = bin2hex(openssl_random_pseudo_bytes(128));

            while($filesystem->has($filename))
            {
                $filename = 'megamaid_backup_test_' . bin2hex(openssl_random_pseudo_bytes(16));
            }

            $filesystem->put($filename, $contents);
            $filesystem->get($filename);
            $filesystem->delete($filename);
        }
        catch(S3Exception $e)
        {
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The credentials provided are incorrect. Please verify the settings of all fields.';
    }
}
