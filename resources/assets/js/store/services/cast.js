const date = (o) => {
    return o.release_date && o.release_date.length > 0 ? new Date(o.release_date) : false
}

export default (obj) => {
    obj.results.forEach(o => {
        o.date = date(o);
    })
    obj.api_searching = false
    obj.has_results = obj.total_results > 0
    return obj
}
