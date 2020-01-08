<template>
  <div class="comment row">
    <div class="col">
      <p>{{commentData.body}}</p>
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