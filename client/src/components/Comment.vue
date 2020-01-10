<template>
  <div class="comment row">
    <div class="col">
      <p>{{commentData}}</p>
      <p>{{commentData.body}}</p>
      <p>{{commentData.updatedAt.split('T')[0]}}</p>
      <button class="button">EDIT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["commentData"],
  methods: {}
};
</script>

<style>
</style>