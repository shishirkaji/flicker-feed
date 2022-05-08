import express from "express";
import flickerRoute from "./rest/flicker.rest";

const app = express();

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use("/flicker", flickerRoute);
const port = 9999;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
