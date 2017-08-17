<template>
  <div>
    <div class="container">
        <div class="loader text-center" v-show="loading">
            <h3><i class="fa fa-3x fa-spinner fa-spin"></i> Loading...</h3>
        </div>
	</div>
    <div class="container">
        <img :src="user.avatar_urls[96]" class="img-fluid">
        <h1>{{ user.name }}</h1>
        <p>{{ user.url }}</p>
        <p>{{ user.description }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      user: []
    }
  },
  created() {
		axios.get('http://sharadshinde.in/client/wp-json/wp/v2/users/'+this.$route.params.id)
		.then((response) => {
			this.user = response.data;
			this.loading = false;
		})
		.catch((error) => {
			console.log(error);
		});
  }
}
</script>
