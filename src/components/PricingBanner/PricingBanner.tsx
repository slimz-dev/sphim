const PricingBanner = () => {
	const handleChoose = () => {
		window.alert('Our paid plans has not been published yet');
	};
	return (
		<div className="py-20">
			<div className="text-white rounded-lg relative  min-h-56 bg-center bg-cover  bg-[url(https://assets.gqindia.com/photos/5cdc08ba62fe40fb0783f40e/16:9/w_2560%2Cc_limit/top-image4.jpg)]">
				<div className="max-xl:block  max-xl:text-center flex items-center min-h-56   justify-between px-14 relative z-10  ">
					<div>
						<div className=" max-xl:py-10 text-4xl font-semibold">
							Start your free trial today!
						</div>
						<div className="text-[#626366]">
							This is a clear and concise call to action that encourages users to sign
							up for a free trial of Sphim
						</div>
					</div>
					<div className="flex justify-center items-center max-xl:py-6">
						<div
							onClick={handleChoose}
							className="cursor-pointer w-fit bg-[red] py-4 px-6 rounded-lg"
						>
							Start a Free Trial
						</div>
					</div>
				</div>
				<div className="rounded-lg  absolute  top-0 bottom-0 left-0 right-0 opacity-95 bg-[linear-gradient(85deg,_rgba(0,0,0,1)_20%,_rgba(142,30,30,0.7)_100%)]"></div>
			</div>
		</div>
	);
};

export default PricingBanner;
