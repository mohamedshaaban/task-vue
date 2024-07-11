<template>
	<div class="input-wrapper pt-1 pb-3" :class="wrapperClass">
		<label :for="name" :class="labelClass">{{ label }}</label>
		<select
			:value="modelValue"
			@change="$emit('update:modelValue', $event.target.value)"
			:disabled="disabled"
			:required="required"
			:class="inputClass"
			class="v-input__control border !border-gray-400 mt-2 py-[7px] hover:border-black !ring-0"
		>
			<slot />
		</select>
		<div class="text-red-500 text-xs text-center h-2 mt-1 pointer-events-none">
			{{
				Object.keys(errors || {})?.length &&
				Object.keys(errors).findIndex((lbl) => lbl === name) != -1
					? errors[Object.keys(errors).find((lbl) => lbl === name)][0]
					: ''
			}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'select-custom',
	props: {
		name: String,
		label: String,
		inputClass: String,
		modelValue: String,
		disabled: Boolean,
		required: { typeof: Boolean, default: false },
		labelClass: String,
		wrapperClass: String,
		errors: { typeof: Object, default: {} },
	},
	setup() {},
};
</script>
