
import express from "express";

class Server{

 constructor() {

        this.app=express();
        this.port=3000;
        this.middlewares();
        this.routes();
    }

    routes (){
    // obtener los platos
    this.app.get("/api", (req, res) => {
        res.json("Petición GET");
        
    });
  //agregar un nuevo plato
    this.app.post("/api", (req, res) => {
        res.json("Petición POST");
    });
    //modificar un plato
    this.app.put("/api/:id", (req, res) => {
      res.json("Petición PUT");
    });
        //eliminar un plato
    this.app.delete("/api/:id", (req, res) => {
         res.json("Petición DELETE");
    });
    this.app.use(this.categori,this.routes)
  
    }

    middlewares(){
        this.app.use(express.static("public"));
    }
    listen(){
        this.app.listen(this.port, () => console.log("Server online, port:",this.port));
    }
}
export default Server;
