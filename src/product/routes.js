const { Router } = require("express");
const controller = require("./controller");


const router = Router();


router.get("/",controller.getProducts);
// router.post("/",controller.addStudent);
router.get("/:name", controller.getOneProduct);
router.post("/",controller.addProduct);

router.get("/:id", controller.getProductById);
router.get("/:task", controller.getReward);
router.delete("/:id", controller.removeProduct);
router.put("/:id", controller.updateProduct);




module.exports = router;