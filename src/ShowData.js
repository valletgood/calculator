import React, { useEffect } from "react";

const ShowData = ({preview}) => {

    return(
        <div className="show_data">
        {preview.length===0? 0 : preview}
        </div>
    )
}

export default ShowData;