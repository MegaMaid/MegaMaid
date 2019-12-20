import axios from 'axios'
import swal from 'sweetalert2'

const errHandle = function (ecb, err) {
    swal({
        type: 'error',
        title: window.app.$t('error_alert_title'),
        text: window.app.$t('error_alert_text'),
        reverseButtons: true,
        confirmButtonText: window.app.$t('ok'),
        cancelButtonText: window.app.$t('cancel')
    })
    if(typeof ecb !== 'undefined') {
        ecb (err)
    }
    else {
        console.log(err)
    }
}

export default (type, id, cb, ecb) => {
    axios({
        method: 'post',
        url: 'api/request',
        data: { type: type, id: id }
    })
    .then((response) => cb (response.data), (err) => errHandle (ecb, err))
}
