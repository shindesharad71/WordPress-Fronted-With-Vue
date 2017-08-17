<template>
  <div>
    <div class="container">
			<div class="loader text-center" v-show="loading">
				<h3><i class="fa fa-3x fa-spinner fa-spin"></i> Loading...</h3>
			</div>
		</div>
    <div class="container" v-html="page.content.rendered"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      page: []
    }
  },
  created() {
		axios.get('http://sharadshinde.in/client/wp-json/wp/v2/pages/'+this.$route.params.id)
		.then((response) => {
			this.page = response.data;
			this.loading = false;
		})
		.catch((error) => {
			console.log(error);
		});
  }
}
</script>
