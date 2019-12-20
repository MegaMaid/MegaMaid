import axios from 'axios'

const errHandle = function (ecb, err) {
    if(typeof ecb !== 'undefined') {
        ecb (err)
    }
    else {
        console.log(err)
    }
}

export default ({ type, page, query }, cb, ecb) => {
    axios({
        method: 'post',
        url: 'api/search',
        data: {
            type,
            query,
            page: typeof page === 'undefined' ? 1 : page
        }
    })
    .then((response) => cb (response.data), (err) => errHandle (ecb, err))
}
