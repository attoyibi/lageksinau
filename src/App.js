import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import { isCompositeComponent } from "react-dom/test-utils";

const handleVideoMounted = (element) => {
  console.log("handleVideoMounted = ", element);
  if (element !== null) {
    element.currentTime = 30;
    // element.onplaying(
    //   console.log("element.currentTime = ", element.currentTime)
    // );
  }
};

const handleClick = () => {
  console.log("click");
};

function Ytb() {
  return (
    <>
      <video
        // onChange={() => {
        //   console.log("video");
        // }}
        controls
        autoPlay={true}
        // ref={handleVideoMounted}
        onTimeUpdate={function (element) {
          console.log("hai", element.currentTarget.currentTime.toFixed());
        }}
      >
        {" "}
        <source
          src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_30mb.mp4"
          type="video/mp4"
          onTimeUpdate={function () {
            console.log("hai");
          }}
        />
      </video>
    </>
  );
}

function App() {
  // useEffect(() => {
  //   console.log(<Ytb></Ytb>);
  // });
  return (
    <>
      <Ytb></Ytb>
    </>
  );
}

export default App;
