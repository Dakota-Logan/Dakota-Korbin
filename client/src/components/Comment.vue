<template>
	<div class="comment">
<!--		<p>{{commentData}}</p>-->
		<div class="author-info"></div>
		<h4>{{commentData.name}}</h4>
		<p>{{commentData.body}}</p>
		<div>
			<p>{{commentData.updatedAt.split('T')[0]}}</p>
			<button class="btn edit-btn">EDIT</button>
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