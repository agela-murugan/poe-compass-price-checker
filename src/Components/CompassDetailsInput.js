import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const CompassDetailsInput = (props) => {
    const { getCompassDetails } = props;

    const [compassesInfo, setCompassesInfo] = useState("");

    const onClick = () => {
        if (compassesInfo) {
            // Splitting all the compass details into individual array elements
            const compasses = compassesInfo.replace(/\n/g, ",").split(",");

            // Removing the first and the last messages added by PoEStack
            compasses.shift();
            compasses.pop();

            // Compass details in an object
            const formattedCompassesData = compasses.map((compassDetails) => {
                const quantity = Number(
                    compassDetails.slice(0, compassDetails.indexOf("x"))
                );

                const compassNamesArray = compassDetails
                    .split(" ")
                    .filter((value) => {
                        return /[A-Z]/g.test(value);
                    });

                const firstNameIndex = compassDetails.indexOf(
                    compassNamesArray[0]
                );

                const lastNameIndex =
                    compassDetails.indexOf(
                        compassNamesArray[compassNamesArray.length - 1]
                    ) + compassNamesArray[compassNamesArray.length - 1].length;

                const compassName = compassDetails.substring(
                    firstNameIndex,
                    lastNameIndex
                );

                // Bulk price of all the compasses in stash
                let bulkPrice = "";
                if (quantity > 1) {
                    bulkPrice = compassDetails.slice(
                        compassDetails.indexOf("(") + 1,
                        compassDetails.lastIndexOf("c") + 1
                    );
                } else {
                    bulkPrice = compassDetails.split(" ").reverse()[2];
                }

                // Individual price of each compass
                const individualPrice = compassDetails.substring(
                    compassDetails.indexOf(compassName) +
                        compassName.length +
                        1,
                    compassDetails.indexOf(" / each")
                );

                // Final object to be returned
                return {
                    compassName,
                    quantity,
                    bulkPrice,
                    individualPrice,
                };
            });
            getCompassDetails(formattedCompassesData);
        }
    };

    const clearShit = () => {
        setCompassesInfo("");
        getCompassDetails("");
    };

    return (
        <Container>
            <br />
            <br />
            <Form>
                <Form.Group>
                    <Form.Label className="textarea-label">
                        Paste your text from PoE Stack:
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        onChange={(e) => setCompassesInfo(e.target.value)}
                        value={compassesInfo}
                        style={{
                            backgroundColor: "#201F1D",
                            color: "white",
                            borderColor: "transparent",
                            fontSize: "18px",
                        }}
                    />
                </Form.Group>
                <br />

                <div className="button-group">
                    <Button
                        onClick={onClick}
                        style={{
                            width: "8rem",
                            backgroundColor: "#315D80",
                            borderColor: "transparent",
                            margin: "auto 15px",
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={clearShit}
                        style={{
                            width: "8rem",
                            backgroundColor: "#1F3C51",
                            borderColor: "transparent",
                            margin: "auto 15px",
                        }}
                    >
                        Clear
                    </Button>
                </div>
            </Form>
            <br />
            <br />
        </Container>
    );
};

export default CompassDetailsInput;
