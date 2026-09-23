const express=require("express")
const{protect,authorize}=require("../middleware/authMiddleware")
const{getCourses,createCourses,updateCourses,deleteCourses, getCourseById}=require("../controllers/courseController")

const courseRoute=express.Router()

courseRoute.get("/",getCourses)

courseRoute.post("/",protect,authorize('instructor','admin'),createCourses)

courseRoute.get("/:id",getCourseById)
courseRoute.put("/:id",protect,authorize('instructor','admin'),updateCourses)
courseRoute.delete("/:id",protect,authorize('instructor','admin'),deleteCourses)



module.exports=courseRoute