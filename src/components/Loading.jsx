import Loader from "/Loader.mp4";
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
        <video autoPlay loop muted src={Loader}></video>
    </div>
  )
}

export default Loading