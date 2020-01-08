<template>
  <div class="task row">
    <div class="col-12">
      <comment-component />
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/Comment.vue";

export default {
  name: "Task",
  props: ["taskData"],
  mounted() {
    this.$store.dispatch("getComments", this.taskData._id);
    // change this
  },
  computed: {},
  methods: {},
  components: {
    CommentComponent
  }
};
</script>

<style>
</style>