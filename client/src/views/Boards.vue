<template>
  <div class="boards">
    Here, you will find your boards. You dumb shit, why wouldn't you already know this? Why are you so stupud.
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div v-for="board in boards" :key="board._id">
      <router-link :to="'boards/'+board._id" @click="moveBoard(board._id)">{{board.title}}</router-link>
      <button class="btn btn-danger" @click=" removeBoard(board._id)"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getAll", {
      address: "boards",
      commit: "setAll",
      commitAddress: "boards"
    });
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard(boardId) {
      this.$store.dispatch("create", {
        address: "boards",
        commit: "addOne",
        commitAddress: "boards",
        data: boardId
      });
      this.newBoard = { title: "", description: "" };
    },
    removeBoard(board) {
      console.log(board);

      this.$store.dispatch("delete", {
        address: "boards",
        commit: "removeOne",
        id: board
      });
    }
  },
  moveBoard(id) {
    this.$store.state.activeBoard = this.$store.state.find(
      cur => cur._id == id
    );
  }
};
</script>

<style>
.boards {
  min-height: 100vh;

  background-image: url("../assets/mountains-backdrop.jpg");
}
</style>