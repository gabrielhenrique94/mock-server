const db = require('../models');
module.exports.get_response = async (path, method) => {
    try {
        let request = await db.sequelize.query('SELECT * FROM requests WHERE :path LIKE regex and method = :method limit 1;',
            {
                replacements: {
                    path: path,
                    method: method
                },
                type: db.sequelize.QueryTypes.SELECT
            });
        let response = request[0].response.toString();
        return JSON.parse(response);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};