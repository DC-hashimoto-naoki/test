module.exports = {
    jwt: {
        secret : "SECRET_KEY",
        options : {
            algorithm: "HS256",
            expiresIn: "1d"
        }
    }
}