import React, { useEffect } from "react";
import { useCountUp } from "react-countup";


export const CountAnimate = (props) => {
	const { value, decimals = 0 } = props;
	const { countUp, update } = useCountUp({
		start: 0,
		end: value,
		delay: 0,
		duration: 5,
		decimals,
	});

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	useEffect(() => {
		update(value);
	}, [value]);

	return (
		<div>{decimals === 0 ? numberWithCommas(countUp) : countUp || 0}</div>
	);
};
