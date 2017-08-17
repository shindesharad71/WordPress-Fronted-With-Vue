<template>
  <div>
    <div class="container">
        <div class="loader text-center" v-show="loading">
            <h3><i class="fa fa-3x fa-spinner fa-spin"></i> Loading...</h3>
        </div>
	</div>
    <div class="container">
        <h1>{{ cat.name }} <span class="badge badge-primary">{{ cat.count }} Posts</span></h1><br>
        <h3>Posts Having <u>{{ cat.name }}</u> Category</h3><br>
        <div class="row">
            <div class="card border-dark mb-3 col-md-5 mr-auto" v-for="post in posts">
                <router-link tag="a" :to="{ name: 'post', params: { id: post.id }}">
                    <!--<img class="card-img-top" src="#" :alt="post.title.rendered">-->
                    <div class="card-body">
                        <h4 class="card-title">{{ post.title.rendered }}</h4>
                        <p class="card-text" v-html="post.excerpt.rendered"></p>
                        <p class="card-text"><small class="text-muted">Posted on {{ post.date }}</small></p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      cat: [],
      posts: []
    }
  },
  created() {
		axios.get('http://sharadshinde.in/client/wp-json/wp/v2/categories/'+this.$route.params.id)
		.then((response) => {
            this.cat = response.data;
            // Get Posts By Category
            axios.get('http://sharadshinde.in/client/wp-json/wp/v2/posts?categories='+this.$route.params.id)
            .then((response) => {
                this.posts = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
            // END Posts By Category
			this.loading = false;
		})
		.catch((error) => {
			console.log(error);
		});
  }
}
</script>
