const pool = require("../db");
const queries = require("./queries");

const getOneProduct = (req, res)=>{
    const  name  = req.params.name;

    pool.query(queries.getOneProduct, [name] , (error,results) => {
        if(error) throw error;

        res.status(200).json(results.rows);
    })
}

const getProducts = (req, res)=>{

    res.send('we don dey live again o')
    // pool.query(queries.getallProduct, (error, results) => {
    //     if(error) throw error;
    //     res.status(200).json(results.rows);
    // })
}

const getProductById = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProductsbyId, [id] , (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getReward = (req,res) => {
    const reward = String( req.params.reward);
    pool.query(queries.getReward, [reward],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);

    })
}

const checkEmailExist= (req,res)=>{

    // const {name, email, age, dob} = req.body;
    const {task, reward} = req.body;
    //check if email exist
    pool.query(queries.checkEmailExist, [task],(error, results)=>{
        if(results.rows.length){
            res.send("Email already exist")
        }
    })
}

const addProduct = (req,res) => {
    const {name, description, price} = req.body;
    pool.query(queries.addProduct, [name, description, price], (error, results) => {
        if(error) throw error;
        res.status(201).send("product was successfully Added");

    })
}

const removeProduct = (req,res)=>{
    const id = parseInt(req.params.id);

    pool.query(queries.getProductsbyId, [id], (error, results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("student does not exist");
        }

        pool.query(queries.deleteStudent, [id], (error, results)=>{
            if(error)throw error;
            res.status(200).send("succefuly deleted");
        })
        
    })

}

const updateProduct= (req, res) =>{
  const id = parseInt(req.params.id);
  const { task } = req.body;

  pool.query(queries.getProductsbyId, [id], (error, results)=>{
    const noStudentFound = !results.rows.length;
    if(noStudentFound){
        res.send("student does not exist");
    }
      pool.query(queries.updateStudent, [ task, id ], (error, results) => {
        if(error) throw error;
        res.status(200).send("successfuly deleted");

      })


  })


}
module.exports = {
    getProducts,
    getProductById,
    getReward,
    addProduct,
    checkEmailExist,
    removeProduct,
    updateProduct,
    getOneProduct,
};