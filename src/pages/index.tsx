import React from "react";
import { BackgroundSection } from "../components/container/BackgroundSection";
import { HomeSection } from "../components/container/HomeSection";
import { ProjectSection } from "../components/container/ProjectSection";
import { SolutionSection } from "../components/container/SolutionSection";
import { PageWrapper } from "../components/utils/PageWrapper";
import { SectionPager } from "../components/utils/SectionPager";

const HomePage = () => {
	const sectionIds = ["Home", "Background", "Solution", "Project"];
	return (
		<PageWrapper>
			<SectionPager sections={sectionIds}>
				<HomeSection id={sectionIds[0]} />
				<BackgroundSection id={sectionIds[1]} />
				<SolutionSection id={sectionIds[2]} />
				<ProjectSection id={sectionIds[3]} />
			</SectionPager>
		</PageWrapper>
	);
};

export default HomePage;
