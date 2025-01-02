const addEducation = (req, res) => {
    try {
        res.send({
            message: 'This is addEducation API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = addEducation