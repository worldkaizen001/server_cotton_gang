const getallProduct = "SELECT * FROM product";
const getProductsbyId = "SELECT * FROM product WHERE id = $1";
const getReward = "select * from product where reward = $1";
const checkEmailExist = "SELECT s FROM product s WHERE s.task = $1";
const addProduct = "INSERT INTO product(name,description,price) VALUES($1, $2, $3)";
const deleteProduct = "DELETE FROM product WHERE id = $1;";
const updateProduct = "UPDATE product SET task = $1 WHERE id = $2";
const getOneProduct = "Select * from product Where name = $1";

 
module.exports = {
    getallProduct,
    getProductsbyId,
    getReward,
    checkEmailExist,
    deleteProduct,
    updateProduct,
    getOneProduct,
    addProduct,
}