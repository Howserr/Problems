import React from 'react';
import { Row, Col } from 'reactstrap';
import Log from '../Log';

interface LogProps {
    log: Log;
    key: number;
}



const LogItem: React.FC<LogProps> = (props: LogProps) => {
    return(
        <Row>
            <Col>{props.log.time.toDateString()}</Col>
            <Col>{props.log.clientId}</Col>
            <Col>{props.log.message}</Col>
            <Col>{props.log.stackTrace}</Col>
        </Row>
    );
}

export default LogItem;