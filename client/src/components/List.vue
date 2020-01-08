<template>
  <div class="list row">
    <div class="col">
      <div class="row title">
        <div class="col-12">
          <h3>{{listData.title}}</h3>
        </div>
        <!-- v-for -->
        <div class="row">
          <div class="col-8 offset-2">
            <task-component />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskComponent from "../components/Task.vue";

export default {
  name: "List",
  props: ["listData"],
  // mounted() {
  //   // this.$store.dispatch("getAll", {
  //   //   address: "lists",
  //   //   commit: "",
  //   //   id:
  //   // });
  //   // gonna need to change that
  // },
  methods: {},
  components: {
    TaskComponent
  }
};
</script>

<style scoped>
</style>

payload = {
   //data OR id, not both
   data: {
      //whatever data the function requires
   },
   address: 'lists',
   commit: 'setAll',
   id: this.data.id||`${inputId/whatever}`
};
