import { createToaster } from '@meforma/vue-toaster';

let timeout = null;

const toaster = createToaster({ position: 'top' });

export function toast(value, type = 'success', timer = 4000) {
	if (value.trim()) {
		clearTimeout(timeout);
		timeout = setTimeout(toaster.clear(), timer);

		toaster.show(value, {
			type: type,
		});
	}
}
