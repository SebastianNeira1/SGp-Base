var Usuario = require("../models/usuario");

exports.crearUsuario = ((req,res)=>{
    Usuario.create(req.body,
    (err,docs)=>{
        if(!err){
            res.status(200).send(docs)
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    });
});

exports.obtenerUsuario = ((req,res)=>{
    console.log(req);
    Usuario.findOne({username:req.query.nombreusuario,password:req.query.passwordusuario},
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            console.log(err);
            res.status(404).send("Error");
        }
    })
});
/*
exports.obtenerContrasena = ((req,res)=>{
    Usuario.find({contrasena:req.query.contrasena},
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            console.log(err);
            res.status(404).send("Error");
        }
    })
});
*/
/*
exports.modificarUsuario = ((req,res)=>
    Usuario.replaceOne({
        _id: req.body._id
    },
    req.body,
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    })
);

exports.eliminarUsuario = ((req,res)=>
    Usuario.deleteOne({
        _id: req.query._id
    },
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    })
);
*/