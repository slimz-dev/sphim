import routeName from '@com/config';
import { bindClassname } from '@com/utils';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UnknowPage.module.scss';

const UnknowPage = () => {
	const cx = bindClassname(styles);
	window.history.pushState('unknow', 'error', '/404');
	return (
		<div className={cx('wrapper')}>
			<h1 className="">404</h1>
			<div className={cx('cloak__wrapper')}>
				<div className={cx('cloak__container')}>
					<div className={cx('cloak')}></div>
				</div>
			</div>
			<div className={cx('info')}>
				<h2 className="text-3xl">We can't find that page</h2>
				<p>
					We're fairly sure that page used to be here, but seems to have gone missing. We
					do apologise on it's behalf.
				</p>
				<NavLink to={routeName.HomePage()}>Home</NavLink>
			</div>
		</div>
	);
};

export default UnknowPage;
