import { bindClassname } from '@com/utils';
import { useState } from 'react';
import styles from './SubscriptionPlans.module.scss';
const plan = [
	{
		name: 'Basic Plan',
		description:
			'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
		priceMonthly: '9.99',
		priceYearly: '109.99',
	},
	{
		name: 'Standard Plan',
		description:
			'Access to a wider selection of movies and shows, including most new releases and exclusive content',
		priceMonthly: '12.99',
		priceYearly: '139.99',
	},
	{
		name: 'Premium Plan',
		description:
			'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
		priceMonthly: '14.99',
		priceYearly: '189.99',
	},
];

type SubscriptionPlansProps = {
	isBiggerFonts?: boolean;
};

const SubscriptionPlans = ({ isBiggerFonts }: SubscriptionPlansProps) => {
	const cx = bindClassname(styles);
	const [isMonthly, setIsMonthly] = useState<boolean>(true);

	const handleChoose = () => {
		window.alert('Our paid plans has not been published yet');
	};
	return (
		<div className="text-white">
			<div className="max-lg:block flex items-center justify-between">
				<div className="flex-1">
					<div
						className={cx('text-3xl font-semibold mb-2', {
							'text-4xl': isBiggerFonts,
						})}
					>
						Choose the plan that's right for you
					</div>
					<p className="text-[#626366] ">
						Join StreamVibe and select from our flexible subscription options tailored
						to suit your viewing preferences. Get ready for non-stop entertainment!
					</p>
				</div>
				<div className="max-lg:mt-4 border w-fit border-[#272727] p-2 rounded-lg">
					<button
						onClick={() => setIsMonthly(true)}
						className={cx(' w-20 h-10 max-2xl:w-16  rounded-md', {
							'bg-[#242121]': isMonthly,
						})}
					>
						Monthly
					</button>
					<button
						onClick={() => setIsMonthly(false)}
						className={cx(' w-20 h-10 max-2xl:w-16  rounded-md', {
							'bg-[#242121]': !isMonthly,
						})}
					>
						Yearly
					</button>
				</div>
			</div>
			<div className={`max-lg:block grid grid-cols-${plan.length} gap-10 mt-12`}>
				{plan.map((element, index) => (
					<div
						key={index}
						className="bg-[#1a1a1a]  max-lg:mb-10 border border-[#3c3c3c] min-h-0  p-10 rounded-lg"
					>
						<div className="h-full flex flex-col">
							<div className="flex-1 flex flex-col">
								<div className="flex flex-1 flex-col">
									<div className="mb-2 text-2xl ">{element.name}</div>
									<p className="text-[#626366] mb-6 flex-1 text-xl max-2xl:text-lg max-xl:text-xltext-wrap">
										{element.description}
									</p>
								</div>
								<div className="mb-6">
									<span className="text-4xl max-2xl:text-2xl max-xl:text-xl font-bold">
										${isMonthly ? element.priceMonthly : element.priceYearly}
									</span>
									<span>{isMonthly ? '/month' : '/year'}</span>
								</div>
							</div>
							<div className="flex max-xs:flex-col max-xs:items-stretch justify-between items-center text-xl max-2xl:text-lg lg:max-xl:text-xs">
								<button
									onClick={handleChoose}
									className="capitalize max-xs:mb-4 max-lg:flex-none max-lg:px-4 max-lg:py-2 flex-1  lg:py-4  rounded-md  bg-black"
								>
									Start free trial
								</button>
								<button
									onClick={handleChoose}
									className="capitalize max-lg:flex-none max-lg:px-4 max-lg:py-2 flex-1  lg:py-4  rounded-md  bg-[red]"
								>
									choose plan
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SubscriptionPlans;
