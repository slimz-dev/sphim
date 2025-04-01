import { bindClassname } from '@com/utils';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FAQ.module.scss';
const QnA = [
	{
		question: 'What is Sphim?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		question: 'How much does Sphim cost?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		question: 'What content is available on Sphim?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		question: 'How can I watch Sphim?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		question: 'How do I sign up for Sphim?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		question: 'What is the Sphim free trial?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		question: 'How do I contact Sphim customer support?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		question: 'What are the Sphim payment methods?',
		answer: 'Sphim is a streaming service that allows you to watch movies and shows on demand.',
	},
];
const FAQ = () => {
	const cx = bindClassname(styles);
	return (
		<>
			<div className="max-lg:block flex text-white py-8  ">
				<div className="flex-1">
					<div className="text-3xl font-semibold mb-2">Frequently Asked Questions </div>
					<div className="text-[#626366] ">
						Got questions? We've got answers! Check out our FAQ section to find answers
						to the most common questions about Sphim.
					</div>
				</div>
				<div className="flex cursor-not-allowed border-[#1a1a1a] w-fit max-lg:mt-4 bg-[red] text-white border h-fit px-6 py-4  rounded-lg">
					Ask a Question
				</div>
			</div>
			<div
				className={`my-20 max-lg:block grid   grid-rows-4 gap-y-8 gap-x-16 grid-flow-col mx-10`}
			>
				{QnA.map((subject, index) => {
					return (
						<div
							key={index}
							className={cx(
								'text-white max-lg:w-full border-solid overflow-hidden pb-10 w-fit border-b [border-image:linear-gradient(to_right,#000000,rgb(161,0,0),#000000)_30]',
								'dropdown-animation'
							)}
						>
							<div className={cx('flex items-center justify-between')}>
								<div className="flex items-center">
									<div className="bg-[#1f1e1e] p-3 rounded-md mr-2">{`0${
										index + 1
									}`}</div>
									<div>{subject.question}</div>
								</div>
								<div className="w-fit p-2 ml-2 cursor-pointer hover:text-[#3f3a3a]">
									<FontAwesomeIcon icon={faMinus} />
								</div>
							</div>
							<div className={cx('text-[#626366] text-sm mt-3 ')}>
								{subject.answer}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FAQ;
