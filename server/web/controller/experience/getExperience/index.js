const getExperience = (req, res) => {
    try {
        res.send({
            message: 'This is getExperience API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = getExperience