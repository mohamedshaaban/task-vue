<template>
	<div class="flex sm:flex-row flex-col items-start sm:items-center justify-between gap-5" :class="containerClass">
		<div class="flex items-center gap-4 md:gap-6 text-dark">
			<div>
				<div class="px-0">
					<h3 class="form_section-title text-2xl sm:text-2xl py-3  border-main-gray">{{ title }}</h3>
				</div>
			</div>

		</div>
		
		<slot/>
	</div>
	<!-- <div className="g_border" v-if="!withoutBorder"></div> -->
</template>

<script>

export default {
    props: {
        title: String,
        addLink: String,
        withoutBorder: Boolean,
        subTitle: String,
        hint: String,
        lsPadding: String,
        containerClass: String,
    },
    setup() { },
    components: {  }
};
</script>
