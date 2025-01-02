const getProject = (req, res) => {
    try {
        res.send({
            message: 'This is getProject API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = getProject