import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

interface LogFilterProps {
    filterItems: string[];
    selectedItems: string[];
    onFilterItemClicked: (item: string) => void
}


const LogFilter: React.FC<LogFilterProps> = (props: LogFilterProps) => {
    return(
        <ListGroup>
            {props.filterItems.map((item: string) => (
                <ListGroupItem tag="button" action onClick={() => props.onFilterItemClicked(item)} active={props.selectedItems.includes(item)}>{item}</ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default LogFilter