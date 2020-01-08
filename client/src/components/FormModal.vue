<template>
  <div class="formmodal row">
    <div class="list col">
      <form @submit="editBug">
        <input required type="text" v-model="newList.title" placeholder="title" />
        <input required type="text" v-model="newList.reportedBy" placeholder="user" />
        <input required type="text" v-model="newList.description" placeholder="description" />
        <button class="btn btn-success" @click="createList">Create List</button>
      </form>
    </div>
    <div class="task col">
      <form @submit="editBug">
        <input required type="text" v-model="newTask.l" placeholder="title" />
        <input required type="text" v-model="newTask.reportedBy" placeholder="user" />
        <input required type="text" v-model="newTask.description" placeholder="description" />
        <button class="btn btn-success" @click="createTask">Create Task</button>
      </form>
    </div>
    <div class="comment col">
      <form @submit="editBug">
        <input required type="text" v-model="newComment.title" placeholder="title" />
        <input required type="text" v-model="newComment.reportedBy" placeholder="user" />
        <input required type="text" v-model="newComment.description" placeholder="description" />
        <button class="btn btn-success" @click="create">Create Comment</button>
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
        boardId: ""
      },
      newTask: {
        title: ""
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