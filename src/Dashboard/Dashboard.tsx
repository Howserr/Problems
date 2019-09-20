import React from 'react';
import LogItem from './Log/LogItem';
import Log from './Log';

class Dashboard extends React.Component<{}, DashboardState> {
    state: DashboardState = {
        logs: [
            {
                id: 1,
                message: "Test Message1",
                stackTrace: "Stack Trace",
                time: new Date('2019-09-01'),
                clientId: "Members"
            },
            {
                id: 2,
                message: "Test Message2",
                stackTrace: "Stack Trace",
                time: new Date('2019-09-02'),
                clientId: "Members"
            },
            {
                id: 3,
                message: "Test Message3",
                stackTrace: "Stack Trace",
                time: new Date('2019-09-03'),
                clientId: "Members"
            },
        ]

    };

    render() {
        return(
            <div>
                {this.state.logs.map((log: Log) => (
                    <LogItem log={log} key={log.id}/>
                ))}
            </div>
        );
    }
}



interface DashboardState {
    logs: Log[]
}

export default Dashboard;