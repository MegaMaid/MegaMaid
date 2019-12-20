<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class SearchRequest extends FormRequest
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
                Rule::in(['all', 'movie', 'tv', 'person', 'person_credits', 'tv_credits', 'movie_credits'])
            ],
            'query' => 'required',
            'include_adult' => 'boolean',
            'page' => 'integer',
            'language' => 'string'
        ];
    }
}
