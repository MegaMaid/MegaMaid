<template>
    <card :title="$t('users')" :classes="['settings-users-active', 'mb-3']">
        <div class="text-center m-5" v-if="loading">
            <h2>{{ $t('loading') + ' ' + $t('users') + ' ' + $t('settings') }}</h2>
            <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
        </div>

        <div class="row pb-2" v-if="!loading">
            <div class="col-12 col-sm-6 col-md-6" v-for="user, idx in users" :key="user.id + '-' + user.email">
                <div class="card" :class="{ 'mt-1' : idx < 2, 'mt-4' : idx >= 2 }">
                    <div class="card-header"><small>{{ $t('users-role') }}: <strong>{{ user.role }}</strong></small></div>
                    <div class="card-body pt-2 pb-2">
                        <h4 class="card-title m-0">{{ user.name }}</h4>
                        <small>{{ user.email }}</small>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pt-2 pb-2">
                            <small>{{ $t('pending-requests') }}:</small>&nbsp;&nbsp; <span class="badge badge-info">{{ user.requests_pending_count }}</span>
                        </li>
                        <li class="list-group-item pt-2 pb-2">
                            <small>{{ $t('approved-requests') }}:</small>&nbsp;&nbsp; <span class="badge badge-primary">{{ user.requests_approved_count }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SettingsUsers',
    data: () => ({
        loading: true
    }),

    computed: {
        ...mapGetters({
            users: 'config/users',
        })
    },

    watch: {
        users (value) {
            this.loading = false;
        }
    },

    created () {
        this.loading = true;
        this.$store.dispatch('config/fetchUsers')
    }
}
</script>
