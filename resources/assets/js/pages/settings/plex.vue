<template>
    <div>
        <card :title="$t('plex') + ' ' + $t('settings')" :classes="['mb-5']">
            <div class="text-center m-5" v-if="loading">
                <h2>{{ $t('loading') + ' ' + $t('plex') + ' ' + $t('settings') }}</h2>
                <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
            </div>

            <form @submit.prevent="update" @keydown="form.onKeydown($event)" v-if="! loading">
                <alert-success :form="form" :message="$t('info_updated')"/>

                <!-- Enabled -->
                <div class="form-group row">
                    <div class="col-md-7 offset-md-3">
                        <checkbox v-model="form.enabled" :checked="form.enabled" name="enabled">
                            {{ $t('enabled') }} {{ $t('plex') }}
                        </checkbox>
                    </div>
                </div>

                <!-- Hostname -->
                <div class="form-group row">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('hostname') }}</label>
                    <div class="col-md-7">
                        <input v-model="form.hostname" type="text" name="hostname" class="form-control"
                            :class="{ 'is-invalid': form.errors.has('hostname') }" required>
                        <has-error :form="form" field="hostname"/>
                    </div>
                </div>

                <!-- Port -->
                <div class="form-group row">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('port') }}</label>
                    <div class="col-md-7">
                        <input v-model="form.port" type="number" name="port" class="form-control"
                            :class="{ 'is-invalid': form.errors.has('port') }" required>
                        <has-error :form="form" field="port"/>
                    </div>
                </div>

                <!-- SSL -->
                <div class="form-group row">
                    <div class="col-md-7 offset-md-3">
                        <checkbox v-model="form.ssl" :checked="form.ssl" name="ssl">
                            {{ $t('uses') }} {{ $t('ssl') }}
                        </checkbox>
                    </div>
                </div>

                <!-- Token -->
                <div class="form-group row">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('plex-token') }}</label>
                    <div class="col-md-7">
                        <input v-model="form.token" type="text" name="token" class="form-control"
                            :class="{ 'is-invalid': form.errors.has('token') }" required>
                        <has-error :form="form" field="token"/>
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
        <plex-token :hostname="form.hostname" :port="Number.parseInt(form.port)" :ssl="form.ssl" v-on:plex_token_found="tokenRequestHandler" />
    </div>
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
            enabled: false,
            ssl: false,
            hostname: '',
            port: 32400,
            token: ''
        })
    }),

    computed: mapGetters({
        plex: 'config/plex'
    }),

    watch: {
        plex (value) {
            this.form.keys().forEach(key => {
                this.form[key] = value[key]
            })
            this.loading = false;
        }
    },

    created () {
        this.loading = true;
        this.$store.dispatch('config/fetchPlex')
    },

    methods: {
        async update () {
            const { data } = await this.form.post('/api/settings/plex')
            this.$store.dispatch('config/updatePlex', data)
        },

        tokenRequestHandler (token) {
            this.form.token = token
        }
    }
}
</script>
