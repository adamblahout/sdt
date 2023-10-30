function Video() {
  return (
    <div>
      <video
        src="\src\assets\video.mov"
        muted
        autoPlay
        loop
        disablePictureInPicture
        className="absolute w-full  lg:h-2/4 md:h-2/5 object-cover md:visible lg:visible -z-10 opacity-70"
      ></video>
    </div>
  );
}

export default Video;
