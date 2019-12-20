<template>
    <div class="col-12 col-sm-6 col-md-6">
        <div class="card" :class="{ 'mt-1' : idx < 2, 'mt-4' : idx >= 2 }">
            <div class="card-header">
                <small>{{ $t('users-role') }}: <strong>{{ invite.role }}</strong></small>
                <button
                    v-if="!copiedToClipboard"
                    class="btn btn-link p-0 copy-to-clipboard"
                    v-clipboard:copy="invite.url"
                    v-clipboard:success="copiedToClipboardHandler"
                >
                    {{ $t('invitation-url-copy') }}
                </button>
                <span v-if="copiedToClipboard" class="copy-to-clipboard text-success">{{ $t('invitation-url-copied') }}</span>
            </div>
            <div class="card-body pt-2 pb-2">
                <h4 class="card-title m-0">{{ invite.name }}</h4>
                <small>{{ invite.email }}</small>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item p-2">
                    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
                        <alert-success :form="form" :message="$t('users-invite-sent')"/>
                        <alert-error :form="form" :message="$t('error_alert_text')"/>
                        <!-- Submit Button -->
                        <v-button :loading="form.busy" :block="true" :small="true" type="success">{{ $t('invite-again') }}</v-button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
    name: 'SettingsInvite',

    props: {
        invite: { type: Object, default: {} },
        idx: { type: Number, default: 0 }
    },

    watch: {
        invite (value) {
            this.form.id = value.id
        }
    },

    data: () => ({
        copiedToClipboard: false,
        form: new Form({ id: 0 })
    }),

    methods: {
        async update () {
            const { data } = await this.form.post('/api/settings/users/invite/resend')
        },
        copiedToClipboardHandler () {
            this.copiedToClipboard = true;
            setTimeout(() => this.copiedToClipboard = false, 2500)
        }
    },

    created () {
        this.form.id = this.invite.id
    }

}
</script>
