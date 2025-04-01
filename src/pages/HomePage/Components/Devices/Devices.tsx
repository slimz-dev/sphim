import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import {
	faArrowLeft,
	faArrowRight,
	faGamepad,
	faLaptop,
	faMagnifyingGlass,
	faMobileScreen,
	faPhone,
	faPlay,
	faTablet,
	faTv,
	faVrCardboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const devices = [
	{
		name: 'Smartphones',
		description:
			'Sphim is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
		icon: (color: string, size?: SizeProp) => (
			<FontAwesomeIcon size={size} color={color} icon={faMobileScreen} />
		),
	},
	{
		name: 'Tablet',
		description: `Enjoy a seamless viewing experience on your tablet, whether you're using an iPad or an Android device. Download the Sphim app from the App Store or Google Play Store for easy access to your favorite content.`,
		icon: (color: string, size?: SizeProp) => (
			<FontAwesomeIcon size={size} color={color} icon={faTablet} />
		),
	},
	{
		name: 'Smart TV',
		description: `Stream directly on your Smart TV without the need for additional devices. Sphim is compatible with major TV brands, including Samsung, LG, Sony, and more. Simply download our app from your TV’s app store or cast from your mobile device.`,
		icon: (color: string, size?: SizeProp) => (
			<FontAwesomeIcon size={size} color={color} icon={faTv} />
		),
	},
	{
		name: 'Laptops',
		description: `Watch your favorite movies and shows on a bigger screen with our web-based platform. Simply log in to Sphim via your preferred web browser and start streaming instantly.`,
		icon: (color: string, size?: SizeProp) => (
			<FontAwesomeIcon size={size} color={color} icon={faLaptop} />
		),
	},
	{
		name: 'Gaming Consoles',
		description: `Transform your console into an entertainment hub. Sphim is available on PlayStation and Xbox, allowing you to enjoy high-quality streaming while gaming.`,
		icon: (color: string, size?: SizeProp) => (
			<FontAwesomeIcon size={size} color={color} icon={faGamepad} />
		),
	},
	{
		name: 'VR Headsets',
		description: `Immerse yourself in a whole new viewing experience with VR support. Enjoy movies and TV shows in a virtual theater setting with Sphim on compatible VR headsets like Oculus and HTC Vive.`,
		icon: (color: string, size?: SizeProp) => (
			<FontAwesomeIcon size={size} color={color} icon={faVrCardboard} />
		),
	},
];

const Devices = () => {
	return (
		<div className=" text-white py-8 ">
			<div>
				<div className="text-3xl mb-2 font-semibold">
					We Provide you streaming experience across various devices.
				</div>
				<div className="text-[#626366] ">
					With Sphim, you can enjoy your favorite movies and TV shows anytime, anywhere.
					Our platform is designed to be compatible with a wide range of devices, ensuring
					that you never miss a moment of entertainment.
				</div>
			</div>
			<div className="max-lg:block grid grid-cols-3 my-20 gap-10">
				{devices.map((device, index) => (
					<div
						key={index}
						className="max-lg:mb-10 border border-[#383838] bg-[linear-gradient(204deg,_rgba(39,0,0,1)_0%,_rgba(0,0,0,1)_50%)] p-8 rounded-lg"
					>
						<div className="flex items-center mb-6">
							<div className="w-14 h-14 flex justify-center items-center bg-[#1a1a1a] rounded-lg mr-3">
								{device.icon('red', 'xl')}
							</div>
							<div className="text-2xl">{device.name}</div>
						</div>
						<div className=" text-justify text-[#626366]">{device.description}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Devices;
