<template>
    <div class="row">
        <div class="col-lg-8 m-auto">
            <card :title="$t('first_register')" :classes="['mb-5', 'border-warning']" v-if="!initialSetupCompleted">
                {{ $t('first_register_message') }}
            </card>
            <card :title="$t('register')">
                <div class="text-center m-5" v-if="loading">
                    <div v-if="!form.errors.any()">
                        <h2>{{ $t('register-loading') }}</h2>
                        <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
                    </div>
                    <div v-if="form.errors.any()">
                        <div class="alert alert-danger alert-dismissible" role="alert">
                            <h2>{{ $t('register-invitation-required-header') }}</h2>
                            <p>{{ $t('register-invitation-required-body') }}</p>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="register" @keydown="form.onKeydown($event)" v-if="!loading">
                    <!-- Name -->
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
                            <has-error :form="form" field="name"/>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
                            <has-error :form="form" field="email"/>
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
                            <has-error :form="form" field="password"/>
                        </div>
                    </div>

                    <!-- Password Confirmation -->
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
                            <has-error :form="form" field="password_confirmation"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-7 offset-md-3 d-flex">
                            <!-- Submit Button -->
                            <v-button :loading="form.busy">
                                {{ $t('register') }}
                            </v-button>

                            <!-- GitHub Register Button -->
                            <login-with-github/>
                        </div>
                    </div>
                </form>
            </card>
        </div>
    </div>
</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/LoginWithGithub'

export default {
    middleware: 'guest',

    components: {
        LoginWithGithub
    },

    metaInfo () {
        return { title: this.$t('register') }
    },

    computed: {
        initialSetupCompleted () {
            return this.$store.getters['config/initial_setup_completed']
        },
        token () {
            return this.$route.params.token
        }
    },

    data: () => ({
        loading: true,
        form: new Form({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            token: ''
        })
    }),

    created () {
        if(this.initialSetupCompleted) {
            this.getInvitation()
        }
        else {
            this.loading = false
        }
    },

    methods: {
        async getInvitation () {
            const { data } = await this.form.get('/api/register/' + this.token)
            if(data.token !== this.token) {
                this.$router.push({ name: 'search' })
            }
            else {
                this.form.name = data.name
                this.form.email = data.email
                this.form.token = data.token
                this.loading = false
            }
        },
        async register () {
            // Register the user.
            const { data } = await this.form.post('/api/register')

            // Log in the user.
            const { data: { token } } = await this.form.post('/api/login')

            // Save the token.
            this.$store.dispatch('auth/saveToken', { token })

            // Update the user.
            await this.$store.dispatch('auth/updateUser', { user: data })

            // Redirect to search.
            this.$router.push({ name: 'search' })
        }
    }
}
</script>

<style lang="scss">
    .first-register {

    }
</style>
