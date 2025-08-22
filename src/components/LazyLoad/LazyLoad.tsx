import { useEffect, useRef, useState } from 'react';

const LazyLoad = ({ children }: { children: React.ReactNode }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // stop observing once visible
				}
			},
			{ threshold: 0.1 } // trigger when 10% visible
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref}>
			{isVisible ? (
				children
			) : (
				// Loading placeholder (spinner)
				<div className="flex justify-center items-center w-full py-10">
					<div className="h-8 w-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin" />
				</div>
			)}
		</div>
	);
};

export default LazyLoad;
