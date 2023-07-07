const express=require("express")
const { book, searchTicket, getData } = require("../controller/ticket.controller")
const tickeRouter=express.Router()

const {authenticate}=require("../middleware/authentication")

tickeRouter.post("/book/:movieId",authenticate,book)
tickeRouter.get("/get",searchTicket)
tickeRouter.get("/getbooking",authenticate,getData)

// tickeRouter.get("/allTheater",getTheater)
// tickeRouter.get("/oneTheater/:theaterId",getOneTheater)

module.exports={tickeRouter}