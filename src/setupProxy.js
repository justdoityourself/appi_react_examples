module.exports = function(app) {
    app.use(function (req, res, next) {
        // Uncomment to use loadAppi() instead of loadBasic()
        // loadBasic() doesn't have multithreading and might block the UI during some longer operations.
        /*res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");*/
        next();
    });
};