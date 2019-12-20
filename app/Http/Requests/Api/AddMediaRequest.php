<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class AddMediaRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required',
            'type' => [
                'string',
                Rule::in(['movie', 'tv'])
            ]
        ];
    }
}
