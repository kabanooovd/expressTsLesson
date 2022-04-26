import express from "express"
import { userRouter } from "./users/users.js";

const PORT = 5000;
const app = express();

app.get("/hello", (req, res) => {
    res.send("HELLLLO DIADKA")
})

app.use("/users", userRouter)

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send(err.message)
})

app.listen(PORT, () => {
    console.log(`Server has startd... on ${PORT} port`)
})