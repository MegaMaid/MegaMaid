<template>
    <div class="row">
        <div class="col-md-3">
            <card :title="$t('settings')" class="settings-card">
                <ul class="nav flex-column nav-pills">
                    <li v-for="tab in tabs" :key="tab.route" class="nav-item" v-if="!tab.adminOnly">
                        <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
                            <fa :icon="tab.icon" class="icon" fixed-width/>
                            {{ tab.name }}
                        </router-link>
                    </li>
                </ul>
            </card>
            <card :title="$t('admin_settings')" class="settings-card mt-4 mb-4" v-if="isAdmin">
                <ul class="nav flex-column nav-pills">
                    <li v-for="tab in tabs" :key="tab.route" class="nav-item" v-if="tab.adminOnly">
                        <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
                            <fa :icon="tab.icon" class="icon" fixed-width/>
                            {{ tab.name }}
                        </router-link>
                    </li>
                </ul>
            </card>
        </div>

        <div class="col-md-9">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',

    computed: {
        isAdmin () {
                return this.$store.getters['auth/isAdmin']
        },
        tabs () {
            return [
                {
                    icon: 'user',
                    name: this.$t('profile'),
                    route: 'settings.profile'
                },
                {
                    icon: 'lock',
                    name: this.$t('password'),
                    route: 'settings.password'
                },
                {
                    icon: 'envelope',
                    name: this.$t('email'),
                    route: 'settings.email',
                    adminOnly: true
                },
                {
                    icon: 'hdd',
                    name: this.$t('backups'),
                    route: 'settings.backups',
                    adminOnly: true
                },
                {
                    icon: 'users',
                    name: this.$t('users'),
                    route: 'settings.users',
                    adminOnly: true
                },
                {
                    icon: 'archive',
                    name: this.$t('plex'),
                    route: 'settings.plex',
                    adminOnly: true
                },
                {
                    icon: 'film',
                    name: this.$t('radarr'),
                    route: 'settings.radarr',
                    adminOnly: true
                },
                {
                    icon: 'tv',
                    name: this.$t('sonarr'),
                    route: 'settings.sonarr',
                    adminOnly: true
                },
                {
                    icon: 'film',
                    name: this.$t('couchpotato'),
                    route: 'settings.couchpotato',
                    adminOnly: true
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .settings-card {
        .icon {
            margin-right: 0.75rem;
        }
        .card-body {
            padding: 0;
        }
    }
</style>
