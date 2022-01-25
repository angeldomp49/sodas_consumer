import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Id from "../../randomKey/Id";
import { RestButtons, Soda } from "../../types";

export const Table = (props: {
    columns: string[],
    items: Soda[],
    activeButtons: RestButtons
}) => {
    
    return (
        <MDBTable>
            <TableHead columnNames={props.columns} />
            <TableBody 
                items={props.items} 
                activeButtons={props.activeButtons}
                />
        </MDBTable>
    );
};

export const TableHead = (props :{columnNames: string[]}) => {

    let columnNamesHTML = props.columnNames.map((name) => {
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

export const TableBody = (props: {items: Soda[], activeButtons: RestButtons}) => {

    let itemsHTML = props.items.map((item) => {

        return (
            <Row item={item} activeButtons={props.activeButtons} />
        );
    });

    return (
        <MDBTableBody>
            {itemsHTML}
        </MDBTableBody>
    );
};

export const Row = (props: {item: Soda, activeButtons: RestButtons}) => {

    let properties = [
        "id", 
        "marca"
    ];

    let codeHtml = properties.map((property: string) => {
        let f = property;
        console.log(props.item[property]);
    };

    return (
        <tr key={Id.generate()}>
            <td>{props.item.id}</td>
            <td>{props.item.marca}</td>
            <td>{props.item.sabor}</td>
            <td>{props.item.familia}</td>
            <td>{props.item.descripcion}</td>
            <ButtonGroup activeButtons={props.activeButtons} />
        </tr>
    );
}

export const ButtonGroup = (props: {activeButtons: RestButtons}) => {
    return (<>
        { props.activeButtons.show ? <TableButton>show</TableButton> : '' }
        { props.activeButtons.edit ? <TableButton>edit</TableButton> : '' }
        { props.activeButtons.delete ? <TableButton>delete</TableButton>: '' }
    </>);
};

export const TableButton = (props: {children?: React.ReactChild | React.ReactChild[]}) => {
    return (
        <td>
            <button>
                {props.children}
            </button>
        </td>
    );
};


export default Table;