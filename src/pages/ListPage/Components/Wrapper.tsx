type WrapperProps = {
	children: React.JSX.Element;
	label: string;
};
const Wrapper = ({ children, label }: WrapperProps) => {
	return (
		<div className="relative mt-36 border border-[#272525] rounded-lg p-12">
			<span className="absolute bg-[red] px-5 py-2 -top-5 left-12 rounded-lg">{label}</span>
			<div>{children}</div>
		</div>
	);
};

export default Wrapper;
