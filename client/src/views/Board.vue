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
			<TaskModal/>
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
        mounted() {
            this.$store.dispatch("getOne", {
                address: "boards",
                commit: "setOne",
                commitAddress: "activeBoard",
                id: this.$route.params.boardId
            });
            this.$store.dispatch("getAll", {
                address: `boards/${this.$route.params.boardId}/lists`,
                commitAddress: "lists"
            });
            this.$store.dispatch("getAll", {
                address: `boards/${this.$route.params.boardId}/tasks`,
                commitAddress: "tasks"
            });
            setTimeout(this.$store.dispatch('getAll', {
                address: 'boards/' + this.$route.params.boardId + '/comments',
                commitAddress: 'comments'
            }), 5000);
        },
        components: {
            List,
            FormModal,
            TaskModal
        },
        data() {
            return {};
        },
        computed: {
            board() {
                return this.$store.state.activeBoard;
            },
            lists() {
                return this.$store.state.lists;
            },
            tasks() {
                return this.$store.state.tasks;
            }
        },
        methods: {
            modalAddList() {
                this.$store.commit("setModalType", {
                    address: "addList",
                    data: true
                });
            }
        }
    };
</script>

<style>
	
	@import "../assets/styles/Board.css";
	
</style>

//