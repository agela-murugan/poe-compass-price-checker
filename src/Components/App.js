import "../assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CompassDetailsInput from "../Components/CompassDetailsInput";
import CompassTable from "../Components/CompassTable"

function App() {
    const [compassesInfo, setCompassesInfo] = useState([]);

    const getCompassDetails = (details) => {
        setCompassesInfo(details);
    };

    return (
        <>
            <div className="background">
                <h1 className="heading">COMPASS PRICE CHECKER</h1>
            </div>
            <div className="body">
                <CompassDetailsInput getCompassDetails={getCompassDetails} />
                <CompassTable compassesInfo={compassesInfo} />
            </div>
        </>
    );
}

export default App;
