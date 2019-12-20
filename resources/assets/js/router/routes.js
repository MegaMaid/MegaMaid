const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Search = () => import('~/pages/search').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const SettingsEmail = () => import('~/pages/settings/email').then(m => m.default || m)
const SettingsBackups = () => import('~/pages/settings/backups').then(m => m.default || m)
const SettingsUsers = () => import('~/pages/settings/users').then(m => m.default || m)
const SettingsPlex = () => import('~/pages/settings/plex').then(m => m.default || m)
const SettingsRadarr = () => import('~/pages/settings/radarr').then(m => m.default || m)
const SettingsSonarr = () => import('~/pages/settings/sonarr').then(m => m.default || m)
const SettingsCouchpotato = () => import('~/pages/settings/couchpotato').then(m => m.default || m)

export default [
    { path: '/', name: 'welcome', component: Welcome },

    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register.notoken', component: Register },
    { path: '/register/:token', name: 'register', component: Register },
    { path: '/password/reset', name: 'password.request', component: PasswordEmail },
    { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

    { path: '/search', name: 'search', component: Search },
    { path: '/settings',
      component: Settings,
      children: [
        { path: '', redirect: { name: 'settings.profile' }},
        { path: 'profile', name: 'settings.profile', component: SettingsProfile },
        { path: 'password', name: 'settings.password', component: SettingsPassword },
        { path: 'email', name: 'settings.email', component: SettingsEmail },
        { path: 'backups', name: 'settings.backups', component: SettingsBackups },
        { path: 'users', name: 'settings.users', component: SettingsUsers },
        { path: 'plex', name: 'settings.plex', component: SettingsPlex },
        { path: 'radarr', name: 'settings.radarr', component: SettingsRadarr },
        { path: 'sonarr', name: 'settings.sonarr', component: SettingsSonarr },
        { path: 'couchpotato', name: 'settings.couchpotato', component: SettingsCouchpotato },
    ] },

    { path: '*', component: NotFound }
]
