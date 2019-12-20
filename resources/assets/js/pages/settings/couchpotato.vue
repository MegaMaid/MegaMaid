<template>
    <card :title="$t('couchpotato') + ' ' + $t('settings')">
        <div class="text-center m-5" v-if="loading">
            <h2>{{ $t('loading') + ' ' + $t('couchpotato') + ' ' + $t('settings') }}</h2>
            <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
        </div>

        <form @submit.prevent="update" @keydown="form.onKeydown($event)" v-if="! loading">
            <alert-success :form="form" :message="$t('info_updated')" v-if="shouldShowSuccessAlert"/>

            <!-- Enabled -->
            <div class="form-group row">
                <div class="col-md-7 offset-md-3">
                    <checkbox v-model="form.enabled" :checked="form.enabled" name="enabled">
                        {{ $t('enabled') }} {{ $t('couchpotato') }}
                    </checkbox>
                </div>
            </div>

            <!-- Hostname -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('hostname') }}</label>
                <div class="col-md-7">
                    <input v-model="form.hostname" type="text" name="hostname" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('hostname') }">
                    <has-error :form="form" field="hostname"/>
                </div>
            </div>

            <!-- Sub Path -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('subpath') }}</label>
                <div class="col-md-7">
                    <input v-model="form.subpath" type="text" name="subpath" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('subpath') }">
                    <has-error :form="form" field="subpath"/>
                </div>
            </div>

            <!-- Port -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('port') }}</label>
                <div class="col-md-7">
                    <input v-model="form.port" type="text" name="port" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('port') }">
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

            <!-- Api Key -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('apikey') }}</label>
                <div class="col-md-7">
                    <input v-model="form.apikey" type="text" name="apikey" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('apikey') }">
                    <has-error :form="form" field="apikey"/>
                </div>
            </div>

            <!-- Directory -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('directory') }}</label>
                <div class="col-md-7">
                    <input v-model="form.directory" type="text" name="directory" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('directory') }">
                    <has-error :form="form" field="directory"/>
                </div>
            </div>

            <!-- Quality -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">{{ $t('quality') }}</label>
                <div class="col-md-7">
                    <select v-model="form.quality" name="quality" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('quality') }" >
                        <option v-for="q in form.qualities" :key="q.id" :value="q.id">{{ q.name }}</option>
                    </select>
                    <button class="btn btn-link" v-on:click="loadQualityOptions">{{ $t('load-quality-options') }}</button>
                    <has-error :form="form" field="quality"/>
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
        return { title: this.$t('couchpotato') + ' ' + this.$t('settings') }
    },

    data: () => ({
        loading: true,
        shouldShowSuccessAlert: false,
        form: new Form({
            enabled: false,
            ssl: false,
            hostname: '',
            port: '',
            apikey: '',
            subpath: '',
            directory: '',
            quality: '',
            qualities: []
        })
    }),

    computed: mapGetters({
        couchpotato: 'config/couchpotato'
    }),

    watch: {
        couchpotato (value) {
            this.form.keys().forEach(key => {
                this.form[key] = value[key]
            })
            this.loading = false;
        }
    },

    created () {
        this.loading = true;
        this.$store.dispatch('config/fetchCouchPotato')
    },

    methods: {
        async update () {
            this.shouldShowSuccessAlert = true
            const { data } = await this.form.post('/api/settings/couchpotato')
            this.$store.dispatch('config/updateCouchPotato', data)
        },
        async loadQualityOptions (e) {
            e.preventDefault();
            this.shouldShowSuccessAlert = false
            const { data } = await this.form.post('/api/settings/couchpotato/quality')
            this.form.qualities = data;
        }
    }
}
</script>
