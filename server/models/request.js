module.exports = (sequelize, DataTypes) => {
    const request = sequelize.define('request', {
        path: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        regex: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        method: {
            type: DataTypes.STRING,
        },
        response: {
            type: DataTypes.BLOB
        }

    });
    request.associate = (models) => {
        //nothing here.
    };
    return request;
};
