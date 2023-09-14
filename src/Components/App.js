import "../assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CompassDetailsInput from "../Components/CompassDetailsInput";
import CompassTable from "../Components/CompassTable";
import { HEADING } from "../constants";
import { Col, Row } from "react-bootstrap";

function App() {
    const [compassesInfo, setCompassesInfo] = useState([]);

    const getCompassDetails = (details) => {
        setCompassesInfo(details);
    };

    return (
        <>
            <div className="background">
                <Row style={{ margin: 0 }}>
                    <Col lg={2}></Col>
                    <Col lg={8}>
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
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </div>
        </>
    );
}

export default App;
