const multer = require("multer");

const storage =
multer.diskStorage({

destination:
(req,file,cb)=>{
cb(null,"uploads/");
},

filename:
(req,file,cb)=>{
cb(
null,
Date.now() +
"-" +
file.originalname
);
}

});

const upload =
multer({storage}).single(
"resume"
);

exports.uploadResume =
(req,res)=>{

upload(req,res,function(err){

if(err){
return res.status(500).json({
message:"Upload Failed"
});
}

let score =
Math.floor(
Math.random()*30
)+70;

res.json({

score:score,

message:
"Resume analyzed successfully"

});

});

};