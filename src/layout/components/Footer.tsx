import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';

type footerColsProps = {
	main: string;
	sub: { name?: string; icon?: ((size?: SizeProp, color?: string) => ReactElement)[] }[];
};
const footerCols: footerColsProps[] = [
	{
		main: 'Home',
		sub: [
			{
				name: 'Categories',
			},
			{
				name: 'Devices',
			},
			{
				name: 'Pricing',
			},
			{
				name: 'FAQ',
			},
		],
	},
	{
		main: 'Movies',
		sub: [
			{
				name: 'Genres',
			},
			{
				name: 'Trending',
			},
			{
				name: 'New Release',
			},
			{
				name: 'Popular',
			},
		],
	},
	{
		main: 'Shows',
		sub: [
			{
				name: 'Genres',
			},
			{
				name: 'Trending',
			},
			{
				name: 'New Release',
			},
			{
				name: 'Popular',
			},
		],
	},
	{
		main: 'Support',
		sub: [
			{
				name: 'Contact Us',
			},
		],
	},
	{
		main: 'Subscription',
		sub: [
			{
				name: 'Plans',
			},
			{
				name: 'Features',
			},
		],
	},
	{
		main: 'Connect With Us',
		sub: [
			{
				icon: [
					(size, color) => (
						<FontAwesomeIcon size={size} color={color} icon={faFacebook} />
					),
					(size, color) => <FontAwesomeIcon size={size} color={color} icon={faTwitter} />,
					(size, color) => (
						<FontAwesomeIcon size={size} color={color} icon={faLinkedin} />
					),
				],
			},
		],
	},
];

const Footer = () => {
	return (
		<div className=" bg-black  text-white max-lg:px-1 px-[10%]">
			<div className="py-14 grid max-lg:grid-cols-2 max-lg:ml-10 max-lg:gap-4 grid-cols-6 border-b-[#1c1c1e] border-b">
				{footerCols.map((element, index) => (
					<div key={index}>
						<div className="mb-4">{element.main}</div>
						<ul className="text-[#626366]">
							{element.sub.map((el, id) => (
								<li key={id} className="mb-2">
									{el.name ? (
										<>{el.name}</>
									) : el.icon ? (
										<div className="flex ">
											{el.icon.map((ic, i) => {
												return (
													<div
														key={i}
														className=" p-3 mr-3 rounded-lg bg-[#1e1c1c]"
													>
														{ic('xl', 'white')}
													</div>
												);
											})}
										</div>
									) : (
										<></>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="pt-6 pb-12  max-lg:block flex justify-between text-[#626366]">
				<div className="max-lg:px-5 max-lg:pb-5">
					<span>@2023 sphim, All Rights Reversed</span>
				</div>
				<div>
					<span className="border-r border-r-[#1c1c1e] px-5">Term of Use</span>
					<span className="border-r border-r-[#1c1c1e] px-5">Privacy Policy</span>
					<span className="px-5">Cookie Policy</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
