<template>
    <li class="nav-item">
        <a
            class="nav-link"
            :class="extraClasses" href="#" v-on:click="setType">
            {{ label }} <span v-if="item.total_results > 0">[{{ item.total_results }}]</span>
            <fa class="global-searching-spinner" icon="cog" spin v-if="item.api_searching"/>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'MmSearchNav',
        props: ['label', 'type', 'selectedType'],
        computed: {
            item () {
                return this.$store.getters['search/' + this.type]
            },
            extraClasses () {
                return {
                    'active' : this.type === this.selectedType && this.item.total_results > 0,
                    'disabled' : this.item.total_results < 1
                }
            }
        },
        methods: {
            setType () {
                this.$emit('mm-search-nav-changed', this.type)
            }
        },
    }
</script>
