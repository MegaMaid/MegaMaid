import Vue from 'vue'
import Cast from '~/store/services/cast';
import ApiSearch from '~/api/search'

const stateTemplate = {
    page: 0,
    total_pages: 0,
    total_results: 0,
    api_searching: false,
    has_results: false,
    best_match_type: '',
    results: []
};

const hasResults = (state) => {
    return state.movie.total_results + state.tv.total_results + state.person.total_results > 0
}

export const state = {
    api_searching: false,
    has_results: false,
    query: '',
    movie: Object.assign({}, stateTemplate),
    tv: Object.assign({}, stateTemplate),
    person: Object.assign({}, stateTemplate),
}

export const actions = {
    exec ({ commit, state, getters }, { type, page, query }) {
        type = typeof type === 'undefined' ? 'all' : type,
        page = typeof page === 'undefined' ? 1 : page,
        query = typeof query === 'undefined' ? getters.query : query
        commit('search_start', type)
        ApiSearch({ type, page, query }, (data) => commit('search_end', data))
    }
}

export const mutations = {
    query (state, query) {
        Vue.set(state, 'query', query)
    },
    cut_to_record (state, { type, id }) {
        Vue.set(state[type], 'results', state[type]['results'].filter(i => i.id === id))
        Vue.set(state[type], 'page', 1)
        Vue.set(state[type], 'total_pages', 1)
        Vue.set(state[type], 'total_results', state[type].results.length)
    },
    search_start (state, type) {
        var types = [];
        if(type === 'all') {
            types.push('movie', 'tv', 'person')
        }
        else if(type === 'person_credits') {
            types.push('movie', 'tv')
        }
        else if(type === 'movie_credits') {
            types.push('tv', 'person')
        }
        else if(type === 'tv_credits') {
            types.push('movie', 'person')
        }
        else {
            types.push(type)
        }
        types.forEach(t => Vue.set(state, t, Object.assign({}, stateTemplate)))
        types.forEach(t => Vue.set(state[t], 'api_searching', true))
        Vue.set(state, 'has_results', hasResults(state))
        Vue.set(state, 'api_searching', true)
    },
    search_end (state, data) {
        for(const type in data) {
            if(typeof data[type] === 'object') {
                state[type] = Cast(data[type])
            }
        }
        Vue.set(state, 'best_match_type', '')
        if(state.best_match_type === '')
        {
            if(typeof data['best_match_type'] === 'string' && data['best_match_type'].length > 0) {
                Vue.set(state, 'best_match_type', data['best_match_type'])
            }
            else if(data['search_type'] === 'movie_credits' || data['search_type'] === 'tv_credits') {
                Vue.set(state, 'best_match_type', 'person')
            }
            else if(state.movie.results.length > 0) {
                Vue.set(state, 'best_match_type', 'movie')
            }
            else if(state.tv.results.length) {
                Vue.set(state, 'best_match_type', 'tv')
            }
            else if(state.person.results.length) {
                Vue.set(state, 'best_match_type', 'person')
            }
            else {
                Vue.set(state, 'best_match_type', 'movie')
            }
        }
        Vue.set(state, 'has_results', hasResults(state))
        Vue.set(state, 'api_searching', false)
        Vue.set(state['movie'], 'api_searching', false)
        Vue.set(state['tv'], 'api_searching', false)
        Vue.set(state['person'], 'api_searching', false)
    },
    search_item_requested (state, { type, id }) {
        const idx = state[type].results.findIndex((e) => e.id === id)
        if(idx >= 0) {
            Vue.set(state[type].results[idx], 'request_sent_to_megamaid', true)
        }
    }
}

export const getters = {
    all: (state) => state,
    movie: (state) => state.movie,
    tv: (state) => state.tv,
    person: (state) => state.person,
    query: (state) => state.query,
    best_match_type: (state) => state.best_match_type
}
