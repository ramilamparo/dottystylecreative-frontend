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
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleOnScrollDebounced);
		}
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", handleOnScrollDebounced);
			}
		};
	}, [handleOnScrollDebounced]);
};
