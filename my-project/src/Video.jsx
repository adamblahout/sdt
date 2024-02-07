function Video() {
  return (
    <div>
      <video
        src="/assets/truck.mp4"
        muted
        autoPlay
        loop
        disablePictureInPicture
        className="w-full h-80 object-cover md:visible lg:visible -z-10 opacity-70 hidden md:block lg:block"
      ></video>
      <img
        src="/assets/truck_img.png"
        alt="truck_img"
        className="visible md:hidden  lg:hidden md:none -mt-80 md:-mt-40"
      />
    </div>
  );
}

export default Video;
