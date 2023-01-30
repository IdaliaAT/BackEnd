const socket = io();


socket.on("saludo", (data) => {
    console.log("🚀 ~ file: index.js:5 ~ data", data)
    socket.emit("respuesta", "Hola soy el cliente como estas?")
})