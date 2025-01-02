const addProject = (req, res) => {
    try {
        res.send({
            message: 'This is addProject API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = addProject