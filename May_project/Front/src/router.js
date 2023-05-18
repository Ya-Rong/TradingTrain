import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import FlightSearch from './components/FlightSearch.vue'
import FlightSearchResults from './components/FlightSearchResults.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'App',
    //     component: App,
    //   },
  {
    path: '/FlightSearch',
    name: 'FlightSearch',
    component: FlightSearch
  },
  {
    path: '/FlightSearchResults',
    name: 'FlightSearchResults',
    component: FlightSearchResults
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
