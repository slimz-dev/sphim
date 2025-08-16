import Categories from './Components/Categories/Categories';
import LandingHeader from './Components/LandingHeader/LandingHeader';
import Devices from './Components/Devices/Devices';
import FAQ from './Components/FAQ/FAQ';
import SubscriptionPlans from '@com/components/SubscriptionPlans/SubscriptionPlans';
import PricingBanner from '@com/components/PricingBanner/PricingBanner';

const HomePage = () => {
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
