var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");


mongoose.connect("mongodb+srv://ljvargassdis:Colombia2021*@cluster0.wygufib.mongodb.net/BD_educa?retryWrites=true&w=majority")
.then(function(db){
    //que pasa si sale bien 
    console.log("Conectado a la base de datos")
})
.catch(function(err){
    //que pasa si sale mal
    console.log(err)

});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

var usuario = require("./models/users");
var comentarios= require ("./models/comentarios")
var respuesta= require ("./models/respuesta")

const jwt = require('jsonwebtoken');
const { updateOne } = require("./models/users");
const { Router } = require("express");


app.get("/usuarios", async function (req, res) {
  var u = await usuario.find();
  res.send(u);
});

app.post("/inicio", async function (req, res) {
  var datos = req.body;
  var u = await usuario.findOne(datos);
  if (!u) return res.status(401).send("Usuario No existe");

  const token = jwt.sign({_id: u._id}, 'secretkey')
  return res.status(200).json({token})
});

app.get("/tareas", async function(req, res){
  res.json([{
    id: 1,
    nombre: 'Lección 1',
    descripcion: 'Descubriend HTML y etiquetas',
    date: "2022-12-07T16:54:58.504+00:00"
  },
  {
    id: 2,
    nombre: 'Lección 2',
    descripcion: 'Estructuración de texto con etiquetas',
    date: "2023-01-07T16:54:58.504+00:00"
  },
  {
    id: 3,
    nombre: 'Lección 3',
    descripcion: 'Botones de construcción',
    date: "2022-02-07T16:54:58.504+00:00"
  },
  {
    id: 4,
    nombre: 'Lección 4',
    descripcion: 'Creación de enlaces',
    date: "2022-03-07T16:54:58.504+00:00"
  },
])
});

app.get("/privado", verifyToken, (req, res) => {
  res.json([{
    id: 1,
    nombre: 'Lección 1',
    descripcion: 'Descubriend HTML y etiquetas',
    date: "2022-12-07T16:54:58.504+00:00"
  },
  {
    id: 2,
    nombre: 'Lección 2',
    descripcion: 'Estructuración de texto con etiquetas',
    date: "2023-01-07T16:54:58.504+00:00"
  },
  {
    id: 3,
    nombre: 'Lección 3',
    descripcion: 'Botones de construcción',
    date: "2022-02-07T16:54:58.504+00:00"
  },
  {
    id: 4,
    nombre: 'Lección 4',
    descripcion: 'Creación de enlaces',
    date: "2022-03-07T16:54:58.504+00:00"
  },
])
});


app.post("/registrar", async function (req, res) {
    var datos = req.body;
    var u = new usuario(datos);
    await u.save();

    const token = jwt.sign({_id: u._id}, 'secretkey')
    res.status(200).json({token})
  });

  app.delete("/eliminar_usuario/:id", async function (req, res) {
    var id_usuario = req.params.id;
    await usuario.findByIdAndRemove(id_usuario);
    res.send({ mensaje: "Eliminado correctamente" });
  });

  app.put("/modificar_usuario/:id", async function (req, res) {
    var id_usuario = req.params.id;
    await usuario.findByIdAndUpdate({ _id: id_usuario }, req.body);
    res.send({ mensaje: "Modificado correctamente" });
  });

  app.get('/comunidad', async function (req, res) {
    var v = await comentarios.find();
    res.send(v);
  });

  app.get('/respuesta/:id', async function (req, res) {
    var parametro=req.params.id;
    var v = await respuesta.find({comentario:parametro});
    res.send(v);
  });

  app.get('/comentario/:id', async function (req, res) {
    var parametro=req.params.id;
    var v = await comentarios.find({_id:parametro});
    res.send(v);
  });

  app.post( '/insertar_comentario', async function (req, res) {
    var datos = req.body;
    var v = new comentarios(datos);
    await v.save();
    res.send({ mensaje: "Guardado correctamente" });
  });  

  app.post( '/insertar_respuesta/:id', async function (req, res) {
    var parametro=req.params.id;
    var datos = req.body;
    datos.comentario=parametro
    var v = new respuesta(datos);
    await v.save();
    res.send({ mensaje: "Guardado correctamente" });
  });




  function verifyToken(req, res, next){
    if (!req.headers.authorization){
    return res.status(401).send('Autorización requerida')
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token == 'null'){
      return res.status(401).send('Autorización requerida')
    }
   const data = jwt.verify(token,'secretkey')
   req.usuarioId = data._id;
   next();
   
  }

app.listen(3000, function () {
  console.log("Servidor iniciado en el puerto 3000");
});
