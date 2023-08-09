const os = require ('os')

const itero = (arr)=>{
    for (i=0; i<= arr.length; i++){
        console.log(arr[i])
    }
}

let arro = [os.EOL,
    os.availableParallelism(),
    os.arch(),
    os.constants,
    os.cpus(),
    os.devNull,
    os.endianness(),
    os.freemem(),
    //os.getPriority([pid]),
    os.homedir(),
    os.hostname(),
    os.loadavg(),
    os.machine(),
    os.networkInterfaces(),
    os.platform(),
    os.release(),
    //os.setPriority([pid,]priority),
    os.tmpdir(),
    os.totalmem(),
    os.type(),
    os.uptime(),
    //os.userInfo([options]),
    os.version(),]

    itero(arro)