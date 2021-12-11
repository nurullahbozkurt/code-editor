import styles from "../components/Preview.module.css";
import { EditorContex } from "../context";
import { useContext, useState } from "react";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillRecordCircleFill,
  BsFillStopCircleFill,
  BsDownload,
} from "react-icons/bs";
import Draggable from "react-draggable";
import Webcam from "react-webcam";
import { useReactMediaRecorder } from "react-media-recorder";

const Preview = () => {
  const { htmlValue, jsValue, cssValue } = useContext(EditorContex);
  const [cameraStatus, setCameraStatus] = useState(false);
  const [recStatus, setRecStatus] = useState(true);

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true, screen: true });
  console.log(status);

  const recording = () => {
    setRecStatus(!recStatus);
    recStatus ? startRecording() : stopRecording();
  };

  const srcDoc = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      ${cssValue}
      </style>
  </head>
  <body >
  ${htmlValue}
      <script>
      ${jsValue}
      </script>
  </body>
  </html>`;

  return (
    <>
      <div className={styles.Preview}>
        <div className={styles.Header}>
          <div className={styles.download}>
            {mediaBlobUrl && (
              <a
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
                href={mediaBlobUrl}
                download={"kayit.mp4"}
              >
                <BsDownload fill="white" size={25} />
                <span>Download</span>
              </a>
            )}
          </div>
          <div className={styles.recording}>
            <div onClick={recording} className={styles.icons}>
              {status === "idle" || status === "stopped" ? (
                <BsFillStopCircleFill fill="red" size={25} />
              ) : (
                <BsFillRecordCircleFill fill="green" size={25} />
              )}
              {/* <button>{status}</button> */}
            </div>
            <div
              className={styles.icons}
              onClick={() => setCameraStatus(!cameraStatus)}
            >
              {cameraStatus ? (
                <BsFillCameraVideoFill fill="white" size={30} />
              ) : (
                <BsFillCameraVideoOffFill fill="white" size={30} />
              )}
            </div>
          </div>

          {cameraStatus && (
            <Draggable>
              <Webcam
                className={styles.webcam}
                videoConstraints={{
                  facingMode: "user",
                  width: 250,
                  height: 250,
                }}
              />
            </Draggable>
          )}
        </div>

        {htmlValue ? (
          <iframe className={styles.iframePreview} srcDoc={srcDoc} />
        ) : (
          <div className={styles.name}>
            <p>_nurullahbozkurt</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Preview;
