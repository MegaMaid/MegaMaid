import Vue from 'vue'
import axios from 'axios'
import * as types from '../mutation-types'

const { initialSetupCompleted } = window.config

// state
export const state = {
    initial_setup_completed: initialSetupCompleted,
    plex: {},
    radarr: {},
    sonarr: {},
    couchpotato: {},
    users: [],
    invites: [],
    email: {},
    backups: {}
}

// getters
export const getters = {
    initial_setup_completed: state => state.initial_setup_completed,
    users: state => state.users,
    invites: state => state.invites,
    plex: state => state.plex,
    radarr: state => state.radarr,
    sonarr: state => state.sonarr,
    couchpotato: state => state.couchpotato,
    email: state => state.email,
    backups: state => state.backups
}

// mutations
export const mutations = {
    update_isc (state, isc) {
        state.initial_setup_completed = isc
    },
    set_loading_radarr (state, data) {
        Vue.set(state, 'loading_radarr', data)
    },
    set_plex (state, data) {
        Vue.set(state, 'plex', data)
    },
    set_radarr (state, data) {
        Vue.set(state, 'radarr', data)
    },
    set_sonarr (state, data) {
        Vue.set(state, 'sonarr', data)
    },
    set_couchpotato (state, data) {
        Vue.set(state, 'couchpotato', data)
    },
    set_users (state, data) {
        Vue.set(state, 'users', data)
    },
    set_invites (state, data) {
        Vue.set(state, 'invites', data)
    },
    set_email (state, data) {
        Vue.set(state, 'email', data)
    },
    set_backups (state, data) {
        Vue.set(state, 'backups', data)
    }
}

// actions
export const actions = {
    updateISC ({ commit }, isc) {
        commit('update_isc', isc)
    },
    updatePlex ({ commit }, data) {
        commit('set_plex', data)
    },
    updateRadarr ({ commit }, data) {
        commit('set_radarr', data)
    },
    updateSonarr ({ commit }, data) {
        commit('set_sonarr', data)
    },
    updateCouchPotato ({ commit }, data) {
        commit('set_couchpotato', data)
    },
    updateEmail ({ commit }, data) {
        commit('set_email', data)
    },
    updateBackups ({ commit }, data) {
        commit('set_backups', data)
    },
    async fetchPlex ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/plex')
            commit('set_plex', data)
        } catch (e) {
            commit('set_plex', {})
        }
    },
    async fetchRadarr ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/radarr')
            commit('set_radarr', data)
        } catch (e) {
            commit('set_radarr', {})
        }
    },
    async fetchSonarr ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/sonarr')
            commit('set_sonarr', data)
        } catch (e) {
            commit('set_sonarr', {})
        }
    },
    async fetchCouchPotato ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/couchpotato')
            commit('set_couchpotato', data)
        } catch (e) {
            commit('set_couchpotato', {})
        }
    },
    async fetchUsers ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/users')
            commit('set_users', data)
        } catch (e) {
            commit('set_users', {})
        }
    },
    async fetchInvites ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/users/invite')
            commit('set_invites', data)
        } catch (e) {
            commit('set_invites', {})
        }
    },
    async fetchEmail ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/email')
            commit('set_email', data)
        } catch (e) {
            commit('set_email', {})
        }
    },
    async fetchBackups ({ commit }) {
        try {
            const { data } = await axios.get('/api/settings/backups')
            commit('set_backups', data)
        } catch (e) {
            commit('set_backups', {})
        }
    },
}
