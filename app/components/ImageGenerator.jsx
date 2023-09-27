"use client"

import { useState } from "react";
import deepai from "deepai";
function ImageGenerator() {
  const [generatedResults, setGeneratedResults] = useState([]);

  const generateResults = async () => {
    const response = await deepai.callStandardApi("text-generator", {
        text: "How To use Brain?",
    });
    setGeneratedResults(response.output);
  };

  return (
    <div>
      <button onClick={generateResults}>Generate Results</button>
      {generatedResults.map((result, index) => (
        <p  className=" text-red-500" key={index}>{generatedResults}</p>
      ))}
    </div>
  );
}

export default ImageGenerator;
