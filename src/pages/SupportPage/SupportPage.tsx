import PricingBanner from '@com/components/PricingBanner/PricingBanner';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FAQ from '../HomePage/Components/FAQ/FAQ';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SupportPage = () => {
	const handleChoose = () => {
		window.alert('Please try another time');
	};
	return (
		<div className="bg-[#141414] px-[10%] text-white">
			<div className="py-20 max-lg:block flex justify-between">
				<div className="max-lg:w-full flex flex-col  w-[34%] max-lg:mb-8">
					<h1 className="font-semibold text-6xl flex-1 leading-normal">
						Welcome to our support page!
					</h1>
					<p className="text-[#9b9da3] py-6 ">
						We're here to help you with any problems you may be having with our product.
					</p>
					<LazyLoadImage
						alt="support"
						className="w-full object-none  rounded-lg border-[#2b2828] border-[4px]"
						src={require('@com/static/img/movie-container.jpg')}
					/>
				</div>
				<div className="bg-black w-[62%] max-lg:w-full border border-[#262626] p-12 max-2xl:p-[2%] ">
					<form>
						<div className="flex max-lg:block">
							<div className="flex flex-col flex-1 lg:mr-10">
								<label className="my-3">First Name</label>
								<input
									className="bg-[#141414] p-4 w-full border border-[#262626] rounded-lg"
									placeholder="Enter First Name"
								/>
							</div>
							<div className="flex flex-1 flex-col">
								<label className="my-3">Last Name</label>
								<input
									className="bg-[#141414] p-4 w-full border-[#262626] rounded-lg border"
									placeholder="Enter Last Name"
								/>
							</div>
						</div>
						<div className="flex max-lg:block my-10 max-lg:my-0">
							<div className="flex flex-col flex-1  lg:mr-10">
								<label className="my-3">Email</label>
								<input
									className="bg-[#141414] p-4 w-full border-[#262626] rounded-lg border"
									placeholder="Enter your Email"
								/>
							</div>
							<div className="flex  flex-col flex-1">
								<label className="my-3">Phone Number</label>
								<div className=" flex w-full">
									<div className="hover:cursor-not-allowed bg-[#141414] px-2  flex w-fit justify-center items-center border-[#262626] rounded-lg border mr-5">
										<LazyLoadImage
											alt="flag"
											className="w-12 h-12"
											src="https://png.pngtree.com/png-clipart/20211226/original/pngtree-vietnam-flag-transparent-background-in-watercolor-painted-brush-png-image_6979301.png"
										/>
										<span className="ml-2">
											<FontAwesomeIcon icon={faChevronDown} />
										</span>
									</div>
									<input
										className="bg-[#141414] w-full p-4 flex-1  border-[#262626] border rounded-lg"
										placeholder="Enter Phone Number"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-col  ">
							<label className="my-3">Message</label>
							<textarea
								rows={6}
								className="p-3 rounded-lg bg-[#141414] border border-[#262626]"
								placeholder="Enter your Message"
							/>
						</div>
						<div className="flex max-sm:block justify-between items-center my-10 max-sm:my-3">
							<div>
								<input className="bg-[#141414] mr-2 p-4" type="checkbox" />
								<label className="text-[#999999]">
									I agree with Terms of Use and Privacy Policy
								</label>
							</div>
							<div
								onClick={handleChoose}
								className="cursor-pointer bg-[red] max-sm:mt-2 text-center px-6 py-4 rounded-lg"
							>
								Send Message
							</div>
						</div>
					</form>
				</div>
			</div>
			<FAQ />
			<PricingBanner />
		</div>
	);
};

export default SupportPage;
