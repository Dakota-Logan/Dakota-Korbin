<template>
  <div class="task row" @click="popUpTask" data-toggle="modal" data-target="#task-modal">
    <div class="col-12">
      <img class="delete-btn" src="../assets/icons8-delete.svg" @click="deleteTask" />
      <h3>{{taskData.title}}</h3>
      <h5>{{taskData.description}}</h5>
      <div>
        <select
          style="z-index: 2"
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2"
          v-model="data"
          @change="changeList"
        >
          <option @click="changeList" v-for="list in lists" :key="list._id">{{list.title}}</option>
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
  data() {
    return {
      data: ""
    };
  },
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
    changeList() {
      this.$store.dispatch("edit", {
        address: "lists",
        commit: "setOne"
        // data:
      });
    },
    deleteTask() {
      this.$store.dispatch("delete", {
        address: "tasks",
        commit: "removeOne",
        id: this.taskData._id
      });
    },
    popUpTask() {
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
