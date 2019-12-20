# Laravel-Vue SPA

<a href="https://travis-ci.org/cretueusebiu/laravel-vue-spa"><img src="https://travis-ci.org/cretueusebiu/laravel-vue-spa.svg?branch=master" alt="Build Status"></a>
<a href="https://packagist.org/packages/cretueusebiu/laravel-vue-spa"><img src="https://poser.pugx.org/cretueusebiu/laravel-vue-spa/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/cretueusebiu/laravel-vue-spa"><img src="https://poser.pugx.org/cretueusebiu/laravel-vue-spa/v/stable.svg" alt="Latest Stable Version"></a>

> A Laravel-Vue SPA starter project template.

<p align="center">
<img src="https://i.imgur.com/NHFTsGt.png">
</p>

## Features

- Laravel 5.5
- Vue + VueRouter + Vuex + VueI18n
- Pages with custom layouts
- Login, register and password reset
- Authentication with JWT
- Socialite integration
- Bootstrap 4 + Font Awesome 5

## Installation

- `composer create-project --prefer-dist cretueusebiu/laravel-vue-spa`
- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `yarn` / `npm install`

## Usage

#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Docker test apps:

docker stop a.radarr; docker rm a.radarr; docker pull linuxserver/radarr:latest && docker run -itd \
    --name=a.radarr \
    --restart always \
    -p 7878:7878 \
    linuxserver/radarr:latest



docker stop a.sonarr; docker rm a.sonarr; docker volume rm a.sonarr; docker volume create a.sonarr; docker pull linuxserver/sonarr:latest && docker run -itd \
    --name=a.sonarr \
    --restart always \
    -e PUID=501 \
    -v a.sonarr:/tv:rw \
    -p 8989:8989 \
    linuxserver/sonarr:latest
