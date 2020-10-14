import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidateErrors {
    [key: string] : string[];
}
const errorHandler :ErrorRequestHandler = (error, request,response, next) => {
    console.error(error)
    if(error instanceof ValidationError) {
        let errors: ValidateErrors = {}
        error.inner.forEach(error => {
            errors[error.path] = error.errors
        })
        return response.status(400).json({message: 'Validate fails', errors})
    }
    return response.status(500).json({message: 'Internal error'})
}

export default errorHandler