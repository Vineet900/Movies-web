import notfound from "/404.mp4";
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <video autoPlay loop muted src={notfound}></video>
    </div>
  );
};

export default NotFound;
