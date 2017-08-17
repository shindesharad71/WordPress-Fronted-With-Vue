<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand" tag="a"><i class="fa fa-2x fa-newspaper-o" aria-hidden="true"></i></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="item in pages">
        <router-link :to="{name: 'pages', params: {id: item.id}}" active-class="active" class="nav-link" tag="a">{{ item.title.rendered }}</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      pages: []
    }
  },
  created() {
		axios.get('http://sharadshinde.in/client/wp-json/wp/v2/pages/')
		.then((response) => {
			this.pages = response.data;
			this.loading = false;
		})
		.catch((error) => {
			console.log(error);
		});
  }
}
</script>


<style scoped>
nav {
  margin-bottom: 40px;
  height: 70px;
}
</style>