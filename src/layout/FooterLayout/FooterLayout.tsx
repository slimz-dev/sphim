import { ReactNode } from 'react';
import Footer from '../components/Footer';

type FooterLayoutProps = {
	children: ReactNode;
};
const FooterLayout = ({ children }: FooterLayoutProps) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export default FooterLayout;
