const { Router } = require("express");
const controller = require("./controller");


const router = Router();


router.get("/",controller.getProducts);
router.get("/name/:name", controller.getOneProduct);
router.get("/:id", controller.getProductById);

router.post("/",controller.addProduct);


router.delete("/:id", controller.removeProduct);
router.put("/:id", controller.updateProduct);




module.exports = router;