<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h4>Create a new meetup</h4>
				<form @submit.prevent="createMeetup">
					<v-text-field
							name="title"
							label="Title"
							id="title"
							required
							v-model="title"
					></v-text-field>
					<v-text-field
							name="location"
							label="Location"
							id="location"
							required
							v-model="location"
					></v-text-field>
					<v-text-field
							name="imageUrl"
							label="Image URL"
							id="image-url"
							required
							v-model="imageUrl"
					></v-text-field>
					<img :src="imageUrl" width="250">
					<v-text-field
							name="description"
							label="Description"
							id="description"
							required
							v-model="description"
							multiLine
					></v-text-field>
					<h5>Выберите дату и время</h5>
					<v-date-picker
							:first-day-of-week="0"
							locale="ru-ru"
							v-model="date" class="mb-2">
					</v-date-picker>

					<v-time-picker v-model="time" format="24hr">
					</v-time-picker>

					<v-btn class="primary"
					       :disabled="!formIsValid"
					       type="submit">
						Create Meetup
					</v-btn>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  export default {
    data: function() {
	    return {
	      title: '',
		    location: '',
		    description: '',
		    imageUrl: '',
		    date: new Date(),
		    time: new Date()
	    }
	  },
		computed: {
	    formIsValid () {
	      return this.title !== '' &&
			      this.location !== '' &&
			      this.description !== '' &&
			      this.imageUrl !== ''
	    },
			submittableDateTime () {
	      let date = new Date(this.date);
	      if (typeof this.time === 'string') {
		      let hours = this.time.match(/^(\d+)/)[1]
		      let minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
	      } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
	      }
	      return date
			}
		},
		methods: {
	    createMeetup () {
	      if (!this.formIsValid) {
	        return
	      }
	      const meetup = {
          title: this.title,
          location: this.location,
          description: this.description,
          imageUrl: this.imageUrl,
		      date: this.submittableDateTime
	      };
	      // store in Firebase and fetch an id

	      this.$store.dispatch('createMeetup', meetup)
		    this.$router.push('/meetups')
	    }
		}
	}
</script>