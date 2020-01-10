<template>
  <div id="FormModal" class="modal row" tabindex="-1" role="dialog">
    <div class="list col" v-if="this.$store.state.modalObj.addList">
      <form @submit="createList">
        <input required type="text" v-model="newList.title" placeholder="title" />
        <button class="btn btn-success">Create List</button>
      </form>
    </div>
    <div class="task col" v-if="this.$store.state.modalObj.addTask">
      <form @submit="createTask">
        <input required type="text" v-model="newTask.title" placeholder="title" />
        <input type="text" v-model="newTask.description" placeholder="description" />
        <input required type="text" v-model="newTask.listId" placeholder="title" />
        <button class="btn btn-success">Create Task</button>
      </form>
    </div>
    <div class="comment col" v-if="this.$store.state.modalObj.addComment">
      <form @submit="createComment">
        <input required type="text" v-model="newComment.body" placeholder="comment" />
        <input required type="text" v-model="newComment.taskId" placeholder="title" />
        <button class="btn btn-success">Create Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormModal",
  // props: ["data", "id"],
  mounted() {
    console.log("in modal");
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId
      },
      newTask: {
        title: "",
        description: "",
        boardId: this.$route.params.boardId
        // listId: listId
      },
      newComment: {
        body: "",
        name: this.$store.state.user.name,
        boardId: this.$route.params.boardId
        // taskId: listId
        // taskId: data.taskId
      }
    };
  },
  methods: {
    createList() {
      // let newList = { ...this.newList };
      this.$store.dispatch("create", {
        address: "lists",
        commit: "addOne",
        data: this.newList
      });
    },
    createTask() {
      // let newTask = { ...this.newTask };
      this.$store.dispatch("create", {
        address: "tasks",
        commit: "addOne",
        data: this.newTask
      });
      this.$store.dispatch("setModalType", { address: "addTask", data: false });
      this.newTask = {
        title: "",
        description: "",
        boardId: this.$route.params.boardId,
        listId: ""
        // listId: data.listId
      };
    },
    createComment() {
      let newComment = { ...this.newComment };
      this.$store.dispatch("create", {
        address: "comments",
        commit: "addOne",
        data: this.newComment
      });
      this.$store.dispatch("setModalType", {
        address: "addComment",
        data: false
      });
      this.newComment = {
        body: "",
        name: this.$store.state.user.name,
        boardId: this.$route.params.boardId,
        taskId: ""
      };
    }
  }
};
</script>

<style>
</style>