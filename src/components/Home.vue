<template>
	<v-container>  <!-- fluid class="mt-3"-->
		<v-layout row wrap>
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">
				<v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
				<v-btn large to="/meetup/new" class="info">Organize Meetup</v-btn>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs12 class="text-xs-center">
				<v-progress-circular
						indeterminate color="primary"
						:width="5"
						:size="50"
						v-if="loading"
				></v-progress-circular>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-2" v-if="!loading">
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item v-for="meetup in meetups" style="cursor: pointer;"
					                 :src="meetup.imageUrl"
					                 :key="meetup.id"
					                 @click="onLoadMeetup(meetup.id)"
					>
						<div class="title">{{meetup.title}}</div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		computed: {
	    meetups () {
	      return this.$store.getters.featuredMeetups
	    },
			loading () {
	      return this.$store.getters.loading
			}
		},
		methods: {
	    onLoadMeetup (id) {
	      this.$router.push('/meetups/'+id)
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