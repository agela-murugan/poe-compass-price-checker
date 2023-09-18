import { Table } from "react-bootstrap";

const CompassTable = (props) => {
    const { compassesInfo } = props;

    const renderCompassTable = () => {
        if (compassesInfo.length) {
            const toRender = compassesInfo.map((compass, index) => {
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
            return (
                <Table bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <td>Compass Name</td>
                            <td>Individual Price</td>
                            <td>Quantity</td>
                            <td>Bulk Price</td>
                        </tr>
                    </thead>
                    <tbody>{toRender}</tbody>
                </Table>
            );
        }
    };
    return <>{renderCompassTable()}</>;
};

export default CompassTable;
