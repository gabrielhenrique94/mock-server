const repository = require('./mock_repository');

module.exports = (app) => {
    app.all("/mock/*", async (req, res) => {
        let path = req.path.replace('/mock', '');
        path = path.endsWith('/') ? path: path + '/';
        try {
            const response = await repository.get_response(path, req.method);
            if (response) {
                res.status(200).send(response);
            } else {
                res.status(404).send({
                    message: "Cannot find mocked response for " + path
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send("internal server error");
        }
        console.log(path);
    });
};