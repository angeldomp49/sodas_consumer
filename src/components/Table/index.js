import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Id from "../../randomKey/Id";

export const Table = ({columns, items, propertiesList}) => {
    
    return (
        <MDBTable>
            <TableHead columnNames={columns} />
            <TableBody 
                items={items} 
                propertiesList={propertiesList} 
                />
        </MDBTable>
    );
};

export const TableHead = ({columnNames = []}) => {

    let columnNamesHTML = columnNames.map((name) => {
        return (
            <th key={Id.generate()}>
                {name}
            </th>
        );
    });

    return (
        <MDBTableHead>
            <tr>
                {columnNamesHTML}
            </tr>
        </MDBTableHead>
    );
};

export const TableBody = ({items = [], propertiesList = []}) => {

    let itemsHTML = items.map((item) => {

        return (
            <Row item={item} propertiesList={propertiesList} />
        );
    });

    return (
        <MDBTableBody>
            {itemsHTML}
        </MDBTableBody>
    );
};

export const Row = ({item, propertiesList}) => {
    let propertiesHTML = propertiesList.map((property) => {
        return (
            <td key={Id.generate()}>{item[property]}</td>
        );
    });

    return (
        <tr key={Id.generate()}>
            {propertiesHTML}
        </tr>
    );
}


export default Table;