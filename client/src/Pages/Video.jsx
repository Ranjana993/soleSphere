
const Video = () => {

    return (
        <div>
            <iframe
                className='w-full aspect-video'
                // ref={iframeRef}
                src="https://www.youtube.com/embed/tkGphiphvuQ?si=Kx3oMWR-fwXKlS9A&autoplay=1&mute=1&loop=0"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    );
}

export default Video;
