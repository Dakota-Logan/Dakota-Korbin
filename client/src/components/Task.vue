<template>
  <div class="task row">
    <div class="col-12">
      <comment-component />
      <div>
        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
          <b-dropdown-item v-for="list in lists" :key="list._id"></b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/Comment.vue";

export default {
  name: "Task",
  props: ["taskData", "lists"],
  // mounted() {
  // },
  computed: {
    lists() {
      this.$store.state.lists;
    }
  },
  methods: {
    changeList() {
      this.$store.dipatch("edit", {
        address: "lists",
        commit: "setOne"
        // data:
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
