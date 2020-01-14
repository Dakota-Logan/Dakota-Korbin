<template>
	<div class="task row" >
		<div class="col-12" @click="popUpTask" data-toggle="modal" data-target="#task-modal">
			<img class="delete-btn" src="../assets/icons8-delete.svg" @click="deleteTask"/>
			<h3>{{taskData.title}}</h3>
			<h5>{{taskData.description}}</h5>
			<div>
			</div>
		</div>
				<select
					text="Dropdown Button"
					class="m-md-2"
					@change="changeList"
				>
					<option v-for="list in lists" :value="list._id">{{list
						.title}}</option>
				</select>
	</div>
</template>

<script>
	import CommentComponent from "../components/Comment.vue";
	
	export default {
		name: "Task",
		props: ["taskData"],
		data () {
			return {
			};
		},
		// mounted() {
		// },
		computed: {
			lists () {
				return this.$store.state.lists;
			},
			comments () {
				return this.$store.state.comments.filter (
				cur => cur.taskId === this.taskData._id
				);
			}
		},
		methods: {
			changeList () {
				let elem = document.getElementById(this.taskData._id).childNodes[2];
				let val = elem.value;
				console.log (val)
				this.$store.dispatch ("edit", {
					address: "tasks"
					, data: {listId: val}
					, id: this.taskData._id
				});
			},
			deleteTask () {
				this.$store.dispatch ("delete", {
					address: "tasks",
					commit: "removeOne",
					id: this.taskData._id
				});
			},
			popUpTask () {
				this.$store.state.activeTask = this.taskData;
				this.$store.state.activeTask;
			}
		},
		components: {
			CommentComponent
		}
	};
</script>

<style>
	.delete-btn {
		margin: 0.25rem 0.5rem;
		
		width: 30px;
		position: absolute;
		bottom: 0;
		left: 0;
	}
</style>
