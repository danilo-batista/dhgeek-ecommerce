const multer = require("multer");

const multerDiskStorage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, "public/upload");
    },
    filename: (req,file,cb) =>{
        cb(null, file.originalname + Date.now());
    }
})

const upload = multer({storage: multerDiskStorage});

module.exports = upload;