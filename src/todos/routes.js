const { Router } = require("express");
const controller = require("./controller");


const router = Router();


router.get("/",controller.getStudents);
// router.post("/",controller.addStudent);
router.post("/",controller.addTodo);

router.get("/:id", controller.getStudentsById);
router.get("/:task", controller.getReward);
router.delete("/:id", controller.removeStudent);
router.put("/:id", controller.updateStudent);




module.exports = router;