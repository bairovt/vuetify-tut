<template>
	<v-container fluid>  <!--class="mt-3"-->
		<v-layout row wrap>
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">
				<v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
				<v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-2">
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item v-for="meetup in meetups"
					                 :src="meetup.imageUrl"
					                 :key="meetup.id">
						<div class="title">{{meetup.title}}</div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
	  data(){
	    return {
	      meetups: [
		      {imageUrl: 'https://c1.staticflickr.com/2/1530/24444226506_2028124153_b.jpg',
			      id: 'asddsf12', title: 'Meetup in New York'},
          {imageUrl: 'https://c1.staticflickr.com/9/8233/8586789587_c5f7ac6079_b.jpg',
            id: 'zxdsf34', title: 'Meetup in Paris'}
	      ]
	    }
	  }
	}
</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		background-color: rgba(0,0,0,0.5);
		padding: 10px;
		color: white;
		font-size: 2em;
	}

	.carousel__controls {       /*does not imply - how to change default classes*/
		height: 20px !important;
	}

</style>