const authRoute = require('express').Router();
const upload = require('../configs/multer.config');


const authController = require('../controllers/auth.controller');
const cpUpload = upload.fields([
    {
        name: 'avatar'
    },
    {
        name: "certificate"
    }
])

authRoute.get('/login', authController.getLogin);
authRoute.get('/logout', authController.getLogout);

authRoute.post('/login', authController.postLogin);

authRoute.get('/signup', authController.getSignUP);
authRoute.post('/signup',cpUpload, authController.postSignUp);

module.exports = authRoute;
