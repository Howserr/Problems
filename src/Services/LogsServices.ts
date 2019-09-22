import Log from "../Components/Dashboard/Log"

class LogsService {
    getApplications(): Promise<string[]> {
        return new Promise( resolve => resolve([
                "Members", 
                "Website"
            ])
        )
    }

    getLogs(): Promise<Log[]> {
        return new Promise(resolve => resolve([
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
                    id: 5,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 6,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 7,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 8,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 9,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 10,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 11,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 12,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 13,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 14,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 15,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 16,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 17,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 18,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 19,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                },
                {
                    id: 20,
                    message: "Test Message4",
                    stackTrace: "Error thrown at SomeClass.cs",
                    time: new Date('2019-09-04 14:34:22'),
                    clientId: "Website"
                }
            ])
        )
    }
}

export default LogsService