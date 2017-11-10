<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h4>Create a new meetup</h4>
				<form>
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
					<v-btn class="primary" :disabled="!formIsValid">
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
		    imageUrl: ''
	    }
	  },
		computed: {
	    formIsValid () {
	      return this.title !== '' &&
			      this.location !== '' &&
			      this.description !== '' &&
			      this.imageUrl !== ''
	    }
		}

	}
</script>