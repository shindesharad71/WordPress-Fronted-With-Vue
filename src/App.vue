<template>
  <div>
    <app-nav></app-nav>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view class="bottom"></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  data () {
    return {
      
    }
  },
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>

<style>
a, a:hover {
  text-decoration: none;
  color: #000;
}

.bottom {
  margin-top: 120px;
  margin-bottom: 40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
