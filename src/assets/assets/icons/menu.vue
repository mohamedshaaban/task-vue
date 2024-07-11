<template>
		<svg class="w-9 transition-all" :class="isOpen ? 'rotate-180' : 'rotate-0' " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m0 0h24v24h-24z" fill="#616B70" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g class="transition-all" :fill="isOpen ? 'red' : '#616B70'"><path d="m20.05 11h-14.14l1.3-1.29a1 1 0 0 0 -1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1.3-1.29h14.14a1 1 0 0 0 .95-.95v-.05a1 1 0 0 0 -.95-1z"/><rect height="2" rx=".95" width="18" x="3" y="17"/><rect height="2" rx=".95" width="18" x="3" y="5"/></g></svg>
</template>

<script>
export default {
	props: {
		isOpen: Boolean
	},
};
</script>
