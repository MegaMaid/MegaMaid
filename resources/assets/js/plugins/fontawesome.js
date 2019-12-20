import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import {
    faUser,
    faLock,
    faSignOutAlt,
    faCog,
    faFilm,
    faTv,
    faDatabase,
    faMusic,
    faArchive,
    faSearch,
    faUsers,
    faEnvelope,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faHdd
} from '@fortawesome/fontawesome-free-solid/shakable.es'

import {
    faGithub
} from '@fortawesome/fontawesome-free-brands/shakable.es'

fontawesome.library.add(
    faUser,
    faLock,
    faSignOutAlt,
    faCog,
    faGithub,
    faFilm,
    faTv,
    faDatabase,
    faMusic,
    faArchive,
    faSearch,
    faUsers,
    faEnvelope,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faHdd
)

Vue.component('fa', FontAwesomeIcon)
