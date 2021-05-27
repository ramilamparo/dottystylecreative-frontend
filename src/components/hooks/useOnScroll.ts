import { useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

export type UseOnScrollCallback = () => void;

export const useOnScroll = (callback?: UseOnScrollCallback) => {
	const handleOnScrollDebounced = useMemo(() => {
		return debounce(() => {
			callback && callback();
		}, 10);
	}, [callback]);

	useEffect(() => {
		window.addEventListener("scroll", handleOnScrollDebounced);
		return () => {
			window.removeEventListener("scroll", handleOnScrollDebounced);
		};
	}, [handleOnScrollDebounced]);
};
