<?php

namespace App\Http\Requests\Api\Settings;

use App\Rules\TestDropboxAuthToken;
use App\Rules\TestAmazonS3Credentials;

class BackupsRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'enabled' => 'boolean',
            'target' => 'string|required_if:enabled,true',
            'authorization_token' => ['string'],
            'filename_prefix' => 'string',
            'email_contact' => ['email'],
        ];

        if(strtolower($this->request->get('target')) === 'dropbox')
        {
            $rules['authorization_token'][] = 'string';
            $rules['authorization_token'][] = new TestDropboxAuthToken;
        }

        if(strtolower($this->request->get('target')) === 's3')
        {
            $rules['aws_key'][] = 'string';
            $rules['aws_secret'][] = 'string';
            $rules['aws_region'][] = 'string';
            $rules['aws_bucket'][] = 'string';
            $rules['aws_key'][] = new TestAmazonS3Credentials(
                $this->request->get('aws_key'),
                $this->request->get('aws_secret'),
                $this->request->get('aws_region'),
                $this->request->get('aws_bucket')
            );
        }

        return $rules;
    }
}
