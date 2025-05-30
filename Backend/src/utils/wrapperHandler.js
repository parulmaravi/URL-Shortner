export default function wrapperHandler(fn) {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
           next(error);
        }
    };
};



