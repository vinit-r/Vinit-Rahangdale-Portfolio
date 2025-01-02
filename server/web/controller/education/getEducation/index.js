const getEducation = (req, res) => {
    try {
        res.send({
            message: 'This is getEducation API',
            status: 200
        })
    } catch (error) {
        console.log(error); 
    }
    }
    
    module.exports = getEducation