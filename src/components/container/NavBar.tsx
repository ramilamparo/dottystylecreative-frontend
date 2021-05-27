import React, { useState } from "react";
import { NavBar as NavBarPresentational } from "components/presentational/NavBar/NavBar";
import { VideoModal } from "components/presentational/VideoModal";

export const NavBar = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<NavBarPresentational
				links={[
					{
						label: "Background & Challenge",
						to: "#Background"
					},
					{
						label: "Solution",
						to: "#Solution"
					},
					{
						label: "Slideshow",
						to: "#Project"
					}
				]}
				onPlay={() => setModalOpen(true)}
				onDownloadBoard={() => setModalOpen(true)}
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
