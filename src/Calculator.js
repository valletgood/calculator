import React, { useEffect } from "react";

const Calculator = ({result}) => {

    const convertResult = () => {
        if(result !== undefined){
        result = parseFloat(result)
    }
    }

    convertResult();

    return (
        <div className="Calculator">
            {result === undefined ? 0 : result}
        </div>
    )
}

export default Calculator;