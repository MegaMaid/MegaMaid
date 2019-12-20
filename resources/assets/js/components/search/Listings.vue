<template>
    <div v-if="search.has_results">
        <h2>Results:</h2>

        <ul class="nav nav-pills nav-fill">
            <mm-search-nav label="Movies" type="movie" :selectedType="selectedType" v-on:mm-search-nav-changed="setType" />
            <mm-search-nav label="TV" type="tv" :selectedType="selectedType" v-on:mm-search-nav-changed="setType" />
            <mm-search-nav label="Actors" type="person" :selectedType="selectedType" v-on:mm-search-nav-changed="setType" />
        </ul>

        <hr />
        <div class="row">
            <mm-search-listing v-for="item, idx in selected.results" :key="idx + '-' + item.id" :item="item" :search_type="selected.search_type" />
        </div>
        <pagination :page="selected.page" :pages="selected.total_pages" v-on:pagination-clicked="setPage"></pagination>
    </div>
</template>

<script>
    export default {
        name: 'MmSearchListings',
        computed: {
            search () {
                return this.$store.getters['search/all']
            },
            selected () {
                return this.$store.getters['search/' + this.selectedType]
            },
            bestMatchType () {
                return this.$store.getters['search/best_match_type']
            },
        },
        watch: {
            bestMatchType (value) {
                this.selectedType = value
            }
        },
        data () {
            return {
                selectedType: 'movie'
            }
        },
        methods: {
            setType (selectedType) {
                this.selectedType = selectedType
            },
            setPage (page) {
                this.$store.dispatch('search/exec', { type: this.selectedType, page: page })
            }
        }
    }
</script>

<style lang="scss">

</style>
