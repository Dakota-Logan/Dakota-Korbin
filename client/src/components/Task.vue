<template>
  <div class="task row">
    <div class="col-12">
      <comment-component v-for="comment in comments"/>
      <comment-component />
      <div>
        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
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
  	comments () {
  		return this.$store.state.comments.filter (cur=>cur.taskId === this.taskData._id);
    }
  },
  methods: {
    changeList() {
      this.$store.dipatch("edit", {
        address: "lists",
        commit: "setOne",
        data:
      });
    }
  },
  components: {
    CommentComponent
  }
};
</script>

<style>
</style>
