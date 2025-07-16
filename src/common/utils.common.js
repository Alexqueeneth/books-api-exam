export const sendResponse = (res, status, success, message, data) => {
  res.status(status).json({ success, message, data });
}; 
export const catchAsync = (fn) => {
    return async (req, res, next) => 
        {
            try{
                await fn(req, res);
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: "something went wrong",
                    errors: {
                        message: error.message
                    }
                });
            }}}
  