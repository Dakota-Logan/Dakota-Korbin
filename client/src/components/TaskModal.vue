<template>
	<div id="task-modal">
		{{task}}
	</div>
</template>

<script>
	export default {
		name: "TaskModal",
		computed: {
			task () {
				return this.$store.state.activeTask;
			}
		},
		methods: {
			edit () {},
			delete () {}
		},
		
	}
</script>

<style scoped>

</style>