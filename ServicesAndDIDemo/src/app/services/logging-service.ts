export class LoggingService {
    constructor(){
    }
    logInfo(logMsg : string):void{
        console.log("Info Msg: "+logMsg);
    }

    logDebug(logMsg : string):void{
        console.log("Debug Msg: "+logMsg);
    }

    logWarning(logMsg : string):void{
        console.log("Warn Msg: "+logMsg);
    }

    logError(logMsg : string):void{
        console.log("Error Msg: "+logMsg);
    }
}
