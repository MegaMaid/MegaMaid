<?php

namespace App\Lib;

use Config;
use MegaHelpers;
use App\SettingsEmail;
use App\SettingsSystem;
use App\SettingsBackup;

class ConfigureSystem
{
    protected $serviceTypes = [
        'ses', 'mailgun', 'sparkpost'
    ];

    public function __construct()
    {
        $this->configureSystemSettings(MegaHelpers::getSettingsSystem());
        $this->configureMailSettings(MegaHelpers::getSettingsEmail());

        $settingsBackup = MegaHelpers::getSettingsBackups();
        $this->configureFilesystemDropbox($settingsBackup);
        $this->configureFilesystemAmazonS3($settingsBackup);
        $this->configureBackups($settingsBackup);
    }

    protected function configureSystemSettings(SettingsSystem $config)
    {
        if($config->hostname)
        {
            Config::set('app.url', $config->hostname);
        }
    }

    protected function configureMailSettings(SettingsEmail $config)
    {
        $mail = Config::get('mail');
        $mail['driver'] = $config->type;
        $mail['from']['address'] = $config->from_address;
        $mail['from']['name'] = $config->from_name;
        if($config->type === 'smtp')
        {
            $mail['host'] = $config->host;
            $mail['port'] = $config->port;
            $mail['encryption'] = $config->encryption;
            $mail['username'] = $config->username;
            $mail['password'] = $config->password;
        }
        Config::set('mail', $mail);

        if(in_array($config->type, $this->serviceTypes))
        {
            $svc = Config::get('services.'.$config->type);
            foreach($svc as $k => $v)
            {
                $svc[$k] = $config->$k;
            }

            Config::set('services.'.$config->type, $svc);
        }
    }

    protected function configureFilesystemDropbox(SettingsBackup $config)
    {
        if(!$config->enabled || $config->target !== 'dropbox') return;
        Config::set('filesystems.disks.dropbox.authorization_token', $config->authorization_token);
    }

    protected function configureFilesystemAmazonS3(SettingsBackup $config)
    {
        if(!$config->enabled || $config->target !== 's3') return;
        Config::set('filesystems.disks.s3.key', $config->aws_key);
        Config::set('filesystems.disks.s3.secret', $config->aws_secret);
        Config::set('filesystems.disks.s3.region', $config->aws_region);
        Config::set('filesystems.disks.s3.bucket', $config->aws_bucket);
    }

    protected function configureBackups(SettingsBackup $config)
    {
        if(!$config->enabled) return;
        Config::set('backup.backup.destination.disks', [$config->target]);
        Config::set('backup.backup.destination.filename_prefix', $config->filename_prefix . '_');
        Config::set('backup.monitorBackups.0.disks', [$config->target]);
        if($config->email_contact)
        {
            Config::set('backup.notifications.mail.to', $config->email_contact);
        }
        else
        {
            Config::set('backup.notifications.notifications', []);
        }
    }
}
