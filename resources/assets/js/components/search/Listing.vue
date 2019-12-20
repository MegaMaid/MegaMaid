<template>
    <div class="col-md-6 col-sm-12 media-entry">
        <div class="card mb-4">
            <div class="card-body">
                <h3 class="card-title"><a :href="item.view_more_url" target="_blank">{{ item.title }}<span v-if="item.year"> ({{ item.year }})</span></a></h3>
                <div class="row">
                    <div class="col-md-4 col-4 media-poster">
                        <a :href="item.view_more_url" target="_blank"><img :src="item.poster" :alt="item.title"/></a>
                    </div>
                    <div class="col-md-8 col-8">
                        <p class="card-text item-summary" :class="item.type" v-if="item.type !== 'person'">
                            <truncate class="summary-show-more" clamp="..." :length="350" less="Show Less" :text="item.summary"></truncate>
                            <a href="#" class="see-cast-link" v-on:click="searchCast">See Cast</a>
                        </p>
                        <div v-if="isMediaCreditSearch">
                            <p class="card-text item-summary"><small>Role:</small></p>
                            <h4>{{ item.character }}</h4>
                        </div>
                        <div v-else>
                            <p class="card-text item-summary" v-if="item.type === 'person'">{{ item.title }} has appeared in:</p>
                            <div class="row" v-if="item.type === 'person'">
                                <div class="col-4 p-1" v-for="kf, idx in item.known_for">
                                    <a :href="kf.view_more_url" target="_blank"><img :src="kf.poster" :alt="kf.title"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer" v-if="isPerson">
                <button class="btn btn-block btn-lg btn-outline-warning" v-on:click="searchPerson">+ Search</button>
            </div>
            <div class="card-footer" v-else-if="inPlex">
                <button class="btn btn-block btn-lg btn-info">In Plex</button>
            </div>
            <div class="card-footer" v-else-if="inMegaMaid">
                <button class="btn btn-block btn-lg btn-success">Request Submitted</button>
            </div>
            <div class="card-footer" v-else-if="inRequested">
                <button class="btn btn-block btn-lg btn-info">Requested</button>
            </div>
            <div class="card-footer" v-else>
                <button class="btn btn-block btn-lg btn-outline-warning" v-if="!isPerson && !requesting" v-on:click="request">+ Request</button>
                <button class="btn btn-block btn-lg btn-outline-secondary" v-if="!isPerson && requesting" v-on:click="request">Requesting <fa class="global-searching-spinner" icon="cog" spin /></button>
            </div>
        </div>
    </div>
</template>

<script>
    import truncate from 'vue-truncate-collapsed'
    import ApiRequest from '~/api/request'

    export default {
        name: 'MmSearchListing',
        props: ['item', 'search_type'],
        components: {
            'truncate': truncate
        },
        computed: {
            inMegaMaid () {
                return this.item.request_sent_to_megamaid || false
            },
            inPlex () {
                return this.item.exists_in_plex || false
            },
            inRequested () {
                return this.item.already_requested || false
            },
            isPerson() {
                return this.item.type === 'person'
            },
            isMediaCreditSearch() {
                return this.isMovieCreditSearch || this.isTvCreditSearch
            },
            isMovieCreditSearch() {
                return this.search_type === 'movie_credits' && this.item.type === 'person'
            },
            isTvCreditSearch() {
                return this.search_type === 'tv_credits' && this.item.type === 'person'
            }
        },
        data: () => ({
            requesting: false
        }),
        methods: {
            searchPerson () {
                this.$store.dispatch('search/exec', { type: 'person_credits', query: this.item.id })
                this.$store.commit('search/cut_to_record', { id: this.item.id, type: 'person' })
            },
            searchCast () {
                this.$store.dispatch('search/exec', { type: this.item.type + '_credits', query: this.item.id })
                this.$store.commit('search/cut_to_record', { id: this.item.id, type: this.item.type })
                this.$store.commit('search/cut_to_record', { id: this.item.id, type: this.item.type === 'movie' ? 'movie' : 'movie' })
            },
            async request () {
                this.requesting = true
                ApiRequest (this.item.type, this.item.id,
                    (data) => {
                        this.requesting = false
                        this.$store.commit('search/search_item_requested', { type: data.type, id: data.tmdbId });
                    },
                    (err) => {
                        this.requesting = false
                    }
                )
            }
        }
    }
</script>

<style lang="scss">
    .media-entry {
        display: flex;
        flex: 1 0 auto;

        .card {
            width: 100%;
        }

        h3 a {
            color: rgb(33, 37, 41);
        }

        .media-poster > img {
            max-height: 220px;
        }
        .item-summary {
            &.movie, &.tv {
                div {
                    display: inline;
                }
            }
            .see-cast-link {
                padding-left: 0.25rem;
            }
            .summary-show-more {
                a {
                    color: red;
                }
            }
        }
    }
</style>
