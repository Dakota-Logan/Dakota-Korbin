<template>
	<div id="board">
		<header>
			<router-link to="/">
				<h3 id="home-link">Kanban</h3>
			</router-link>
		</header>
		<main>
			<FormModal/> <!--Add list-->
			<button class="btn btn-dark" type="button" data-toggle="modal" data-target="#FormModal"
			        @click="modalAddList">Add
				List</button>
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
	import List from "../components/List";
	import FormModal from "../components/FormModal.vue";
	
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
			// setTimeout (this.$store.dispatch ('getAll', {
			// 	address: `boards/${this.$route.params.boardId}/comments`,
			// 	commitAddress: 'comments'
			// }), 1000);
		},
		components: {
			List,
			FormModal
		},
		data () {
			return {}
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
		methods: {
			modalAddList () {
				this.$store.commit('setModalType', {
					address: 'addList',
					data: true
				})
			}
		}
	}
</script>

<style>
	#board {
		min-height: 100vh;
		
		/*background-color: rgb(51, 0, 59);*/
		background-image: url('../assets/mountains-backdrop.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		color: white;
		text-shadow: 2px 2px gray;
	}
	
	#home-link {
		text-shadow: 1px 1px black;
	}
	
	#lists {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.list {
		margin: .5rem .75rem;
		padding: .5rem .5rem;
		
		width: 20vw;
		min-height: 60vh;
		border: 1px solid black;
	}
	
	.btn {
		filter: drop-shadow(2px 2px rgb(204, 0, 79));
	}
</style>
