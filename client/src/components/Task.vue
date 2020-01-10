<template>
  <div class="task row">
    <div class="col-12">
	    <h3>{{taskData.title}}</h3>
	    <h5>{{taskData.description}}</h5>
      <div>
        <select id="dropdown-1" text="Dropdown Button" class="m-md-2">
          <option>First Action</option>
          <option>Second Action</option>
          <option>Third Action</option>
          <option active>Active action</option>
          <option disabled>Disabled action</option>
        </select>
      <comment-component v-for="comment in comments"/>
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
    
    }
  },
  components: {
    CommentComponent
  }
};
</script>

<style>
</style>
