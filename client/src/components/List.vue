<template>
	<div class="list">
		<header>
			<img class="delete-btn" src="../assets/trash.svg" alt="delete" @click="deleteList">
			
			<h3>{{listData.title}}</h3>
			
			<button class="btn btn-dark" type="button" data-toggle="modal" data-target="#FormModal"
			        @click="modalAddTask">Add
				Task
			</button>
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
				return this.$store.state.tasks.filter (cur => cur.listId === this.listData._id)
			}
		},
		methods: {
			modalAddTask () {
				this.listData;
				this.$store.state.modalData = this.listData;
				this.$store.commit ('setModalType', {address: 'addTask', data: true});
			},
			deleteList () {
				// console.log(this.listData._id)
				this.$store.dispatch('delete', {
					address: 'lists',
					id: this.listData._id,
					commit: 'removeOne'
				})
			}
		}
	};
</script>

<style scoped>
	.list {
		/*background-color: rgb(153,0,59);*/
		backdrop-filter: blur(5px) grayscale(35%);
		
	}
	
	.delete-btn {
		margin: .25rem .5rem;
		
		width: 30px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	header {
		width: 100%;
		
		border-bottom: 1px solid black;
	}
	
	header button {
		margin: 1%;
		
		position: absolute;
		top: 0;
		right: 0;
	}

</style>
