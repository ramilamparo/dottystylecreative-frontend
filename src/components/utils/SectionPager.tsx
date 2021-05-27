import { useOnScroll } from "components/hooks/useOnScroll";
import { Pager } from "components/presentational/Pager";
import React, { ReactNode, useCallback, useState } from "react";
import styled from "styled-components";

export interface SectionPagerProps {
	children: ReactNode;
	sections: string[];
}

const Container = styled.div`
	position: relative;
`;

const ScrollContainer = styled.div`
	display: contents;
`;

const StyledPager = styled(Pager)`
	position: fixed;
	right: 5rem;
	top: 50%;
	transform: translateY(-50%);
`;

export const SectionPager = ({ children, sections }: SectionPagerProps) => {
	const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
	const [active, setActive] = useState(0);

	const onScroll = useCallback(() => {
		if (containerEl) {
			const children = containerEl.children;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				const id = child.getAttribute("id");
				const rect = child.getBoundingClientRect();
				if (typeof window !== undefined && rect.top + window.innerHeight / 2 > 0) {
					if (id) {
						const activeIndex = sections.indexOf(id);
						setActive(activeIndex);
						break;
					}
				}
			}
		}
	}, [containerEl, sections]);

	useOnScroll(onScroll);

	return (
		<Container>
			<ScrollContainer ref={setContainerEl}>{children}</ScrollContainer>
			<StyledPager
				type="vertical"
				active={active}
				count={sections.map((sectionId) => {
					return `#${sectionId}`;
				})}
			/>
		</Container>
	);
};
