const home = async (req,res)=>{
    try {
        res.status(200).send(`this is index page`)
    } catch (error) {
        console.log(error)
    }
}

const register = async(req,res)=>{
    try {
        console.log(req.body)
        res.status(200).send(req.body)
    } catch (error) {
        console.log(error)
    }
}


module.exports ={home,register}