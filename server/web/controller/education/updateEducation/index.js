const updateEducation = (req, res) => {
    try {
        res.send({
            message: 'This is updateEducation API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = updateEducation