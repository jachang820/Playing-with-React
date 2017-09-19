import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const videoTitle = video.snippet.title;
	const videoDesc = video.snippet.description;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return (
		<div className="video-detail">
			<div className="embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{videoTitle}</div>
				<div>{videoDesc}</div>
			</div>
	);
};

export default VideoDetail;