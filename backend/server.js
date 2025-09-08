const app = require("./app");
const Port = process.env.PORT || 3000;
const connectToDb = require("./db/db")

app.listen(Port, () => {
    console.log("server connected to port", Port);
    connectToDb();
})
