import { useState } from "react";

function App() {
  const [test, setTest] = useState("");
  const [work, setWork] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = (e) => {
    e.preventDefault();

    const tArr = test.split(",").map(Number);
    const wArr = work.split(",").map(Number);

    const t = tArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const w = wArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    const r = t / (tArr.length * 2) + w / (wArr.length * 2);

    setResult(r.toFixed(2));
  };

  return (
    <>
      <div
        style={{
          paddingBlock: "100px",
          paddingInline: "30px",
          marginInline: "auto",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1>Calculate Test & Work Kpi Score</h1>
        <input
          type="text"
          style={{
            width: "100%",
            maxWidth: "500px",
            marginBlock: "10px",
            padding: "10px",
            display: "inline-block",
          }}
          placeholder="Add Test scores here, separated by a comma"
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
        <input
          type="text"
          style={{
            width: "100%",
            maxWidth: "500px",
            marginBlock: "10px",
            padding: "10px",
            display: "inline-block",
          }}
          placeholder="Add Work scores here, separated by a comma"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <button
          onClick={calculateResult}
          style={{ width: "100%", maxWidth: "500px", padding: "10px" }}
        >
          Calculate
        </button>
      </div>

      <div
        style={{
          paddingBlock: "50px",
          paddingInline: "30px",
          marginInline: "auto",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        {result && <h1>Result: {result}</h1>}
      </div>
    </>
  );
}

export default App;
