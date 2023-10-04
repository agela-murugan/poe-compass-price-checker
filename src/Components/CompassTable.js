import { useState } from "react";
import { Form, InputGroup, Table } from "react-bootstrap";

const CompassTable = (props) => {
    const { compassesInfo } = props;

    const [filterText, setFilterText] = useState("");

    const renderCompassTable = () => {
        let tableToRender = [];
        if (compassesInfo.length) {
            const compassTable = compassesInfo.map((compass, index) => {
                return (
                    <tr key={index + 1}>
                        <th>{index + 1}</th>
                        <td>{compass.compassName}</td>
                        <td>{compass.individualPrice}</td>
                        <td>{compass.quantity}</td>
                        <td>{compass.bulkPrice}</td>
                    </tr>
                );
            });

            if (filterText) {
                const newCompasses = compassesInfo.filter(
                    (compass) =>
                        compass.compassName.toLowerCase().indexOf(filterText) >
                        -1
                );
                tableToRender = newCompasses.map((compass, index) => {
                    return (
                        <tr key={index + 1}>
                            <th>{index + 1}</th>
                            <td>{compass.compassName}</td>
                            <td>{compass.individualPrice}</td>
                            <td>{compass.quantity}</td>
                            <td>{compass.bulkPrice}</td>
                        </tr>
                    );
                });
            } else {
                tableToRender = compassTable;
            }

            return (
                <Table bordered hover variant="dark" style={{fontSize: "20px"}}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <td>Compass Name</td>
                            <td>Individual Price</td>
                            <td>Quantity</td>
                            <td>Bulk Price</td>
                        </tr>
                    </thead>
                    <tbody>{tableToRender}</tbody>
                </Table>
            );
        }
    };
    return (
        <>
            <InputGroup>
                <InputGroup.Text
                    style={{
                        backgroundColor: "#162C3B",
                        color: "white",
                        borderColor: "transparent",
                        padding: "15px",
                        fontSize: "24px",
                    }}
                >
                    Search something
                </InputGroup.Text>
                <Form.Control
                    style={{
                        backgroundColor: "#201F1D",
                        color: "white",
                        borderColor: "transparent",
                        fontSize: "20px",
                    }}
                    onChange={(e) =>
                        setFilterText(e.target.value.toLowerCase())
                    }
                />
            </InputGroup>
            <br />
            {renderCompassTable()}
        </>
    );
};

export default CompassTable;