<template>
    <div>
        <card :title="$t('users-invite')" class="settings-users-invite mb-3">
            <div class="alert alert-info" role="alert" v-if="showInvitationCreatedAlert">
                <h5 class="alert-heading">Invitation Created!</h5>
                <div class="input-group mb-0">
                    <input v-model="lastInvitation.url" type="text" class="form-control" readonly />
                    <div class="input-group-append">
                        <button class="btn btn-primary" v-clipboard:copy="lastInvitation.url">Copy to Clipboard</button>
                    </div>
                </div>
                <p class="mt-2"><small>Send the above link to the new user so they can complete the signup process.</small></p>
            </div>
            <form @submit.prevent="update" @keydown="form.onKeydown($event)">
                <alert-success :form="form" :message="$t('users-invite-sent')" v-if="!isManualEmailSetting" />

                <!-- Enabled -->
                <div class="form-group row">
                    <div class="col-md-7 offset-md-3">
                        <checkbox v-model="form.is_admin" :checked="form.is_admin" name="enabled">
                            {{ $t('users-invite-as-admin') }}
                        </checkbox>
                    </div>
                </div>

                <!-- Name -->
                <div class="form-group row">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
                    <div class="col-md-7">
                        <input v-model="form.name" type="text" name="name" class="form-control"
                            :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"/>
                    </div>
                </div>

                <!-- Email -->
                <div class="form-group row">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
                    <div class="col-md-7">
                        <input v-model="form.email" type="email" name="email" class="form-control"
                            :class="{ 'is-invalid': form.errors.has('email') }">
                        <has-error :form="form" field="email"/>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="form-group row">
                    <div class="col-md-9 ml-md-auto">
                        <v-button type="success" :loading="form.busy" v-if="isManualEmailSetting">{{ $t('create-invite') }}</v-button>
                        <v-button type="success" :loading="form.busy" v-if="!isManualEmailSetting">{{ $t('invite') }}</v-button>
                    </div>
                </div>
            </form>
        </card>

        <settings-users></settings-users>

        <settings-invites></settings-invites>
    </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
    middleware: 'admin',

    scrollToTop: false,

    metaInfo () {
        return { title: this.$t('users') + ' ' + this.$t('settings') }
    },

    data: () => ({
        lastInvitation: {},
        lastInvitationUrl: '',
        form: new Form({
            is_admin: false,
            name: '',
            email: '',
        })
    }),

    computed: {
        showInvitationCreatedAlert () {
            return this.lastInvitation.token && this.isManualEmailSetting
        },
        isManualEmailSetting () {
            const type = this.$store.getters['config/email'].type;
            return type === 'manual' || typeof type === 'undefined'
        },
    },

    created () {
        this.lastInvitation = {};
    },

    methods: {
        async update () {
            this.lastInvitationUrl = ''
            const { data } = await this.form.post('/api/settings/users/invite')
            this.lastInvitation = data;
            this.form.reset()
            this.$store.dispatch('config/fetchInvites')
        }
    }
}
</script>
