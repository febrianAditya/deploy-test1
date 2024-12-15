module.exports = {
    host: "postgres.railway.internal",
    username: "postgres",
    password: "IlBXMTTHZsBTfclgUOkNaQNXSRIafNpq",
    database: "railway",
    port: "5432",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}