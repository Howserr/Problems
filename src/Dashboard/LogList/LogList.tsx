import React from 'react';
import Log from '../Log';
import LogListItem from './LogListItem';

interface LogListProps {
    logs: Log[];
}

const LogList: React.FC<LogListProps> = (props: LogListProps) => {
    return(
        <div>
            {props.logs.map((log: Log) => (
                <LogListItem log={log} key={log.id}/>
            ))}
        </div>
    );
}

export default LogList;