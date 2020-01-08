<template>
  <div class="board">{{board.title}}</div>
</template>

<script>
export default {
  name: "board",
  computed: {
    board() {
      return (
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    }
  },
  props: ["boardId"]
};
</script>

export default {
  name: "",
  mounted() {
    
  },
  methods: {

  },
  computed: {

  },
  components: {

  }
};