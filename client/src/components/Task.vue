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
  // mounted() {
  // },
  computed: {},
  methods: {},
  components: {
    CommentComponent
  }
};
</script>

<style>
</style>