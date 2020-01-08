<template>
  <div class="board">
    <header>
      <router-link to="/">
        <h2>Kanban</h2>
      </router-link>
    </header>
    <main>
      <h3>This is your board you dumb fuck.</h3>
      {{board}}
      <h1>{{board.title}}</h1>
      <div id="lists">
        <list-compenent v-for="list in lists"></list-compenent>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getOne", {
      address: "boards",
      commit: "setOne",
      commitAddress: "activeBoard",
      id: this.$route.params.boardId
    });
    this.$store.dispatch("getAll", "lists");
    this.$store.dispatch("getAll", "tasks");
    setTimeout(this.$store.dispatch("getAll", "comments"), 1000);
  },
  computed: {
    board() {
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
    tasks() {
      return this.$store.state.tasks;
    }
  }
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