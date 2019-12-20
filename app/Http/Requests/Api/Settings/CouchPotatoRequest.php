<?php

namespace App\Http\Requests\Api\Settings;

class CouchPotatoRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'enabled' => 'boolean',
            'ssl' => 'boolean',
            'hostname' => 'string|required',
            'port' => 'integer|required',
            'apikey' => 'string|required',
            'subpath' => 'string|nullable',
            'directory' => 'string|required',
            'quality' => 'string|required'
        ];
    }
}
