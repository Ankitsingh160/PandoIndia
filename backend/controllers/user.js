
import { User } from "../models/user.js";
import Error from "../utils/customError.js";
import { catchAsyncError } from "../utils/asyncErrorHandler.js";



// user  data filling
export const register = catchAsyncError(async (req, res, next) => {


    const { fname, lname, email, address, phone } = req.body;
    
    if (!fname  || !lname || !email || !address || !phone) return next(new Error("Please fill the details!"));

    const id = await User.findOne({ email });
    if (id) return next(new Error("User Already Exist!", 409));

    const details = await User.create({ fname, lname, email, address, phone });


    res.status(200)
    .json({
        success: true,
        message: `data Filled Successfully!`
    })
});



//  user details
export const details = catchAsyncError(async (req, res, next) => {

    const data  = await User.find();


    res.status(200)
    .json({
        success: true,
        data: data,
        message: `Data Recieved Successfully!`
    })
});

