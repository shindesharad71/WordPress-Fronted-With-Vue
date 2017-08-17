<template>
	<div>
    <div class="container">
			<div class="loader text-center" v-show="loading">
				<h3><i class="fa fa-3x fa-spinner fa-spin"></i> Loading...</h3>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">  
        <article>
          <img :src="imgData.guid.rendered" class="img-fluid post-image" :alt="post.title.rendered">
          <h1 v-html="post.title.rendered"></h1>
          <div><p>Posted By <router-link :to="{name: 'user', params: {id: author.id}}" tag="a"><b>{{ author.name }}</b></router-link> In <router-link :to="{name: 'category', params: {id: cat.id}}" tag="a">
            <b>{{ cat.name }}</b></router-link> On <b>{{ post.date }}</b></p>
          </div>
          <p v-html="post.content.rendered"></p>
          <hr>
          <div class="container">
            <h3>Comments</h3><br>
            <template v-for="comment in comments">
              <blockquote class="alert alert-info blockquote">
                <p class="mb-0" v-html="comment.content.rendered"></p>
                <footer class="blockquote-footer" v-html="comment.author_name"></footer>
              </blockquote>
            </template>
          </div>
        </article>		
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
      post: [], author: [], imgData: [], cat: [], comments: []
		}
	},
	created() {
		axios.get('http://sharadshinde.in/client/wp-json/wp/v2/posts/'+this.$route.params.id)
		.then((response) => {
      this.post = response.data;
      // For Author Data
      axios.get('http://sharadshinde.in/client/wp-json/wp/v2/users/'+this.post.author)
      .then((response) => {
        this.author = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      // Author Data Complete
      // Post Feature Image
      axios.get(this.post._links['wp:featuredmedia'][0].href)
      .then((response) => {
        this.imgData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      // Post Feature Image End
      // Post Category
      axios.get('http://sharadshinde.in/client/wp-json/wp/v2/categories/'+this.post.categories[0])
      .then((response) => {
        this.cat = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      // Category End
      // Show Comments For Post
      axios.get('http://sharadshinde.in/client/wp-json/wp/v2/comments?post='+this.post.id)
      .then((response) => {
        this.comments = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      // End Show Comments For Post
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

a, a:hover {
  text-decoration: underline;
}

.post-image {
  height: 300px;
  width: 100%;
}
</style>
