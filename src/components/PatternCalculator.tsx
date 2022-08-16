import { useState } from "react";

interface StitchSizeObject {
  stitchName: string;
  stitchWidth: number;
  stitchHeight: number;
}

export default function PatternCalculator(
  props: StitchSizeObject
): JSX.Element {
  const [patternWidth, setPatternWidth] = useState("");
  const [patternHeight, setPatternHeight] = useState("");
  const [patternSize, setPatternSize] = useState({} as StitchSizeObject);

  function onPatternClick() {
    setPatternSize({
      stitchName: "",
      stitchWidth: parseInt(patternWidth) / props.stitchWidth,
      stitchHeight: parseInt(patternHeight) / props.stitchHeight,
    });
  }

  return (
    <div>
      <h2> Pattern Calculator</h2>
      <p> Enter desired pattern width CM: </p>
      <input
        placeholder="Desired width CM"
        onChange={(e) => setPatternWidth(e.target.value)}
        value={patternWidth}
      ></input>
      <p> Enter desired pattern height CM: </p>

      <input
        placeholder="Desired height CM"
        onChange={(e) => setPatternHeight(e.target.value)}
        value={patternHeight}
      ></input>
      <button onClick={onPatternClick}>Calculate Pattern</button>
      {patternSize ? (
        <p>
          {" "}
          Pattern Width: {patternSize.stitchWidth}chains x Pattern Height:{" "}
          {patternSize.stitchHeight} rows
        </p>
      ) : null}
    </div>
  );
}
