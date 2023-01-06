import React, { useEffect } from "react";

const ShowData = ({selectData}) => {

    return(
        <div className="show_data">
        {selectData.length===0? 0 : selectData}
        </div>
    )
}

export default ShowData;