import React from "react";
import { ListGroup, ListGroupItem, Button, ButtonGroup } from "reactstrap";

interface LogFilterProps {
    filterItems: string[];
    selectedItems: string[];
    onFilterItemClicked: (item: string) => void;
    onSelectAllClicked: () => void;
    onUnselectAllClicked: () => void;
}


const LogFilter: React.FC<LogFilterProps> = (props: LogFilterProps) => {
    return(
        <div className="rounded-0">
            <ButtonGroup style={{width: "100%" }}>
                <Button className="rounded-0" color="success" onClick={props.onSelectAllClicked}>Select All</Button>
                <Button className="rounded-0" color="danger" onClick={props.onUnselectAllClicked}>Unselect All</Button>
            </ButtonGroup>
            <ListGroup>
                {props.filterItems.map((item: string, key: number) => (
                    <ListGroupItem key={key} tag="button" className="rounded-0" action onClick={() => props.onFilterItemClicked(item)} active={props.selectedItems.includes(item)}>{item}</ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default LogFilter