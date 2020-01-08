<template>
  <div class="formmodal row">
    <div class="list col">
      <form @submit="createList">
        <input required type="text" v-model="newList.title" placeholder="title" />
        <button class="btn btn-success" @click="createList">Create List</button>
      </form>
    </div>
    <div class="task col">
      <form @submit="createTask">
        <input required type="text" v-model="newTask.title" placeholder="title" />
        <input type="text" v-model="newTask.description" placeholder="description" />
        <input required type="text" v-model="newTask.listId" placeholder="title" />
        <button class="btn btn-success" @click="createTask">Create Task</button>
      </form>
    </div>
    <div class="comment col">
      <form @submit="createComment">
        <input required type="text" v-model="newComment.body" placeholder="comment" />
        <input required type="text" v-model="newComment.taskId" placeholder="title" />
        <button class="btn btn-success" @click="createComment">Create Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormModal",
  // prop: ["data"],
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.id
      },
      newTask: {
        title: "",
        description: "",
        boardId: this.$route.params.id,
        listId: ""
        // listId: data.listId
      },
      newComment: {
        body: "",
        name: this.$store.state.user.name,
        boardId: this.route.params.id,
        taskId: ""
        // taskId: data.taskId
      }
    };
  },
  methods: {
    createList() {
      let newList = { ...this.newList };
      this.$store.disptach("addOne", {
        address: "lists",
        commit: "setOne",
        data: this.newList
      });
    },
    createTask() {
      let newTask = { ...this.newTask };
      this.$store.dispatch("addOne", {
        address: "tasks",
        commit: "setOne",
        data: this.newTask
      });
    },
    createComment() {
      let newComment = { ...this.newComment };
      this.$store.dispatch("addOne", {
        address: "comments",
        commit: "setOne",
        data: this.newComment
      });
    }
  }
};
</script>

<style>
</style>