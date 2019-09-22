import React from 'react';
import Log from '../Log';
import LogListItem from './LogListItem';
import { ListGroup } from 'reactstrap';

interface LogListProps {
    logs: Log[];
}

const LogList: React.FC<LogListProps> = (props: LogListProps) => {
    return(
        <ListGroup flush>
            {props.logs.map((log: Log) => (
                <LogListItem log={log} key={log.id}/>
            ))}
        </ListGroup>
    );
}

export default LogList;