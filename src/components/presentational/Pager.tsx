import React, { ReactNode, useMemo } from "react";
import styled, { css } from "styled-components";

export type PagerType = "vertical" | "horizontal";

export interface PagerProps {
	className?: string;
	type: PagerType;
	count: number | Array<string | (() => void)>;
	active?: number;
}

const activeStyle = css`
	width: 1.4rem;
	height: 1.4rem;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 1000rem;
`;

const Dots = styled.button<{ $active: boolean }>`
	width: 0.6rem;
	height: 0.6rem;
	background-color: white;
	margin: 1rem;
	border-radius: 1000rem;
	position: relative;
	cursor: pointer;

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		${(p) => p.$active && activeStyle}
	}
`;

const Container = styled.div<{ $type: PagerType }>`
	display: flex;
	flex-direction: ${(p) => (p.$type === "vertical" ? "column" : "ro")};
	justify-content: center;
`;

export const Pager = ({
	className,
	type = "vertical",
	count,
	active
}: PagerProps) => {
	const dots = useMemo(() => {
		const nodes: ReactNode[] = [];

		if (typeof count === "number") {
			for (let i = 0; i < count; i++) {
				nodes.push(<Dots key={i} as="div" $active={active === i} />);
			}
		} else {
			count.forEach((dot, i) => {
				if (typeof dot === "function") {
					nodes.push(<Dots as="button" onClick={dot} $active={active === i} />);
				} else {
					nodes.push(<Dots as="a" href={dot} $active={active === i}></Dots>);
				}
			});
		}

		return nodes;
	}, [count, active]);

	return (
		<Container className={className} $type={type}>
			{dots}
		</Container>
	);
};
