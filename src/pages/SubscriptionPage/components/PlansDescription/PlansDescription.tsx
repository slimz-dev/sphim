import { useState } from 'react';

const subscriptionDescription = [
	{
		id: 0,
		name: 'Basic',
		numbPaid: 10,
		price: {
			data: '$9.99/Month',
			featureName: 'Price',
		},
		content: {
			data: 'Access to a wide selection of movies and shows, including some new releases.',
			featureName: 'Content',
		},
		Devices: {
			data: 'Watch on one device simultaneously',
			featureName: 'Devices',
		},
		freeTrail: {
			data: '7 Days',
			featureName: 'Free Trail',
		},
		cancelAnytime: {
			data: 'Yes',
			featureName: 'Cancel Anytime',
		},
		hdr: {
			data: 'No',
			featureName: 'HDR',
		},
		dolbyAtmos: {
			data: 'No',
			featureName: 'Dolby Atmos',
		},
		adFree: {
			data: 'No',
			featureName: 'Ad - Free',
		},
		offlineMode: {
			data: 'No',
			featureName: 'Offline Viewing',
		},
		familySharing: {
			data: 'No',
			featureName: 'Family Sharing',
		},
	},
	{
		id: 1,
		name: 'Standard',
		numbPaid: 50,
		price: {
			data: '$12.99/Month',
			featureName: 'Price',
		},
		content: {
			data: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
			featureName: 'Content',
		},
		Devices: {
			data: 'Watch on Two device simultaneously',
			featureName: 'Devices',
		},
		freeTrail: {
			data: '7 Days',
			featureName: 'Free Trail',
		},
		cancelAnytime: {
			data: 'Yes',
			featureName: 'Cancel Anytime',
		},
		hdr: {
			data: 'Yes',
			featureName: 'HDR',
		},
		dolbyAtmos: {
			data: 'Yes',
			featureName: 'Dolby Atmos',
		},
		adFree: {
			data: 'Yes',
			featureName: 'Ad - Free',
		},
		offlineMode: {
			data: 'Yes, for select titles.',
			featureName: 'Offline Viewing',
		},
		familySharing: {
			data: 'Yes, up to 5 family members.',
			featureName: 'Family Sharing',
		},
	},
	{
		id: 2,
		name: 'Premium',
		numbPaid: 2,
		price: {
			data: '$14.99/Month',
			featureName: 'Price',
		},
		content: {
			data: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
			featureName: 'Content',
		},
		Devices: {
			data: 'Watch on Four device simultaneously',
			featureName: 'Devices',
		},
		freeTrail: {
			data: '7 Days',
			featureName: 'Free Trail',
		},
		cancelAnytime: {
			data: 'Yes',
			featureName: 'Cancel Anytime',
		},
		hdr: {
			data: 'Yes',
			featureName: 'HDR',
		},
		dolbyAtmos: {
			data: 'Yes',
			featureName: 'Dolby Atmos',
		},
		adFree: {
			data: 'Yes',
			featureName: 'Ad - Free',
		},
		offlineMode: {
			data: 'Yes, for all titles.',
			featureName: 'Offline Viewing',
		},
		familySharing: {
			data: 'Yes, up to 6 family members.',
			featureName: 'Family Sharing',
		},
	},
];
type mostPaidType = {
	number: number;
	id: number;
};

const PlansDescription = () => {
	const [mostPaid, setMostPaid] = useState<mostPaidType>({
		number: 0,
		id: 0,
	});
	subscriptionDescription.forEach((plans, index) => {
		if (plans.numbPaid > mostPaid.number) {
			setMostPaid({
				number: plans.numbPaid,
				id: plans.id,
			});
		}
	});
	return (
		<>
			<div className="text-white pt-24 mb-20">
				<h1 className="text-4xl font-semibold mb-2">
					Compare our plans and find the right one for you
				</h1>
				<p className="text-[#626366]">
					Sphim offers three different plans to fit your needs: Basic, Standard, and
					Premium. Compare the features of each plan and choose the one that's right for
					you.
				</p>
			</div>
			<div className="overflow-x-auto">
				<table className="text-white ">
					<tr className="bg-black">
						<th className="p-6 text-left font-normal w-[25%]">Features</th>
						{subscriptionDescription.map((plans, index) => {
							return (
								<th key={index} className="p-6 text-left font-normal w-[25%]">
									{plans.name}
									{mostPaid.id === plans.id && (
										<span className="bg-[red] text-xs px-2 ml-3 rounded-sm opacity-85">
											Popular
										</span>
									)}
								</th>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">{subscriptionDescription[0].price.featureName}</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.price.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">{subscriptionDescription[0].content.featureName}</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.content.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">{subscriptionDescription[0].Devices.featureName}</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.Devices.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">{subscriptionDescription[0].freeTrail.featureName}</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.freeTrail.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">
							{subscriptionDescription[0].cancelAnytime.featureName}
						</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.cancelAnytime.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">{subscriptionDescription[0].hdr.featureName}</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.hdr.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">{subscriptionDescription[0].dolbyAtmos.featureName}</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.dolbyAtmos.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">{subscriptionDescription[0].adFree.featureName}</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.adFree.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">
							{subscriptionDescription[0].offlineMode.featureName}
						</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.offlineMode.data}
								</td>
							);
						})}
					</tr>
					<tr className="text-[#999999] text-sm">
						<td className="p-6">
							{subscriptionDescription[0].familySharing.featureName}
						</td>
						{subscriptionDescription.map((plans, index) => {
							return (
								<td key={index} className="p-6">
									{plans.familySharing.data}
								</td>
							);
						})}
					</tr>
				</table>
			</div>
		</>
	);
};

export default PlansDescription;
