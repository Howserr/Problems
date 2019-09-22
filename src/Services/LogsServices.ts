
class LogsService {
    getApplications() {
        return([
            "Members", 
            "Website"
        ])
    }

    getLogs() {
        return ([
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
        ])
    }
}

export default LogsService