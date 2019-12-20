import store from '~/store'

export default async (to, from, next) => {
    if (store.getters['auth/isAdmin']) {
        if (to.matched.find(e => e.path === '/settings')) {
            if (!store.getters['config/email'].type) {
                try {
                    store.dispatch('config/fetchEmail')
                } catch (e) { }
            }
        }


    }

    next()
}
