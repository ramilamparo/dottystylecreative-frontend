import React from "react";

export interface VideoEmbedProps {
	className?: string;
	title: string;
	link: string;
}

export const VideoEmbed = ({ className, title, link }: VideoEmbedProps) => {
	return (
		<iframe
			id="ytplayer"
			itemType="text/html"
			title={title}
			width="640"
			height="360"
			src={`${link}?autoplay=0&origin=https://github.com`}
			frameBorder="0"
			className={className}
		></iframe>
	);
};
