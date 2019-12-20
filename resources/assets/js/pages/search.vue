<template>
    <div class="container page-search">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-warning">Search</h1>
                <p>Type some words, press enter and be Amazed!</p>
                <div class="input-group mb-3">
                    <input v-model="searchTerm" type="text" class="form-control" placeholder="Search Term" aria-label="Search Term" aria-describedby="basic-addon" v-on:keyup.enter="onSearchHandler">
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon" v-on:click="onSearchHandler"><fa icon="search" /></span>
                    </div>
                </div>
                <hr />
                <div class="searching-indicator text-center mt-5" v-if="search.api_searching && ! search.has_results">
                    <h2>Just a sec, I am reticulating splines...</h2>
                    <fa class="global-searching-spinner mt-3" icon="cog" size="6x" spin />
                </div>
                <mm-search-listings />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    metaInfo () {
        return { title: this.$t('search') }
    },
    computed: {
        search () {
            return this.$store.getters['search/all']
        }
    },
    data () {
        return {
            searchTerm: '',
            searchTimeout: null
        }
    },
    methods: {
        onSearchHandler () {
            this.$store.commit('search/query', this.searchTerm)
            this.$store.dispatch('search/exec', {})
        }
    },
    created () {
        this.searchTerm = this.search.query
    }
}
</script>

<style lang="scss">
    .page-search {
        .search-results {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(251, 249, 251, 0.6);

            h2, h2 > a {
                color: #fbf9fb;
            }
        }
    }
</style>
