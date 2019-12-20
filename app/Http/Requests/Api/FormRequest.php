<?php

namespace App\Http\Requests\Api;

use Auth;
use Illuminate\Foundation\Http\FormRequest as Request;

abstract class FormRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }
}
