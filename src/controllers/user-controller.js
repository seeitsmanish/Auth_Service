const UserService = require('../services/user-service');
const userService = new UserService();

const create = async (req,res) => {

    try {
        const data = {
            email : req.body.email,
            password : req.body.password
        };
        const response = await userService.create(data);
        return res.status(201).json({
            message : 'Successfully created a new user',
            data : response,
            success : true,
            err : {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message : 'Something went wrong',
            data : {},
            success : false,
            err : error                                     
        }); 
    }
}

module.exports = {
    create,
}