<?php

namespace App\Http\Controllers\Auth;

use App\User;
use MegaHelpers;
use App\UserInvite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    use RegistersUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        return $user;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $rules = [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ];
        if(MegaHelpers::initialSetupCompleted())
        {
            $rules['token'] = 'required|exists:user_invites,token';
        }
        return Validator::make($data, $rules);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        if(MegaHelpers::initialSetupCompleted())
        {
            $ui = UserInvite::where('token', $data['token'])->firstOrFail();
            $role = $ui->role;
            $ui->delete();
        }
        else
        {
            $role = 'admin';
        }

        $u = $this->userCreate($data['name'], $data['email'], $data['password'], $role);
        return $u;
    }

    protected function userCreate($name, $email, $password, $role)
    {
        $u = User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password)
        ]);
        $u->role = $role;
        $u->save();
        return $u;
    }
}
