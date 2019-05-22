import React, { useRef, useEffect } from "react";
import { runFuildDynamics } from "../../utils/fluidBackground";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    runFuildDynamics(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Background;
