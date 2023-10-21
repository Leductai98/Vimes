

const listRouter = require("./list.route")


function route(app){
    app.use("/list",listRouter)
}

module.exports=route;