import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import { HasError, AlertError, AlertSuccess } from 'vform'

import SearchListings from './search/Listings'
import SearchListing from './search/Listing'
import SearchNav from './search/Nav'
import Pagination from './Pagination'
import PlexToken from './settings/PlexToken'
import SettingsUsers from './settings/Users'
import SettingsInvite from './settings/Invite'
import SettingsInvites from './settings/Invites'

// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess,
  SearchListings,
  SearchListing,
  SearchNav,
  Pagination,
  PlexToken,
  SettingsUsers,
  SettingsInvite,
  SettingsInvites
].forEach(Component => {
  Vue.component(Component.name, Component)
})
