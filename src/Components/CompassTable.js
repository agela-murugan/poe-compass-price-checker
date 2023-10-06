import { useState } from "react";
import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { COMPASS_TABLE_HEADERS, DIVINE_PRICE, SEARCH_TEXT } from "../constants";
import {
    compassTableStyle,
    quantityInputFieldStyle,
    searchBoxStyle,
    searchTextStyle,
} from "../assets/Styles";

const CompassTable = (props) => {
    const { compassesInfo } = props;

    const [filterText, setFilterText] = useState("");
    const [compassSelected, setCompassSelected] = useState("");
    const [quantity, setQuantity] = useState(0);

    const renderInputField = (compassName, compassQuantity) => {
        if (compassSelected === compassName) {
            return (
                <FormControl
                    type="number"
                    style={quantityInputFieldStyle}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                />
            );
        }
        return compassQuantity;
    };

    const renderBulkPrice = (compassName, bulkPrice, individualPrice) => {
        if (compassName === compassSelected && quantity) {
            const totalPriceInChaos = (
                parseInt(individualPrice) * Number(quantity)
            ).toString();
            if (totalPriceInChaos < DIVINE_PRICE) {
                return `${totalPriceInChaos}c`;
            } else if (totalPriceInChaos === DIVINE_PRICE) {
                return "1 div";
            } else {
                const divinePrice = totalPriceInChaos / DIVINE_PRICE;
                const divines = Math.floor(divinePrice);
                const chaos = Math.ceil((divinePrice - divines) * DIVINE_PRICE);
                return `${divines} div + ${chaos}c`;
            }
        }
        return bulkPrice;
    };

    const renderCompassTable = () => {
        let tableToRender = [];
        if (compassesInfo.length) {
            const compassTable = compassesInfo.map((compass, index) => {
                return (
                    <tr
                        key={index + 1}
                        onClick={() => {
                            setCompassSelected(compass.compassName);
                            setQuantity(0);
                        }}
                    >
                        <th>{index + 1}</th>
                        <td>{compass.compassName}</td>
                        <td>{compass.individualPrice}</td>
                        <td>
                            {renderInputField(
                                compass.compassName,
                                compass.quantity
                            )}
                        </td>
                        <td>
                            {renderBulkPrice(
                                compass.compassName,
                                compass.bulkPrice,
                                compass.individualPrice
                            )}
                        </td>
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
                <Table bordered hover variant="dark" style={compassTableStyle}>
                    <thead>
                        <tr>
                            {COMPASS_TABLE_HEADERS.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
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
                <InputGroup.Text style={searchTextStyle}>
                    {SEARCH_TEXT}
                </InputGroup.Text>
                <Form.Control
                    style={searchBoxStyle}
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
