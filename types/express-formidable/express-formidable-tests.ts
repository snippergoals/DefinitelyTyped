import * as express from "express"
import * as expform from "express-formidable";

const app = express();

app.use("/form1", expform(), (req, res, next) => {
    console.log(req.fields)
    console.log(req.files)
    next()
});

app.use("/form2", expform({
    encoding: "utf-8",
    uploadDir: "./uploads",
    keepExtensions: true,
    type: "multipart",
    maxFieldsSize: 3 * 1024 * 1024,
    maxFields: 50,
    hash: "sha1",
    multiples: true
}));
