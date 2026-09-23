const express=require("express")
const{protect,authorize}=require("../middleware/authMiddleware")
const{getCourses,createCourses,updateCourses,deleteCourses}=require("../controllers/courseController")

const courseRoute=express.Router()

courseRoute.get("/",getCourses)

courseRoute.post("/",createCourses)

courseRoute.get("/:id",(req,res)=>{

})
courseRoute.put("/:id",updateCourses)
courseRoute.delete("/:id",deleteCourses)



module.exports=courseRoute