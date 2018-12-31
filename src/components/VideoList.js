import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
	const videoArray = videos.map(video => {
		return <VideoItem video={video} />;
	})

	return (
		<div className="ui relaxed divided list">
			{videoArray}
		</div>
		);
}

export default VideoList;