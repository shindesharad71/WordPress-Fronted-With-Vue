import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Components For Routes
import Posts from './components/Posts.vue'
import Post from './components/Post.vue'
import Pages from './components/Pages.vue'
import User from './components/User.vue'
import Category from './components/Category.vue'
import Tag from './components/Tag.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/', // Routing Main Entry URL
    routes: [
        { path: '/', component: Posts },
        { path: '/posts', component: Posts },
        { path: '/post/:id', name: 'post', component: Post },
        { path: '/pages/:id', name: 'pages', component: Pages },
        { path: '/user/:id', name: 'user', component: User },
        { path: '/category/:id', name: 'category', component: Category },
        { path: '/tag/:id', name: 'tag', component: Tag }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})