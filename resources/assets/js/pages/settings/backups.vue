<template>
    <card :title="$t('backups') + ' ' + $t('settings')">
        <div class="text-center m-5" v-if="loading">
            <h2>{{ $t('loading') + ' ' + $t('backups') + ' ' + $t('settings') }}</h2>
            <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
        </div>

        <form @submit.prevent="update" @keydown="form.onKeydown($event)" v-if="! loading">
            <alert-success :form="form" :message="$t('info_updated')"/>

            <!-- Enabled -->
            <div class="form-group row">
                <div class="col-md-7 offset-md-3">
                    <checkbox v-model="form.enabled" :checked="form.enabled" name="enabled">
                        {{ $t('enabled') }} {{ $t('backups') }}
                    </checkbox>
                </div>
            </div>

            <div v-if="form.enabled">
                <!-- Target -->
                <div class="form-group row">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-target') }}</label>
                    <div class="col-md-7">
                        <select v-model="form.target" class="form-control" name="target"
                            :class="{ 'is-invalid': form.errors.has('target') }">
                            <option value="s3">Amazon S3 Bucket</option>
                            <option value="dropbox">Dropbox</option>
                        </select>
                        <has-error :form="form" field="target" />
                    </div>
                </div>

                <!-- Dropbox -->
                <div v-if="form.target === 'dropbox'">
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-authorization-token') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.authorization_token" type="text" name="authorization_token" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('authorization_token') }">
                            <has-error :form="form" field="authorization_token" class="mb-3" />
                            <p v-html="$t('backup-dropbox-token')"></p>
                        </div>
                    </div>
                </div>

                <!-- Dropbox -->
                <div v-if="form.target === 's3'">
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-aws-key') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.aws_key" type="text" name="aws_key" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('aws_key') }">
                            <has-error :form="form" field="aws_key" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-aws-secret') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.aws_secret" type="text" name="aws_secret" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('aws_secret') }">
                            <has-error :form="form" field="aws_secret" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-aws-region') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.aws_region" type="text" name="aws_region" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('aws_region') }">
                            <has-error :form="form" field="aws_region" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-aws-bucket') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.aws_bucket" type="text" name="aws_bucket" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('aws_bucket') }">
                            <has-error :form="form" field="aws_bucket" />
                        </div>
                    </div>
                </div>
            
                <div class="form-group row">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-filename-prefix') }}</label>
                    <div class="col-md-7">
                        <input v-model="form.filename_prefix" type="text" name="filename_prefix" class="form-control"
                            :class="{ 'is-invalid': form.errors.has('filename_prefix') }">
                        <has-error :form="form" field="filename_prefix"/>
                    </div>
                </div>

                <!-- From Address -->
                <div class="form-group row" v-if="form.type !== 'manual'">
                    <label class="col-md-3 col-form-label text-md-right">{{ $t('backup-email-contact') }}</label>
                    <div class="col-md-7">
                        <input v-model="form['email_contact']" type="text" name="email_contact" class="form-control"
                            :class="{ 'is-invalid': form.errors.has('email_contact') }">
                        <has-error :form="form" field="email_contact"/>
                    </div>
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
            enabled: false,
            target: '',
            'authorization_token': '',
            'filename_prefix': '',
            'email_contact': '',
            'aws_key': '',
            'aws_secret': '',
            'aws_region': '',
            'aws_bucket': ''
        })
    }),

    computed: {
        ...mapGetters({
            backups: 'config/backups'
        })
    },

    watch: {
        backups (value) {
            this.form.keys().forEach(key => {
                this.form[key] = value[key] || null
            })
            if(!this.form.target) {
                this.form.target = ''
            }
            this.loading = false;
        }
    },

    created () {
        this.loading = true;
        this.$store.dispatch('config/fetchBackups')
    },

    methods: {
        async update () {
            const { data } = await this.form.post('/api/settings/backups')
            this.$store.dispatch('config/updateBackups', data)
        }
    }
}
</script>
