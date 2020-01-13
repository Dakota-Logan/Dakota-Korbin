<template>
	<div id="task-modal" class="modal row" tabindex="-1" role="dialog">
		<div id="task">
			<header>
				<h2>{{task.title}}</h2>
			</header>
			<main>
			<button @click="slideForm">Add Comment</button>
			<form class="base-state" id="slideout" @submit.prevent="addComment">
				<label class="sub-context" for="comment-text">Comment: </label>
				<textarea class="sub-context" cols="40" rows="3" id="comment-text" type="text" v-model="comment"/>
				<button class="button sub-context" type="submit">Add Comment</button>
			</form>
				<div id="comments">
					<Comment v-for="comment in comments" :commentData="comment" :id="comment._id"/>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
	import Comment from './Comment'
	
	export default {
		name: "TaskModal",
		components: {
			Comment
		},
		computed: {
			comments () {
				return this.$store.state.comments.filter(cur => cur.taskId === this.task._id);
			},
			task () {
				return this.$store.state.activeTask;
			}
		},
		data () {
			return {
				comment: ''
			}
		},
		methods: {
			addComment () {
				this.$store.dispatch ('create', {
					data: {
						body: this.comment,
						name: this.$store.state.user.name,
						authorId: this.$store.state.user._id,
						boardId: this.$route.params.boardId,
						taskId: this.$store.state.activeTask._id
					},
					commit: 'addOne',
					address: 'comments'
				})
			},
			edit () {
			
			},
			delete () {
				//#todo
			},
			slideForm () {
				document.getElementById ('slideout').classList.toggle ('to-state');
				document.getElementById ('slideout').classList.toggle ('base-state');
			}
		},
		
	}
</script>

<style scoped>
	
	@import "../assets/styles/TaskModal.css";

</style>