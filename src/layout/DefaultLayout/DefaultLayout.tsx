import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DefaultLayout = ({ children, overflow }) => {
	return (
		<div className="">
			<Header overflow={overflow} />
			<div className=" ">{children}</div>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
