<template>
	<div>
		<h3>{{listData.title}}</h3>
		<task-component v-for="task in tasks" :taskData="task" :id="task._id"/>
	</div>
</template>

<script>
	import TaskComponent from "../components/Task.vue";
	
	export default {
		name: "List",
		components: {
			TaskComponent
		},
		props: ["listData"],
		computed: {
			tasks () {
				return this.$store.state.tasks.filter(cur=> cur.listId===listData._id)
			}
		},
		methods: {}
	};
</script>

<style scoped>
</style>
