var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var comentario = new Schema({
    user:String,
    pfp:String,
    type:String,
    title:String,
    text: String,
    file: String,
    date: {type: Date, default: Date.now}
}); 

module.exports = mongoose.model("comentario", comentario)