const updateProject = (req, res) => {
    try {
        res.send({
            message: 'This is updateProject API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = updateProject