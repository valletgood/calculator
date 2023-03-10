import React, {  useState } from "react";
import "./App.css";
import Calculator from "./Calculator";
import ShowData from "./ShowData";

function App() {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [selectData, setSelectData] = useState([]);

  const [checkingMethod, setCheckingMethod] = useState(false);

  const [result, setResult] = useState();

  const [preview, setPreview] = useState([]);

  const [mark, setMark] = useState(true);

  // !--- 숫자 출력
  const getNum = (e) => {
    setSelectData((prev) => prev + e.target.value);
    setPreview((prev) => prev + e.target.value);
    setCheckingMethod(true);
  };

  // !--- 연산자 출력
  const getMethod = (e) => {
    checkMethod();
    if (e.target.value === "=") {
      if (checkingMethod) {
        resultData();
      } else {
        alert("올바른 수식이 아닙니다.");
      }
    } else if (checkingMethod === true) {
      setSelectData((prev) => prev + e.target.value);
      setPreview((prev) => prev + e.target.innerText);
    } else {
      alert("숫자를 입력해주세요");
    }
  };

  // !--- 입력 값이 소수가 아닐 경우 첫번째 값에 0이 올 수 없음
  const noZeroStart = () => {
    const startData = selectData.slice(0, 1);
    const secondData = selectData.slice(1, 2);
    if (startData === "0") {
      if (secondData !== "." && secondData !== "") {
        setSelectData(selectData.slice(1));
        setPreview(selectData.slice(1));
      }
    }
  };

  noZeroStart();

  // !--- 값 계산
  const resultData = () => {
    const calculator = eval(`${selectData}`).toFixed(12);
    setResult(calculator);
    setSelectData([]);
    setPreview([]);
  };

  // !--- 값 초기화
  const allClearData = () => {
    setSelectData([]);
    setPreview([]);
    setResult(0);
    setCheckingMethod(false)
    setMark(true);
  };

  // !--- 마지막 입력 취소
  const cancelData = () => {
    let cancelSelectData = selectData.slice(0, -1);
    let cancelPreview = preview.slice(0, -1);
    if (cancelSelectData === "") {
      setSelectData([]);
      setPreview([]);
      setCheckingMethod(false);
    } else {
      setSelectData(cancelSelectData);
      setPreview(cancelPreview);
      setCheckingMethod(true);
    }
  };
  
  // !--- 부호 변환 true면 음수로, false면 양수로
  const toggleMark = () => {
    if (mark === true) {
      setSelectData((prev) => `-${prev}`);
      setPreview((prev) => `-${prev}`);
      setMark(false);
    } else if (mark === false) {
      setSelectData((prev) => prev.slice(1));
      setPreview((prev) => prev.slice(1));
      setMark(true);
    }
  };

  // !--- 입력 받은 데이터 길이 체크
  const lengthCheck = () => {
    const targetLength = selectData.length;
    if (targetLength >= 16) {
      alert("입력 가능한 최대 길이입니다.");
      resultData();
    }
  };

  lengthCheck();

    // !--- 직전 입력 문자 판별 true : 연산자 올 수 있음(마지막 입력이 숫자), false : 연산자 올 수 없음(마지막 입력이 연산자)
  const checkMethod = () => {
    setCheckingMethod(false);
  };
  
  return (
    <div className="App">
      <ShowData preview={preview} />
      <Calculator result={result} />
      <div className="btns">
        <div className="left_btns">
          <div className="function_btns">
            <button
              className="function_btn"
              value={"AC"}
              onClick={allClearData}>
              AC
            </button>
            <button className="function_btn" value={"C"} onClick={cancelData}>
              C
            </button>
            <button className="function_btn" value={"+/-"} onClick={toggleMark}>
              +/-
            </button>
          </div>
          <div className="number_btns" >
            {numberArray &&
              numberArray.map((value, index) =>
                index !== 9 ? (
                  <button
                    className="number_btn"
                    key={index}
                    onClick={getNum}
                    value={value}>
                    {value}
                  </button>
                ) : (
                  <button
                    style={{
                      gridColumn: "1/3",
                      width: "90%",
                      borderRadius: "100px",
                    }}
                    className="number_btn"
                    key={index}
                    onClick={getNum}
                    value={value}>
                    {value}
                  </button>
                )
              )}
            <button className="number_btn" onClick={getMethod} value={"."}>
              .
            </button>
          </div>
        </div>
        <div className="sign_btns">
          <button className="sign_btn" onClick={getMethod} value={"/"}>
            ÷
          </button>
          <button className="sign_btn" onClick={getMethod} value={"*"}>
            x
          </button>
          <button className="sign_btn" onClick={getMethod} value={"-"}>
            -
          </button>
          <button className="sign_btn" onClick={getMethod} value={"+"}>
            +
          </button>
          <button className="sign_btn" onClick={getMethod} value={"="}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
