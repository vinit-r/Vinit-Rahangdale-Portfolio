const deleteExperience = (req, res) => {
    try {
        res.send({
            message: 'This is deleteExperience API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = deleteExperience