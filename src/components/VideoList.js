import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const videoArray = videos.map(video => {
		return <VideoItem 
			onVideoSelect={onVideoSelect} 
			video={video}
			key={video.id.videoId} 
		/>;
	})

	return (
		<div className="ui relaxed divided list">
			{videoArray}
		</div>
		);
}

export default VideoList;