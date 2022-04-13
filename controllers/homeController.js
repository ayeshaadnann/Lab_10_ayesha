exports.respondwithimage = (req,res) => {
    let paramsbook =req.params.ayeshaImage
    res.render("books", { book: paramsbook})
    };
    exports.respondwithimage = (req,res) => {
        let book = req.params.image;
        res.render(book);
    };