<template>
	<div :class="`input-wrapper ${wrapperClass}`">
		<label :for="name" :class="labelClass">{{ label }}</label>
		<div>
			<v-text-field
				:id="name"
				:label="inputLabel"
				variant="outlined"
				class="w-full mt-2 focus:!ring-0"
				:rounded="0"
				density="compact"
				dir="auto"
				min="1930-01-01"
				max="2070-12-31"
				:class="inputClass"
				:model-value="modelValue"
				:required="required"
				:readonly="readonly"
				:autocomplete="autocomplete"
				:type="type"
				:error-messages="
					Object.keys(errors || {}).findIndex((lbl) => lbl === name) != -1
						? errors[
								Object.keys(errors).find((lbl) => lbl === name)
						  ][0]
						: ''
				"
				:rules="rules"
				@input="$emit('update:modelValue', $event.target.value)"
				:disabled="disabled"
				v-bind="restProps"
			></v-text-field>
		</div>
	</div>
</template>

<script>
export default {
	name: 'input-custom',
	props: {
		name: String,
		label: String,
		inputLabel: String,
		disabled: Boolean,
		id: String,
		placeholder: String,
		inputClass: String,
		modelValue: String,
		autocomplete: Boolean,
		type: { typeof: String, default: 'text' },
		required: Boolean,
		readonly: Boolean,
		wrapperClass: String,
		labelClass: String,
		rules: Array,
		errors: { typeof: Object, default: {} },
		restProps: Object,
	},
	setup() {},
};
</script>

<style>
input:focus {
	--tw-ring-shadow: 0 !important;
	outline-offset: 0px !important;
}
</style>
