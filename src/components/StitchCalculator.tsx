import { useState } from "react";
import PatternCalculator from "./PatternCalculator";

interface StitchSizeObject {
  stitchName: string;
  stitchWidth: number;
  stitchHeight: number;
}

export default function StitchCalculator(): JSX.Element {
  //width of the stitches
  const [widthCM, setWidthCM] = useState("");
  const [chainCount, setChainCount] = useState("");
  const [stitchWidth, setStitchWidth] = useState(0);

  function onWidthClick() {
    setStitchWidth(parseInt(widthCM) / parseInt(chainCount));
  }

  // height of the stitchews
  const [heightCM, setHeightCM] = useState("");
  const [rowCount, setRowCount] = useState("");
  const [stitchHeight, setStitchHeight] = useState(0);

  // save sticth
  const [stitchSize, setStitchSize] = useState({} as StitchSizeObject);

  function onHeightClick() {
    setStitchHeight(parseInt(heightCM) / parseInt(rowCount));
  }

  function saveStitchClick() {
    setStitchSize({
      stitchName: "",
      stitchWidth: stitchWidth,
      stitchHeight: stitchHeight,
    });
  }

  return (
    <div>
      <div>
        <h2> Calculate Stitch Size</h2>
        <h3> Stitch Width Calculator</h3>
        <p>Enter gauge width in CM:</p>
        <input
          placeholder="enter width of gauge in CM"
          onChange={(e) => setWidthCM(e.target.value)}
          value={widthCM}
        ></input>
        <p>Enter number of chain stitches: </p>
        <input
          placeholder="enter stitch count"
          onChange={(e) => setChainCount(e.target.value)}
          value={chainCount}
        ></input>
        <button onClick={onWidthClick}>Calculate Stitch Width</button>

        {stitchWidth ? <p> Stitch Width: {stitchWidth}cm</p> : null}
      </div>

      <div>
        <h3>Stitch Height Calculator</h3>
        <p>Enter gauge height in CM:</p>
        <input
          placeholder="enter height in CM "
          onChange={(e) => setHeightCM(e.target.value)}
          value={heightCM}
        ></input>
        <p>Enter number of rows: </p>
        <input
          placeholder="enter number of rows"
          onChange={(e) => setRowCount(e.target.value)}
          value={rowCount}
        ></input>
        <button onClick={onHeightClick}>Calculate Stitch Height</button>
        {stitchHeight ? <p>Stitch Height: {stitchHeight}cm</p> : null}
        <button onClick={saveStitchClick}>Save Stitch</button>
        {stitchSize ? (
          <p>
            Stitch {stitchSize.stitchName}: {stitchSize.stitchWidth} x{" "}
            {stitchSize.stitchHeight} cm
          </p>
        ) : null}
      </div>
      <PatternCalculator
        stitchName=" "
        stitchHeight={stitchSize.stitchHeight}
        stitchWidth={stitchSize.stitchWidth}
      />
    </div>
  );
}
