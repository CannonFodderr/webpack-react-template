const path = require('path');
console.log(path.resolve(__dirname, "../src/index.js"))
module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src/index.js"),
        vendor: path.resolve(__dirname, "../src/vendor.js"),
    }
}