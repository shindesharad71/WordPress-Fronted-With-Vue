<template>
	<div>
    	<div class="container">
			<div class="loader text-center" v-show="loading">
				<h3><i class="fa fa-3x fa-spinner fa-spin"></i> Loading...</h3>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="card border-dark mb-3 col-md-5 mr-auto" v-for="post in posts">
					<router-link tag="a" :to="{ name: 'post', params: { id: post.id }}">
						<!--<img class="card-img-top" src="#" :alt="post.title.rendered">-->
						<div class="card-body">
							<h4 class="card-title">{{ post.title.rendered }}</h4>
							<p class="card-text" v-html="post.excerpt.rendered"></p>
							<p class="card-text"><small class="text-muted">{{ post.date }}</small></p>
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
			posts: [],
			imgData: []
		}
	},
	created() {
		axios.get('http://sharadshinde.in/client/wp-json/wp/v2/posts')
		.then((response) => {
			this.posts = response.data;
			this.loading = false;
		})
		.catch((error) => {
			console.log(error);
		});
  }
}
</script>

<style scoped>
.loader {
	margin-top: 250px;
	text-align: center;
	margin-bottom: 150px;
}
</style>
