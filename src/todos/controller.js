const pool = require("../db");
const queries = require("./queries");


const getStudents = (req, res)=>{
    pool.query(queries.getallStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getStudentsById = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsbyId, [id] , (error, results) => {
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

const addStudent = (req,res)=>{

    // const {name, email, age, dob} = req.body;
    const {task, reward} = req.body;
    //check if email exist
    pool.query(queries.checkEmailExist, [task],(error, results)=>{
        if(results.rows.length){
            res.send("Email already exist")
        }
    })
}

const addTodo = (req,res) => {
    const {task, reward} = req.body;
    pool.query(queries.addTodo, [task , reward], (error, results) => {
        if(error) throw error;
        res.status(201).send("todo was successfully created");

    })
}

const removeStudent = (req,res)=>{
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentsbyId, [id], (error, results)=>{
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

const updateStudent = (req, res) =>{
  const id = parseInt(req.params.id);
  const { task } = req.body;

  pool.query(queries.getStudentsbyId, [id], (error, results)=>{
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
    getStudents,
    getStudentsById,
    getReward,
    addStudent,
    addTodo,
    removeStudent,
    updateStudent,
};