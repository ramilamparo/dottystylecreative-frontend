import { VideoModal } from "components/presentational/VideoModal";
import React, { useState } from "react";
import { HomeSection as HomeSectionPresentational } from "../presentational/sections/home/HomeSection";

export const HomeSection = ({ id }: { id: string }) => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			<HomeSectionPresentational
				id={id}
				title="Whitsundays"
				subtitle="A movie that's waiting to be written"
				onPlay={() => setModalOpen(true)}
			/>
			<VideoModal
				onDismiss={() => setModalOpen(false)}
				link={"https://www.youtube.com/watch?v=y2SvailvvHQ"}
				title={"Cute Seal!"}
				open={modalOpen}
			/>
		</>
	);
};
