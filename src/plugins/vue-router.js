import router from '@/routes';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { i18n } from './i18n';
import { getCookie } from '@/utils/cookie';

const routerApp = router;
NProgress.configure({ showSpinner: false });

routerApp.beforeEach((to, from, next) => {
	NProgress.start();
	const notAuthRoutes = [
		to.params.lang + '/login',
		`/${to.params.lang}`,
		`/${to.params.lang}/`,
	];
	const isLogin = !!getCookie('token');

	if (!['en', 'ar'].includes(to.params.lang)) {
		return next('ar');
	}
	console.log('isLogin', !isLogin);
	console.log('notAuthRoutes', !notAuthRoutes.includes(to.fullPath));
	console.log('link', `/${to.params.lang}/login`);
	if (
		!notAuthRoutes.includes(to.fullPath) &&
		!isLogin &&
		to.fullPath != `/${to.params.lang}/login`
	) {
		return next(`/${to.params.lang}/login`);
	} else if (
		isLogin &&
		to.fullPath.includes('login')
	) {
		return next(`/${to.params.lang}`);
	} else {
		next();
	}

	return next();
});

routerApp.afterEach((to, from) => {
	NProgress.done(); // Finish the loading indicator
});

export default routerApp;
