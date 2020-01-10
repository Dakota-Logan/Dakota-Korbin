<template>
	<div id="board">
		<header>
			<router-link to="/">
				<h3 id="home-link">Kanban</h3>
			</router-link>
			<button
				id="add-list"
				class="btn btn-dark"
				type="button"
				data-toggle="modal"
				data-target="#FormModal"
				@click="modalAddList"
			>
				Add
				List
			</button>
		</header>
		<main>
			<FormModal/>
			<TaskModal />
			<!--Add list-->
			<h1 style="margin-top: 10px">{{board.title}}</h1>
			<h3>{{board.description}}</h3>
			<div id="lists">
				<List v-for="list in lists" :id="list._id" :listData="list"/>
			</div>
		</main>
	</div>
</template>


<script>
	import List from "../components/List";
	import FormModal from "../components/FormModal.vue";
	import TaskModal from "../components/TaskModal";
	
	export default {
		name: "board",
		mounted () {
			this.$store.dispatch ("getOne", {
				address: "boards",
				commit: "setOne",
				commitAddress: "activeBoard",
				id: this.$route.params.boardId
			});
			this.$store.dispatch ("getAll", {
				address: `boards/${this.$route.params.boardId}/lists`,
				commitAddress: "lists"
			});
			this.$store.dispatch ("getAll", {
				address: `boards/${this.$route.params.boardId}/tasks`,
				commitAddress: "tasks"
			});
			setTimeout (this.$store.dispatch ('getAll', {
				address: 'boards/'+this.$route.params.boardId+'/comments',
				commitAddress: 'comments'
			}), 5000);
		},
		components: {
			List,
			FormModal,
			TaskModal
		},
		data () {
			return {};
		},
		computed: {
			board () {
				return this.$store.state.activeBoard;
			},
			lists () {
				return this.$store.state.lists;
			},
			tasks () {
				return this.$store.state.tasks;
			}
		},
		methods: {
			modalAddList () {
				this.$store.commit ("setModalType", {
					address: "addList",
					data: true
				});
			}
		}
	};
</script>

<style>
	#add-list {
		position: absolute;
		top: 0;
		right: 0;
		margin: 10px 15px 0 0;
	}

	#board {
		min-height: 100vh;

		background-image: url('../assets/mountains-backdrop.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		color: white;
		text-shadow: 2px 2px gray;
		z-index: 1;
	}
	
	#home-link {
		text-shadow: 1px 1px black;
	}
	
	#lists {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	
	.list {
		margin: .25rem .4rem;
		padding: .25rem .25rem;
		
		width: 80vw;
		min-height: 400px;
		border: 1px solid black;
		border-radius: 7px;
	}
	
	.btn {
		filter: drop-shadow(2px 2px rgb(204, 0, 79));
	}
	
	.task {
		margin: .5rem;
		background-color: rgba(0,0,0,.3);
		border-radius: 7px;
		box-shadow: 1px 1px 5px rgba(0,0,0,0.8);
	}
	
	@media screen and (min-width: 800px) {
		.list {
			margin: .5rem .75rem;
			padding: .5rem .5rem;
			
			width: 40vw;
		}
	}
	
	@media screen and (min-width: 1200px) {
		.list {
			width: 25vw;
		}
	}
	
	@media screen and (min-width: 1800px) {
		.list {
			width: 20vw;
			min-height: 60vh;
		}
	}
</style>

//