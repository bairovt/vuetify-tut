<template>
	<v-container>
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
					       :disabled="!formIsValid">
						Sign in
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
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
    }
  }
</script>