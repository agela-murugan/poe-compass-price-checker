import "../assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CompassDetailsInput from "../Components/CompassDetailsInput";
import CompassTable from "../Components/CompassTable";
import { HEADING } from "../constants";

function App () {
    const [compassesInfo, setCompassesInfo] = useState([]);

    const getCompassDetails = (details) => {
        setCompassesInfo(details);
    };

    return (
        <>
            <div className="background">
                <div className="overlay">
                    <div className="header">
                        <div className="title">{HEADING}</div>
                    </div>
                    <div className="body">
                        <CompassDetailsInput
                            getCompassDetails={getCompassDetails}
                        />
                        <CompassTable compassesInfo={compassesInfo} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
