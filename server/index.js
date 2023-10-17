const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.send("Hello home Server!!")
})

app.get("/api", (req, res) => {
 res.json({ message: "Hello Server!!" })
})

app.get("/api/v1", (req, res) => {
    res.json({ message: "Hola desde boton!!" })
   })

app.listen(PORT, () => {
    console.log(`Server listening on http:// 
    localhost:${PORT}`);
}) 