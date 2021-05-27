import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div``;

export interface PageWrapperProps {
	children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
	return <Container>{children}</Container>;
};
