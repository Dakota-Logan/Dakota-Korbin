<template>
  <div class="boards">
    <button class="btn btn-danger" @click="logOut">Log out</button>
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" required />
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
    addBoard() {
      this.$store.dispatch("create", {
        address: "boards",
        commit: "addOne",
        commitAddress: "boards",
        data: this.newBoard
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
    },
    logOut() {
      this.$store.dispatch("logout").then(res => {
        this.$router.push({ name: "login" });
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