<template>
  <div class="task row" @click="popUpTask">
    <div class="col-12">
      <img class="delete-btn" src="../assets/trash.svg" @click="deleteTask" />
      <h3>{{taskData.title}}</h3>
      <h5>{{taskData.description}}</h5>
      <div>
        <select
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2"
          @change="setActiveList, changeList"
        >
          <option v-for="list in lists" :key="list._id">{{list.title}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/Comment.vue";

export default {
  name: "Task",
  props: ["taskData"],
  // mounted() {
  // },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    comments() {
      return this.$store.state.comments.filter(
        cur => cur.taskId === this.taskData._id
      );
    }
  },
  methods: {
    setActiveList() {},
    changeList() {
      this.$store.dispatch("edit", {
        address: "tasks",
        id: this.taskData._id,
        commit: "setOne",
        data: { listId: this.taskData.listId }
      });
    },
    deleteTask() {
      this.$store.dispatch("delete", {
        address: "tasks",
        commit: "removeOne",
        id: this.taskData._id
      });
    },
    popUpTask() {}
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
  top: 0;
  left: 0;
}
</style>
