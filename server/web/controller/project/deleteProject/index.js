const deleteProject = (req, res) => {
    try {
        res.send({
            message: 'This is deleteProject API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = deleteProject