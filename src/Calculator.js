import React from "react";

const Calculator = ({ result }) => {
  // !--- 소수점 정리
    const convertResult = () => {
    if (result !== undefined) {
        result = parseFloat(result);
    }
    };

    convertResult();

    return <div className="Calculator">{result === undefined ? 0 : result}</div>;
};

export default Calculator;
