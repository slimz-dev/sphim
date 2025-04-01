import routeName from '@com/config';
import { bindClassname } from '@com/utils';
import {
	faBarsStaggered,
	faCaretUp,
	faFilm,
	faHeadset,
	faHouse,
	faTags,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const HeaderDropdown = () => {
	const cx = bindClassname(styles);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div
			className=" xl:hidden bg-[#141414] flex items-center  px-3 rounded-lg border-2 border-[#3e3e3e] "
			onClick={handleMenu}
		>
			<FontAwesomeIcon icon={faBarsStaggered} color="white" size="xl" />
			<div
				className={cx(
					'absolute rounded-lg  bg-[#161616] text-white w-[200px]  -right-6 top-[120%]',
					'menu-slide',
					{
						hidden: !isOpen,
					}
				)}
			>
				<div className="absolute bottom-[92%] right-8">
					<FontAwesomeIcon icon={faCaretUp} color="#161616" size="xl" />
				</div>
				<div className="cursor-pointer max-2xl:px-4 px-6 py-3 flex justify-between items-center hover:bg-[#1a1a1a] hover:text-white rounded-md">
					<FontAwesomeIcon icon={faHouse} />
					<NavLink className="flex-1 flex justify-center" to={routeName.HomePage()}>
						Home
					</NavLink>
				</div>
				<div className="cursor-pointer max-2xl:px-4  px-6 py-3 flex justify-between items-center hover:bg-[#1a1a1a] hover:text-white rounded-md">
					<FontAwesomeIcon icon={faFilm} />
					<NavLink className="flex-1 flex justify-center" to={routeName.ListPage()}>
						Movies & Shows
					</NavLink>
				</div>
				<div className="cursor-pointer max-2xl:px-4  px-6 py-3 flex justify-between items-center hover:bg-[#1a1a1a] hover:text-white rounded-md">
					<FontAwesomeIcon icon={faHeadset} />
					<NavLink className="flex-1 flex justify-center" to={routeName.SupportPage()}>
						Support
					</NavLink>
				</div>
				<div className="cursor-pointer max-2xl:px-4  px-6 py-3 flex justify-between items-center hover:bg-[#1a1a1a] hover:text-white rounded-md">
					<FontAwesomeIcon icon={faTags} />
					<NavLink
						className="flex-1 flex justify-center"
						to={routeName.SupscriptionPage()}
					>
						Subscription
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default HeaderDropdown;
