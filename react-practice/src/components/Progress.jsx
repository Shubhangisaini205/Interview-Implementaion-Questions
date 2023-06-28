import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // Calculate progress based on the input value (you can modify this logic)
    const newProgress = +e.target.value
    setProgress(newProgress > 100 ? 100 : newProgress);
  };

  return (
    <div>
      <form>
        <input type="number" value={inputValue} min={0} max={100} onChange={handleChange} />
      </form>
      <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor:"red" }}>{progress}</div>
    </div>
  );
};

export default ProgressBar;