const updateExperience = (req, res) => {
    try {
        res.send({
            message: 'This is updateExperience API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = updateExperience