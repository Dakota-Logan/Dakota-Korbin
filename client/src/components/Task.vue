<template>
  <div class="task row">
    <div class="col-12">
      <comment-component v-for="comment in comments"/>
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
  methods: {},
  components: {
    CommentComponent
  }
};
</script>

<style>
</style>