<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<form @submit.prevent="onSignup">
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
					<v-text-field
						name="passwordConfirm"
						label="Password confirm"
						id="passwordConfirm"
						type="password"
						v-model="passwordConfirm"
						:rules="[comparePass]"> <!--:disabled="!formIsValid"-->
					</v-text-field>
					<v-btn type="submit"
					       class="primary">

						Sign up
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
		    password: '',
		    passwordConfirm: ''
	    }
	  },
		computed: {
	    formIsValid () {
	      return this.email !== '' && this.password !== '' && passwordConfirm !== '' &&
             this.password === this.passwordConfirm
	    },
			comparePass () {
	      return this.password !== this.passwordConfirm ? 'Пароли не совпадают' : true
			}
		},
		methods: {
      onSignup () {
				console.log()
      }
		}
	}
</script>