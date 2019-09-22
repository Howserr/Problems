import React from 'react';
import Log from './Log';
import LogList from './LogList/LogList';
import LogFilter from './LogFilter/LogFilter';
import { Row, Col } from 'reactstrap';

interface DashboardState {
    logs: Log[];
    applications: string[];
    selectedApplications: string[];
}

class Dashboard extends React.Component<{}, DashboardState> {
    constructor(props: any) {
        super(props)
        this.state = {
            logs: [
                {
                    id: 1,
                    message: "Test Message1",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-01 08:47:45'),
                    clientId: "Members"
                },
                {
                    id: 2,
                    message: "Test Message2",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-02 11:00:38'),
                    clientId: "Members"
                },
                {
                    id: 3,
                    message: "Test Message3",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-03 17:02:09'),
                    clientId: "Members"
                },
                {
                    id: 4,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                }
            ],
            applications: ["Members", "Website"],
            selectedApplications: ["Members", "Website"]
        }

        this.toggleFilterApplication = this.toggleFilterApplication.bind(this);
        this.filteredLogs = this.filteredLogs.bind(this);
    }

    toggleFilterApplication(application: string) {
        const index = this.state.selectedApplications.indexOf(application);
        if (index < 0) {
            this.state.selectedApplications.push(application);
        } else {
            this.state.selectedApplications.splice(index, 1);
        }
        this.setState({ selectedApplications: [...this.state.selectedApplications]})
    }

    filteredLogs() {
        return this.state.logs.filter((log: Log) => {
            return this.state.selectedApplications.includes(log.clientId)
        })
    }

    render() {
        return(
            <div>
                <Row>
                    <Col xs="3">
                        <LogFilter filterItems={this.state.applications} selectedItems={this.state.selectedApplications} onFilterItemClicked={this.toggleFilterApplication}></LogFilter>
                    </Col>
                    <Col xs="9">
                        <LogList logs={this.filteredLogs()}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;