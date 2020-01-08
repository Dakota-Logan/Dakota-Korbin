<template>
	<div class="board">
		<header>
			<router-link to="/"><h3>Kanban</h3></router-link>
		</header>
		<main>
			<p>This is your board you dumb fuck.</p>
			<h1>{{board.title}}</h1>
			<h3>{{board.description}}</h3>
			<div id="lists">
				<List v-for="list in lists" :id="list._id" :listData="list"></List>
			</div>
		</main>
	
	</div>
</template>

<script>
	import List from '../components/List'
	
	export default {
		name: "board",
		mounted () {
			this.$store.dispatch ('getOne', {
				address: 'boards',
				commit: 'setOne',
				commitAddress: 'activeBoard',
				id: this.$route.params.boardId
			});
			this.$store.dispatch ('getAll', {
				address: `boards/${this.$route.params.boardId}/lists`,
				commitAddress: 'lists'
			});
			this.$store.dispatch ('getAll', {
				address: `boards/${this.$route.params.boardId}/tasks`,
				commitAddress: 'tasks'
			});
			setTimeout (this.$store.dispatch ('getAll', {
				address: `boards/${this.$route.params.boardId}/comments`,
				commitAddress: 'comments'
			}), 1000);
		},
		components: {
			List
		},
		computed: {
			board () {
				return this.$store.state.activeBoard;
			},
			lists () {
				return (this.$store.state.lists);
			},
			tasks () {
				return (this.$store.state.tasks);
			}
		},
	}
</script>

<style>
	#lists{
		display: flex;
		flex-wrap: wrap;
	}
</style>
