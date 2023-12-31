const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    // Wrong MongoDB Id Error (Cast Error)
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //Mongoose duplicate key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }

    //Mongoose JWT error
    if(err.name === "JsonWebTokenError"){
        const message = `Json Web Token is invalid, Try again`;
        err = new ErrorHandler(message, 400);
    }

     //Mongoose JWT expire error
     if(err.name === "TokenExpiredError"){
        const message = `Json Web Token is Expired, Try again`;
        err = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        sucess:false,
        message:err.message,
    });
};