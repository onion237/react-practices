import http from 'http'
import express from 'express'

const port = 8080

// Application Setup
const application 
    = express()
        .use(express.static('public'))
        .use(express.urlencoded({extended:true, extends : true})) // application/x-www-form-urlencoded
        .use(express.json())                                      // application/json 
        .all('*', function(req, res, next){
            // req.locals.req = req;
            res.locals.res = res;
            res.locals.req = req;
            next()
        })
        /**
 * 1. static resources mapping
 * 2. request body parser
 * 3. view engine setup
 * 4. request router
 * 5. 
 */
// 1



// Server Setup
http.createServer(application)
    .on('listening', () => {
        console.info(`http server running on port ${port}`)
    })
    .on('error', (error) => {
        console.dir(error)
        switch(error.code){
            case 'EACCESS':
                console.error(`${port} requires privileges`)
                process.exit(1)
                
            case 'EADDRINUSE':
                console.error(`port ${port} aleady in use`)
                process.exit(1)
        }
    })
    .listen(port)