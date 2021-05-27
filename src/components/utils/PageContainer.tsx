import React from "react";
import type { ReactElement } from "react";
import type { PageProps } from "gatsby";
import { backgroundColor, backgroundColor2 } from "utils/styles/theme";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "./Helmet";

const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
		background: linear-gradient(${backgroundColor}, ${backgroundColor2});
		scroll-behavior: smooth;
	}

	body {
		font-family: Work Sans;
		box-sizing: border-box;
	}
`;

const PageContainer = ({ children }: PageProps): ReactElement => {
	return (
		<>
			<GlobalStyle />
			<Helmet />
			{children}
		</>
	);
};

export default PageContainer;
