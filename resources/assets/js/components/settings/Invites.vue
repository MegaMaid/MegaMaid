<template>
    <card :title="$t('invitations')" :classes="['settings-users-invites', 'mb-3', 'pt-0']">
        <div class="text-center m-5" v-if="loading">
            <h2>{{ $t('loading') + ' ' + $t('users') + ' ' + $t('settings') }}</h2>
            <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
        </div>

        <div class="row pb-2" v-if="!loading">
            <settings-invite
                v-for="invite, idx in invites"
                :key="'invite-' + invite.id + '-' + invite.email"
                :invite="invite"
                :idx="idx"
            />
        </div>
    </card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SettingsInvites',
    data: () => ({
        loading: true,
        copiedToClipboard: false
    }),

    computed: {
        ...mapGetters({
            invites: 'config/invites'
        })
    },

    watch: {
        invites (value) {
            this.loading = false;
        }
    },

    methods: {
        copiedToClipboardHandler () {
            this.copiedToClipboard = true;
            setTimeout(() => this.copiedToClipboard = false, 1000)
        }
    },

    created () {
        this.loading = true;
        this.$store.dispatch('config/fetchInvites')
    }
}
</script>

<style lang="scss">
    .settings-users-invites {
        .copy-to-clipboard {
            font-size: 0.85rem;
            line-height: 0.85em;
            position: absolute;
            right: 1rem;
            top: 1rem;
        }
    }
</style>
