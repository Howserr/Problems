import React from 'react';
import { Row, Col, ListGroupItem, Collapse, CardTitle, CardText } from 'reactstrap';
import Log from '../Log';

interface LogProps {
    log: Log;
    key: number;
}

interface LogListItemState {
    collapse: boolean;
}

class LogListItem extends React.Component<LogProps, LogListItemState> {
    constructor(props: LogProps) {
        super(props);
        this.state = {
            collapse: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <ListGroupItem tag="button" action onClick={this.toggle}>
                <Row>
                    <Col xs="4">{this.props.log.time.toDateString()}</Col>
                    <Col xs="4">{this.props.log.clientId}</Col>
                    <Col xs="4">{this.props.log.message}</Col>
                </Row>
                <Collapse isOpen={this.state.collapse}>
                    <CardTitle>Stack Trace:</CardTitle>
                    <CardText>{this.props.log.stackTrace}</CardText>
                </Collapse>
            </ListGroupItem>
        )
    }
}

export default LogListItem;