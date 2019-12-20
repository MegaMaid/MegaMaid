<template>
    <card :title="$t('email') + ' ' + $t('settings')">
        <div class="text-center m-5" v-if="loading">
            <h2>{{ $t('loading') + ' ' + $t('email') + ' ' + $t('settings') }}</h2>
            <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
        </div>

        <form @submit.prevent="update" @keydown="form.onKeydown($event)" v-if="! loading">
            <alert-success :form="form" :message="$t('info_updated')"/>

            <!-- Type -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-type') }}</label>
                <div class="col-md-7">
                    <select v-model="form.type" class="form-control" name="type"
                        :class="{ 'is-invalid': form.errors.has('type') }">
                        <option value="manual">Manually Send Links</option>
                        <option value="smtp">SMTP Server</option>
                        <option value="mailgun">Mailgun</option>
                        <option value="sparkpost">SparkPost</option>
                        <option value="ses">Amazon SES</option>
                    </select>
                    <has-error :form="form" field="type" />
                </div>
            </div>

            <!-- From Name -->
            <div class="form-group row" v-if="form.type !== 'manual'">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-from_name') }}</label>
                <div class="col-md-7">
                    <input v-model="form['from_name']" type="text" name="from_name" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('from_name') }">
                    <has-error :form="form" field="from_name"/>
                </div>
            </div>

            <!-- From Address -->
            <div class="form-group row" v-if="form.type !== 'manual'">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-from_address') }}</label>
                <div class="col-md-7">
                    <input v-model="form['from_address']" type="text" name="from_address" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('from_address') }">
                    <has-error :form="form" field="from_address"/>
                </div>
            </div>

            <!-- Domain -->
            <div class="form-group row" v-if="showFieldDomain">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-domain') }}</label>
                <div class="col-md-7">
                    <input v-model="form.domain" type="text" name="domain" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('domain') }">
                    <has-error :form="form" field="domain"/>
                </div>
            </div>

            <!-- Key -->
            <div class="form-group row" v-if="showFieldKey">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-key') }}</label>
                <div class="col-md-7">
                    <input v-model="form.key" type="text" name="key" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('key') }">
                    <has-error :form="form" field="key"/>
                </div>
            </div>

            <!-- Secret -->
            <div class="form-group row" v-if="showFieldSecret">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-secret') }}</label>
                <div class="col-md-7">
                    <input v-model="form.secret" type="text" name="secret" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('secret') }">
                    <has-error :form="form" field="secret"/>
                </div>
            </div>

            <!-- Region -->
            <div class="form-group row" v-if="showFieldRegion">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-region') }}</label>
                <div class="col-md-7">
                    <input v-model="form.region" type="text" name="region" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('region') }">
                    <has-error :form="form" field="region"/>
                </div>
            </div>

            <!-- Host -->
            <div class="form-group row" v-if="form.type === 'smtp'">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-host') }}</label>
                <div class="col-md-7">
                    <input v-model="form.host" type="text" name="host" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('host') }">
                    <has-error :form="form" field="host"/>
                </div>
            </div>

            <!-- Port -->
            <div class="form-group row" v-if="form.type === 'smtp'">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-port') }}</label>
                <div class="col-md-7">
                    <input v-model="form.port" type="number" name="port" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('port') }">
                    <has-error :form="form" field="port"/>
                </div>
            </div>

            <!-- Encryption -->
            <div class="form-group row" v-if="form.type === 'smtp'">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-encryption') }}</label>
                <div class="col-md-7">
                    <select v-model="form.encryption" class="form-control" name="encryption"
                        :class="{ 'is-invalid': form.errors.has('encryption') }">
                        <option value="">None</option>
                        <option value="tls">TLS</option>
                        <option value="ssl">SSL</option>
                    </select>
                    <has-error :form="form" field="encryption" />
                </div>
            </div>

            <!-- Username -->
            <div class="form-group row" v-if="form.type === 'smtp'">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-username') }}</label>
                <div class="col-md-7">
                    <input v-model="form.username" type="text" name="username" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('username') }">
                    <has-error :form="form" field="username"/>
                </div>
            </div>

            <!-- Password -->
            <div class="form-group row" v-if="form.type === 'smtp'">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('email-password') }}</label>
                <div class="col-md-7">
                    <input v-model="form.password" type="text" name="password" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('password') }">
                    <has-error :form="form" field="password"/>
                    <hr />
                    <p v-html="$t('email-password-warning')"></p>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="form-group row">
                <div class="col-md-9 ml-md-auto">
                    <v-button :loading="form.busy" type="success">{{ $t('update') }}</v-button>
                </div>
            </div>
        </form>
    </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
    middleware: 'admin',

    scrollToTop: false,

    metaInfo () {
        return { title: this.$t('plex') + ' ' + this.$t('settings') }
    },

    data: () => ({
        loading: true,
        form: new Form({
            type: '',
            'from_name': '',
            'from_address': '',
            key: '',
            secret: '',
            domain: '',
            region: '',
            host: '',
            port: '',
            encryption: '',
            username: '',
            password: ''
        })
    }),

    computed: {
        showFieldRegion () {
            return this.form.type === 'ses'
        },
        showFieldKey () {
            return this.form.type === 'ses'
        },
        showFieldSecret () {
            return ['mailgun', 'ses', 'sparkpost'].includes(this.form.type)
        },
        showFieldDomain () {
            return this.form.type === 'mailgun'
        },
        ...mapGetters({
            email: 'config/email'
        })
    },

    watch: {
        email (value) {
            this.form.keys().forEach(key => {
                this.form[key] = value[key] || null
            })
            if(!this.form.type) {
                this.form.type = 'manual'
            }
            this.loading = false;
        }
    },

    created () {
        this.loading = true;
        this.$store.dispatch('config/fetchEmail')
    },

    methods: {
        async update () {
            const { data } = await this.form.post('/api/settings/email')
            this.$store.dispatch('config/updateEmail', data)
        }
    }
}
</script>
