<?php

namespace App\Http\Requests\Api\Settings;

class PlexTokenRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ssl' => 'boolean',
            'hostname' => 'string|required',
            'port' => 'integer|required',
            'username' => 'string|required',
            'password' => 'string|required',
        ];
    }
}
