import React, { ReactNode } from "react";
import styled from "styled-components";

export interface SectionProps {
	children?: ReactNode;
	className?: string;
	id?: string;
}

const Container = styled.div`
	position: relative;
	height: 100vh;
`;

export const Section = ({ id, children, className }: SectionProps) => {
	return (
		<Container id={id} className={className}>
			{children}
		</Container>
	);
};
