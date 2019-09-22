interface Log {
    id: number;
    message: string;
    stackTrace: string;
    time: Date;
    clientId: string;
}

export default Log