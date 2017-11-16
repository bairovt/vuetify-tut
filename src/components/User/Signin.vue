<template>
	<v-container>
		<v-layout row v-if="error">
			<v-flex xs12 sm6 offset-sm3>
				<app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<form @submit.prevent="onSignin">
					<v-text-field
							name="email"
							label="Mail"
							id="email"
							type="email"
							v-model="email"
							required>
					</v-text-field>
					<v-text-field
							name="password"
							label="Password"
							id="password"
							type="password"
							v-model="password"
							required>
					</v-text-field>
					<v-btn type="submit"
					       class="primary"
					       :disabled="loading"
					       :loading="loading"
					>
						Sign in
						<span slot="loader" class="custom-loader">
			        <v-icon light>cached</v-icon>
			      </span>
					</v-btn>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      formIsValid () {
        return this.email && this.password
      },
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
	    loading () {
        return this.$store.getters.loading
	    }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.commit('setLoading', true)
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed () {
        this.$store.commit('clearError')
      }
    }
  }
</script>