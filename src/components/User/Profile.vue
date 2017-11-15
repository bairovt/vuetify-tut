<template>
	<div>
		<p>The User Profile page</p>
		<!--<p>E-mail: {{ user.email }}</p>-->
	</div>
</template>

<script>
	export default {
	  computed: {
	    user () {
	      return this.$store.getters.user
	    }
	  }
	}
</script>