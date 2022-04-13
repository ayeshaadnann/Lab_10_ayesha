const bookS = require("../models/book");

exports.getAllBooks = (req, res, next) => {
    bookS.find({}, (error, bookS1) =>{
        if (error) next(error);
        req.data = bookS1;
        next();
    });
};