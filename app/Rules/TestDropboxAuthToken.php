<?php

namespace App\Rules;

use Spatie\Dropbox\Client;
use League\Flysystem\Filesystem;
use Spatie\Dropbox\Exceptions\BadRequest;
use Illuminate\Contracts\Validation\Rule;
use Spatie\FlysystemDropbox\DropboxAdapter;

class TestDropboxAuthToken implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $client = new Client($value);
        $adapter = new DropboxAdapter($client);
        $filesystem = new Filesystem($adapter);

        try
        {
            // $result = $client->listFolder('/', false);

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
        catch(BadRequest $e)
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
        return 'Error connecting to DropBox, verify the authorization token is correct.';
    }
}
