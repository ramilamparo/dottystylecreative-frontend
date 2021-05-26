import { ReactNode } from "react";

export interface SectionPagerProps {
	children: ReactNode;
}

export const SectionPager = ({ children }: SectionPagerProps) => {
	return <>{children}</>;
};
