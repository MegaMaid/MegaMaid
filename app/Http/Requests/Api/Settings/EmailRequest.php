<?php

namespace App\Http\Requests\Api\Settings;

use App\Rules\RequiredIfIn;
use Illuminate\Validation\Rule;

class EmailRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => [
                'string',
                Rule::in(['manual', 'smtp', 'mailgun', 'sparkpost', 'ses'])
            ],
            'from_name' => 'required_unless:type,manual',
            'from_address' => 'email|required_unless:type,manual',

            'secret' => [ new RequiredIfIn($this->all(), 'type', ['mailgun', 'sparkpost', 'ses']) ],

            'host' => 'required_if:type,smtp',
            'port' => 'required_if:type,smtp',
            'encryption' => [
                'nullable',
                Rule::in(['tls', 'ssl'])
            ],
            'username' => 'nullable',
            'password' => 'nullable',

            'domain' => 'required_if:type,mailgun',
            'key' => 'required_if:type,ses',
            'region' => 'required_if:type,ses',
        ];
    }
}
