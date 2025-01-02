const deleteEducation = (req, res) => {
    try {
        res.send({
            message: 'This is deleteEducation API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = deleteEducation