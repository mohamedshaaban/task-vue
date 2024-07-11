<template>
	<button
		:disabled="isLoading"
		class="btn btn-fill mt-5 text-base flex items-center gap-2"
		v-if="isEdit"
	>
		<span>Edit</span>
	</button>
	<button class="btn btn-fill mt-5 text-base flex items-center gap-2" v-else>
		<span>Save</span>
	</button>
</template>

<script>
export default {
	props: {
		isEdit: Boolean,
		isLoading: Boolean,
	},
};
</script>
