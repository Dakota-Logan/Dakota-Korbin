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
  props: ["data", "id"],
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
        boardId: this.$route.params.boardId,
        listId: this.$store.state.modalData._id
      },
      newComment: {
        body: "",
        name: this.$store.state.user.name,
        boardId: this.$route.params.boardId,
        taskId: this.$store.state.modalData._id
      }
    };
  },
  methods: {
    async createList() {
      await this.$store.dispatch("create", {
        address: "lists",
        commit: "addOne",
        data: this.newList
      });
      this.newList = {
        title: ""
      };
    },
    async createTask() {
      console.log(this.$store.state.modalData, "New Task Data:" + this.newTask);
      this.newTask.listId = this.$store.state.modalData._id;
      debugger;
      await this.$store.dispatch("create", {
        address: "tasks",
        commit: "addOne",
        data: this.newTask
      });
      this.newTask = {
        title: "",
        description: ""
      };
    },
    async createComment() {
      await this.$store.dispatch("create", {
        address: "comments",
        commit: "addOne",
        data: this.newComment
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