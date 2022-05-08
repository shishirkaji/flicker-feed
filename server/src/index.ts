import express from "express";
import flickerRoute from "./rest/flicker.rest";
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "*",
    })
);

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "API is healthy" });
});

app.use("/flicker", flickerRoute);

const port = 9999;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
