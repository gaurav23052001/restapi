const express= require('express');
const app=express();
const Student=require('./schema/schema')


require('./db/sb');

app.use(express.json());


app.post('/add', async (req, res) => {
    try {
        const student = new Student({
            name: req.body.name,
            class: req.body.class,
            address: req.body.address,
        });
        
        const student_Data = await student.save();
        res.json({ message: "Student added", student: student_Data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while adding the student." });
    }
});

app.get('/add',async(req,res)=>{
    try {
        const student=await Student.find();
        res.send(student);
    } catch (error) {
        console.log(error)
    }
})

app.get('/adda',async(req,res)=>{
    try {
        const {student_Id}=req.body;
        const student=await Student.findOne({_id:student_Id});
        res.send(student);
    } catch (error) {
        console.log(error)
    }
})



const port=8000;
app.listen(port,()=>{
console.log(`server running on port ${port}`);
})