import React from 'react';

function VideoPlayer() {
    return (
        <div>
            <video width="320" height="240" controls>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
