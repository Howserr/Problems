import React from 'react';
import Log from './Log';
import LogList from './LogList/LogList';
import LogFilter from './LogFilter/LogFilter';
import { Row, Col } from 'reactstrap';
import LogsService from '../../Services/LogsServices';

interface DashboardState {
    logs: Log[];
    applications: string[];
    selectedApplications: string[];
}

class Dashboard extends React.Component<{}, DashboardState> {
    constructor(props: any) {
        super(props)

        let logsService = new LogsService();
        let logs = logsService.getLogs();
        let applications = logsService.getApplications();
        
        this.state = {
            logs: logs,
            applications: applications,
            selectedApplications: [...applications]
        }

        this.toggleApplicationFilter = this.toggleApplicationFilter.bind(this);
        this.toggleOnAllApplicationFilters = this.toggleOnAllApplicationFilters.bind(this);
        this.toggleOffAllApplicationFilters = this.toggleOffAllApplicationFilters.bind(this);
        this.filteredLogs = this.filteredLogs.bind(this);
    }

    toggleApplicationFilter(application: string) {
        const index = this.state.selectedApplications.indexOf(application);
        if (index < 0) {
            this.state.selectedApplications.push(application);
        } else {
            this.state.selectedApplications.splice(index, 1);
        }
        this.setState({ selectedApplications: [...this.state.selectedApplications] })
    }

    toggleOnAllApplicationFilters() {
        this.setState({ selectedApplications: [...this.state.applications] })
    }

    toggleOffAllApplicationFilters() {
        this.setState({ selectedApplications: [] })
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
                        <LogFilter filterItems={this.state.applications} 
                        selectedItems={this.state.selectedApplications} 
                        onFilterItemClicked={this.toggleApplicationFilter} 
                        onSelectAllClicked={this.toggleOnAllApplicationFilters} 
                        onUnselectAllClicked={this.toggleOffAllApplicationFilters}>
                        </LogFilter>
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