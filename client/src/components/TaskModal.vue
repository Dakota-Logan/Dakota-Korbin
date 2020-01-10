<template>
	<div id="task-modal" class="modal row" tabindex="-1" role="dialog">
		<div id="task">
			<header>
				<h2>{{task.title}}</h2>
			</header>
			<main>
				<div id="comments">
					<Comment v-for="comment in comments" :commentData="comment" :id="comment._id"></Comment>
				<buttton data-dismiss="modal" data-toggle="modal" href="#FormModal" >Add Comment</buttton>
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
            comments() {
                return this.$store.state.comments;
            },
			task () {
                return this.$store.state.modalData;
			}
        },
        methods: {
            edit() {
            },
            delete() {
            }
        },

    }
</script>

<style scoped>

	#task {
		width: 65vw;
		height: 80vh;
		margin: 10vh auto;

		background-color: rgba(255, 255, 255, 0.35);
		backdrop-filter: blur(5px);
	}

</style>