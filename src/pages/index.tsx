import React from "react";
import { BackgroundSection } from "../components/container/BackgroundSection";
import { HomeSection } from "../components/container/HomeSection";
import { ProjectSection } from "../components/container/ProjectSection";
import { SolutionSection } from "../components/container/SolutionSection";
import { PageWrapper } from "../components/utils/PageWrapper";
import { SectionPager } from "../components/utils/SectionPager";

const HomePage = () => {
	return (
		<PageWrapper>
			<SectionPager>
				<HomeSection />
				<BackgroundSection />
				<SolutionSection />
				<ProjectSection />
			</SectionPager>
		</PageWrapper>
	);
};

export default HomePage;
