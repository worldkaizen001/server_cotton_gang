const getallStudents = "SELECT * FROM todo";
const getStudentsbyId = "SELECT * FROM todo WHERE id = $1";
const getReward = "select * from todo where reward = $1";
const checkEmailExist = "SELECT s FROM todo s WHERE s.task = $1";
const addTodo = "INSERT INTO todo(task,reward) VALUES($1, $2);";
const deleteStudent = "DELETE FROM todo WHERE id = $1;";
const updateStudent = "UPDATE todo SET task = $1 WHERE id = $2";

 
module.exports = {
    getallStudents,
    getStudentsbyId,
    getReward,
    checkEmailExist,
    addTodo,
    deleteStudent,
    updateStudent,
}