<template>
	<div class="input-wrapper flex-grow mt-2" :class="wrapperClass">
		<label :for="name">{{ label }}</label>
		<v-textarea
			:id="name"
			variant="outlined"
			bg-color="white"
			:model-value="modelValue"
			density="compact"
			:rounded="0"
			@input="$emit('update:modelValue', $event.target.value)"
			class="w-full mt-2 focus:!ring-0"
			type="text"
			dir="auto"
			:rows="rows"
			v-bind="restProps"
		></v-textarea>
	</div>
</template>

<script>
export default {
	name: 'input-custom',
	props: {
		modelValue: String,
		name: String,
		label: String,
		inputClass: String,
		wrapperClass: String,
		rows: { typeof: String, default: '5' },
		restProps: Object,
	},
	setup() {},
};
</script>
