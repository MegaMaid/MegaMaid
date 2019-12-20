<?php

namespace App\Http\Requests\Api\Settings;

use Auth;
use Illuminate\Foundation\Http\FormRequest as Request;

class UserInviteRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check() && Auth::user()->isAdmin;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'is_admin' => 'boolean|nullable',
            'name' => 'string',
            'email' => 'email'
        ];
    }
}
