<template>
  <div class="formmodal row">
    <div class="list col">
      <form @submit="createList">
        <input required type="text" v-model="newList.title" placeholder="title" />
        <button class="btn btn-success" @click="createList">Create List</button>
      </form>
    </div>
    <div class="task col">
      <form @submit="editBug">
        <input required type="text" v-model="newTask.l" placeholder="title" />
        <input required type="text" v-model="newTask.description" placeholder="description" />
        <button class="btn btn-success" @click="createTask">Create Task</button>
      </form>
    </div>
    <div class="comment col">
      <form @submit="createComment">
        <input required type="text" v-model="newComment.body" placeholder="comment" />
        <button class="btn btn-success" @click="createComment">Create Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormModal",
  data() {
    return {
      newList: {
        title: "",
        authorId: "",
        // does it automatically send a session?
        boardId: ""
      },
      newTask: {
        title: "",
        description: "",
        authorId: "",
        boardId: "",
        authorId: ""
      },
      newComment: {
        body: "",
        authorId: "",
        boardId: "",
        taskId: ""
      }
    };
  },
  methods: {
    createList() {},
    createTask() {},
    createComment() {}
  }
};
</script>

<style>
</style>