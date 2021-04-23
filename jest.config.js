module.exports = {
    verbose: true,
    transform:{
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.vue?$": "vue-jest"
    },
    testMatch: ["**/tests/unit/?(*.)+(spec|test).[jt]s?(x)" ],
}
