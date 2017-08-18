<template>
	<div>
    <div class="container">
			<div class="loader text-center" v-show="loading">
				<h3><i class="fa fa-3x fa-spinner fa-spin"></i> Loading...</h3>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
        <div class="col-md-9">  
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
                <blockquote class="alert alert-success blockquote">
                  <p class="mb-0" v-html="comment.content.rendered"></p>
                  <footer class="blockquote-footer" v-html="comment.author_name"></footer>
                </blockquote>
              </template>
              <template v-if="comments.length <= 0">
                <p class="alert alert-info">No Comments Available On This Post!</p>
              </template>
            </div>
            </article>
          </div>
          <div class="col-md-3">
            <!-- For Author -->
            <div class="card bg-light mb-3">
              <div class="card-header">About Author</div>
                <div class="card-body">
                  <img :src="author.avatar_urls[48]" class="img-fluid">
                  <h4 class="card-title">{{ author.name }}</h4>
                  <p class="card-text">{{ author.description }}</p>
                </div>
            </div><br>
            <!-- For Tags -->
            <div class="card">
              <div class="card-header">Tags</div>
                <div class="card-body">
                  <div v-for="tag in tagData">
                    <router-link :to="{name: 'tag', params: {id: tag.id}}" tag="a">
                      <h6><span class="badge badge-primary">{{ tag.name }}</span></h6>
                    </router-link>
                  </div>
                  <template v-if="tagData.length <= 0">
                      <p>No tags available for this post.</p>
                  </template>
                </div>
            </div>
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
      noComment: false,
      post: [], author: [], imgData: [], cat: [], comments: [], tagData: []
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
      // Tags Info
       axios.get('http://sharadshinde.in/client/wp-json/wp/v2/tags?post='+this.post.id)
      .then((response) => {
        this.tagData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      // End Tags Info
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
