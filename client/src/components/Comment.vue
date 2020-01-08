<template>
	<div class="comment row">
		<div class="col">
			<p>{{commentData.name}}</p>
			<p>{{commentData.body}}</p>
			<p>{{commentData.updatedAt.spit('T')[0]}}</p>
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