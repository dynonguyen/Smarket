const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads');
    }, 
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

// file validation
const fileFilter = (req, file, cb) => {
    cb(null, true);
    
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024*1024},
    fileFilter: fileFilter,
})


module.exports = upload;