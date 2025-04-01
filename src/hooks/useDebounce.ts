import { useEffect, useState } from 'react';

const useDebounce = (value, time) => {
	const [currentValue, setCurrentValue] = useState<string>('');
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentValue(value);
		}, time);
		return () => {
			clearTimeout(timer);
		};
	}, [value]);
	return currentValue;
};

export default useDebounce;
