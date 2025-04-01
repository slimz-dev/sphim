import PricingBanner from '@com/components/PricingBanner/PricingBanner';
import SubscriptionPlans from '@com/components/SubscriptionPlans/SubscriptionPlans';
import PlansDescription from './components/PlansDescription/PlansDescription';

const SubscriptionPage = () => {
	return (
		<div className="bg-[#141414] px-[10%] pt-20">
			<SubscriptionPlans isBiggerFonts={true} />
			<PlansDescription />
			<PricingBanner />
		</div>
	);
};

export default SubscriptionPage;
