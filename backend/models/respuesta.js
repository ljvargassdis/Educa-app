var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var respuesta = new Schema({
    user:String,
    pfp:String,
    text: String,
    comentario:String,
    date: {type: Date, default: Date.now}
}); 


module.exports = mongoose.model("respuesta", respuesta)