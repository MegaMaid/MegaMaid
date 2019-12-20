<template>
    <card :title="$t('plex') + ' ' + $t('plex-token')">
        <form @submit.prevent="update" @keydown="form.onKeydown($event)">
            <alert-success :form="form" :message="$t('plex-token-aquired')"/>

            <div role="alert" class="alert alert-danger alert-dismissible" v-if="form.errors.get('credentials')">
                <button type="button" aria-label="Close" class="close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>{{ form.errors.get('credentials') }}</div>
            </div>

            <div role="alert" class="alert alert-danger alert-dismissible" v-if="form.errors.get('hostname')">
                <button type="button" aria-label="Close" class="close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>{{ form.errors.get('hostname') }} {{ $t('plex-token-see-settings') }}</div>
            </div>

            <div role="alert" class="alert alert-danger alert-dismissible" v-if="form.errors.get('port')">
                <button type="button" aria-label="Close" class="close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>{{ form.errors.get('port') }} {{ $t('plex-token-see-settings') }}</div>
            </div>

            <div role="alert" class="alert alert-danger alert-dismissible" v-if="form.errors.get('ssl')">
                <button type="button" aria-label="Close" class="close">
                    <span aria-hidden="true">×</span>
                </button>
                <div>{{ form.errors.get('ssl') }} {{ $t('plex-token-see-settings') }}</div>
            </div>

            <!-- Username -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('plex-username') }}</label>
                <div class="col-md-7">
                    <input v-model="form.username" type="text" name="username" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('username') }" required>
                    <has-error :form="form" field="username"/>
                </div>
            </div>

            <!-- Password -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
                <div class="col-md-7">
                    <input v-model="form.password" type="password" name="password" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('password') }" required>
                    <has-error :form="form" field="password"/>
                    <hr />
                    <p v-html="$t('plex-password-warning')"></p>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="form-group row">
                <div class="col-md-9 ml-md-auto">
                    <v-button :loading="form.busy" type="success">{{ $t('plex-request-token') }}</v-button>
                </div>
            </div>
        </form>
    </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
    name: 'PlexToken',
    props: {
      hostname: { type: String, default: null },
      port: { type: Number, default: null },
      ssl: { type: Boolean, default: null }
  },

    data: () => ({
        form: new Form({
            ssl: false,
            hostname: '',
            port: this.port,
            username: this.username,
            password: this.ssl
        })
    }),

    watch: {
        hostname (value) {
            this.form.hostname = value
        },
        port (value) {
            this.form.port = value
        },
        ssl (value) {
            this.form.ssl = value
        },
    },

    methods: {
        async update () {
            const { data } = await this.form.post('/api/settings/plex/token')
            this.$emit('plex_token_found', data.token)
        }
    },

    created () {
        this.form.username = ''
        this.form.password = ''
    }
}
</script>
