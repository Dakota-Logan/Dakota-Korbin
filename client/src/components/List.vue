<template>
	<div class="list">
		<header>
			<h3>{{listData.title}}</h3>
		</header>
		<main>
			<task-component v-for="task in tasks" :taskData="task" :id="task._id"/>
		</main>
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
				return this.$store.state.tasks.filter (cur => cur.listId === listData._id)
			}
		},
		methods: {}
	};
</script>

<style scoped>
	.list {
		/*background-color: rgb(153,0,59);*/
		backdrop-filter: blur(5px) grayscale(35%);
		
	}
	
	h3 {
		width: 100%;
		border-bottom: 1px solid black;
	}

</style>
