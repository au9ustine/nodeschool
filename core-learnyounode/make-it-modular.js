module.exports = (dir_name, file_ext_name, callback) => {
    let fs = require('fs');
    let path = require('path');
    fs.readdir(dir_name, (err, data) => {
        if(err) {
            return callback(err);
        }
        callback(null, data.filter(f => path.extname(f) === `.${file_ext_name}`));
    });
};
