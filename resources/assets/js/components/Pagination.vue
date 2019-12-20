<template>
    <nav aria-label="Page navigation example" v-if="pages > 1">
    <paginate
        :initial-page="page - 1"
        :page-count="pages"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination justify-content-center'"
        :page-class="'page-item'"
        page-link-class="page-link"
        next-link-class="page-link"
        prev-link-class="page-link"
        break-link-class="page-link" />
    </nav>
</template>

<script>
export default {
    name: 'Pagination',

    props: {
        page: { type: Number, default: 0 },
        pages: { type: Number, default: 0 }
    },
    methods: {
        clickCallback (pageNum) {
            this.$emit('pagination-clicked', pageNum)
        }
    }
}
</script>
