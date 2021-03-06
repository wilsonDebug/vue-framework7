import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: require('./index.vue')
  },
  '/modal': {
    component: require('./modal.vue')
  },
  '/navbar': {
    component: require('./navbar.vue')
  },
  '/searchbar': {
    component: require('./searchbar.vue')
  },
  '/toolbar': {
    component: require('./toolbar.vue')
  },
  '/tabbar': {
    component: require('./tabbar.vue')
  },
  '/content-block': {
    component: require('./content-block.vue')
  },
  '/side': {
    component: require('./side.vue')
  },
  '/grid': {
    component: require('./grid.vue')
  },
  '/popup': {
    component: require('./popup.vue')
  },
  '/list': {
    component: require('./list.vue')
  },
  '/form': {
    component: require('./form.vue')
  },
  '/buttons': {
    component: require('./buttons.vue')
  },
  '/actions': {
    component: require('./action-sheet.vue')
  },
  '/picker-modal': {
    component: require('./picker.vue')
  },
  '/preloader': {
    component: require('./preloader.vue')
  },
  '/login': {
    component: require('./login.vue')
  },
  '/progressbar': {
    component: require('./progressbar.vue')
  }
})

export default router
