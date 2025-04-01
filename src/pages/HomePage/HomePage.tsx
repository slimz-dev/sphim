import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
	faArrowLeft,
	faArrowRight,
	faMagnifyingGlass,
	faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import Categories from './Components/Categories/Categories';
import LandingHeader from './Components/LandingHeader/LandingHeader';
import Devices from './Components/Devices/Devices';
import FAQ from './Components/FAQ/FAQ';
import SubscriptionPlans from '@com/components/SubscriptionPlans/SubscriptionPlans';
import PricingBanner from '@com/components/PricingBanner/PricingBanner';
import { Skeleton } from '@mui/material';
const cx = classNames.bind(styles);

const HomePage = () => {
	const [myFile, setMyFile] = useState<boolean>(false);
	useEffect(() => {
		setMyFile(true);
	}, []);
	return (
		<>
			<LandingHeader />
			<div className=" bg-[#141414]  max-lg:px-4 px-[10%]">
				<Categories />
				<Devices />
				<FAQ />
				<SubscriptionPlans />
				<PricingBanner />
			</div>
		</>
	);
};

export default HomePage;
