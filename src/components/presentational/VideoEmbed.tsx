import React from "react";

export interface VideoEmbedProps {
	className?: string;
	title: string;
	link: string;
}

export const VideoEmbed = ({ className, title, link }: VideoEmbedProps) => {
	if (window) {
		return (
			<iframe
				id="ytplayer"
				itemType="text/html"
				title={title}
				width="640"
				height="360"
				src={`${link}?autoplay=0&origin=${window.location.origin}`}
				frameBorder="0"
				className={className}
			></iframe>
		);
	}
	return null;
};
