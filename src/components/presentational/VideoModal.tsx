import React from "react";
import { Modal } from "components/presentational/Modal";
import { VideoEmbed } from "components/presentational/VideoEmbed";
import styled from "styled-components";

export interface VideoModalProps {
	open: boolean;
	onDismiss: () => void;
	link: string;
	title: string;
}

const StyledVideoEmbed = styled(VideoEmbed)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const VideoModal = ({
	onDismiss,
	open,
	link,
	title
}: VideoModalProps) => {
	return (
		<Modal onDismiss={onDismiss} open={open}>
			<StyledVideoEmbed link={link} title={title} />
		</Modal>
	);
};
