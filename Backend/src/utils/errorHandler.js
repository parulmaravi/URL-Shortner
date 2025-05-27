export const  errorHandler = (err, req, res, next)=> {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: err.message || 'Internal server error'
    });
}


export class AppError extends Error{
    statusCode;
    isOperational;

    constructor(message, statusCode =500, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFoundError extends AppError{
    constructor(message = 'Resource not found') {
        super(message, 404);
    }
}

export class BadRequestError extends AppError{
     constructor(message = 'Bad request'){
         super(message,400)  
     }
}

export class ConflictError extends AppError{
     constructor(message = 'ConflictError occurred'){
         super(message,409)  
     }
}

export class UnauthorizedError extends AppError{
        constructor(message = 'Unauthorized access'){
            super(message,401)  
        }
}

