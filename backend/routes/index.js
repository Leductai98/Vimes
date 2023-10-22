

const listRouter = require("./list.route")
const detailRouter= require("./detail.route")

function route(app){
    app.use("/receipt",listRouter)
    app.use("/detail",detailRouter)
}

module.exports=route;