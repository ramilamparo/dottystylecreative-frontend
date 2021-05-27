import React, { ReactNode } from "react";
import styled from "styled-components";
import { Typography } from "./Typography";

export interface ButtonProps {
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
	active?: boolean;
}

const StyledButton = styled.button<{ $active?: boolean }>`
	${Typography.baseTypographyStyle}
	background-color: transparent;
	${(p) => p.$active && `background-color: rgba(0, 0, 0, 0.4);`}
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 100rem;
	cursor: pointer;
`;

export const Button = ({
	className,
	onClick,
	children,
	active
}: ButtonProps) => {
	return (
		<StyledButton $active={active} onClick={onClick} className={className}>
			{children}
		</StyledButton>
	);
};
