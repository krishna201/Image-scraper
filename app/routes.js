module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html');
    });
    app.get("/keywordlist", function(req, res) {
        res.sendfile("./public/index.html");
    });
    app.get("/keywordlist/:id", function(req, res) {

        res.sendfile("./public/index.html");
    });

};