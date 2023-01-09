import React, { useEffect } from "react";

const Calculator = ({result}) => {

    return (
        <div className="Calculator">
            {result === undefined ? 0 : result}
        </div>
    )
}

export default Calculator;