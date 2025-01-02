const addExperience = (req, res) => {
    try {
        res.send({
            message: 'This is addExperience API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = addExperience