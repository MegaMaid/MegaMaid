import store from '~/store'

export default (to, from, next) => {
    if (! store.getters['config/initial_setup_completed']) {
        if(to.name !== 'register') {
            next({ name: 'register' })
        } else {
            next()
        }
    } else {
        next()
    }
}
