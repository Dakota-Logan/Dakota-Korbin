<template>
	<div class="task row" @click="popUpTask">
		<div class="col-12">
			<h3>{{taskData.title}}</h3>
			<h5>{{taskData.description}}</h5>
			<div>
			<select id="dropdown-1" text="Dropdown Button" class="m-md-2" @change="">
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
  // mounted() {
  // },
  computed: {
	  lists() {
		  return this.$store.state.lists;
	  },
  	comments () {
  		return this.$store.state.comments.filter (cur=>cur.taskId === this.taskData._id);
    }
  },
  methods: {
	  changeList() {
		  this.$store.dipatch("edit", {
			  address: "lists",
			  commit: "setOne"
			  // data:
		  });
	  },
	popUpTask () {
	
	}
  },
  components: {
    CommentComponent
  }
};
</script>

<style>
</style>
