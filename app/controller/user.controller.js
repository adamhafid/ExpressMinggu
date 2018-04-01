//fungsi helloworld
const helloworld = (request, respond)=>
respond.send('hello api')

//fungsi user get name dan adress
const userFunction=(req, res)=>{
const {name, address}=req.params
res
    .status(200)
    .json({
        name,
        address,
    })
}

const getEmployee=(req, res)=>{
    const dummyEmployee={
        name:'sarah',
        address:'Any street',
        birth_date:'1962=07-03',
        hire_date:'1989-05-09',
    }
    return res
    .status(200)
    .json(dummyEmployee)
}

const addOneEmployee=(req,res)=>{
    const{name, address}=req.body

    return res
    .status(200)
    .json({
        name,
        address,
    })
}

module.exports={
    helloworld,
    userFunction,
    getEmployee,
    addOneEmployee
}