import React from "react";
import styled from "styled-components";
import { Typography } from "../Typography";

export interface NavBarLinkProps {
	className?: string;
	to: string;
	children: string;
}

const Link = styled.a`
	${Typography.baseTypographyStyle}
	font-size: 1.5rem;
	color: white;
	text-decoration: none;
	padding: 1rem 2rem;
	&:not(:last-child) {
		border-right: 1px solid rgba(255, 255, 255, 0.3);
	}
	cursor: pointer;
`;

export const NavBarLink = ({ className, to, children }: NavBarLinkProps) => {
	return (
		<Link href={to} className={className}>
			{children}
		</Link>
	);
};
