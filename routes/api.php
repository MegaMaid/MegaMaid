<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');

    Route::resource('search', 'Api\SearchController', ['only' => 'store']);
    Route::resource('request', 'Api\RequestMediaController', ['only' => ['index', 'store', 'show']]);

    Route::group(['middleware' => 'admin'], function () {
        Route::resource('settings/users', 'Settings\UsersController', ['only' => ['index', 'store']]);
        Route::resource('settings/plex', 'Settings\PlexController', ['only' => ['index', 'store']]);
        Route::resource('settings/plex/token', 'Settings\PlexTokenController', ['only' => ['store']]);
        Route::resource('settings/radarr', 'Settings\RadarrController', ['only' => ['index', 'store']]);
        Route::resource('settings/radarr/quality', 'Settings\RadarrQualityController', ['only' => ['store']]);
        Route::resource('settings/sonarr', 'Settings\SonarrController', ['only' => ['index', 'store']]);
        Route::resource('settings/sonarr/quality', 'Settings\SonarrQualityController', ['only' => ['store']]);
        Route::resource('settings/couchpotato', 'Settings\CouchPotatoController', ['only' => ['index', 'store']]);
        Route::resource('settings/couchpotato/quality', 'Settings\CouchPotatoQualityController', ['only' => ['store']]);
        Route::resource('settings/email', 'Settings\EmailController', ['only' => ['index', 'store']]);
        Route::resource('settings/backups', 'Settings\BackupsController', ['only' => ['index', 'store']]);
        Route::resource('settings/users/invite', 'Settings\UserInviteController', ['only' => ['index', 'store']]);
        Route::resource('settings/users/invite/resend', 'Settings\UserInviteResendController', ['only' => 'store']);
    });
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::resource('register', 'Settings\UserInviteController', ['only' => 'show']);

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});
