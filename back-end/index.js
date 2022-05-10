const express = require("express");
var cors = require("cors");
const Blog = require("./models/models")
const app = express();
const port = 4000;

app.use(express.json())
// app.use(express.urlencoded())

const mongoose = require("mongoose");
const database = require("./database/database");

mongoose.Promise = global.Promise;
mongoose.connect(database.mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
    console.error("Something went wrong in mongodb %s", configs.mongouri);
});
app.use(cors());

//ทดลอง Database
app.post('/database', async (req, res) => {
    try {
        let a = new Blog({
            vaccinationcenter: "สถานีกลางบางซือ",
            vaccinetype: "3",
            phonenumber: "0982334567",
            title: "Mr",
            gender: "Male",
            name: req.body.name,
            surname: req.body.surname,
            birthday: "12/10/2000",
            address: "763",
            provice: "bangkok",
            district: "prawet",
            subdistrict: "prawet",
            zipcode: "10250",
            vaccinedate: "12/07/2022",
            vaccinetime: "09:00",
        })
        // console.log(req.body);
        await a.save()
        const result = await Blog.find()
        res.send(result)
    }
    catch (err) {
        err
    }
})

app.get("/database2", async (req, res) => {
    try {
        const allfile = await Blog.find({});
        res.send(allfile);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/", (req, res) => {
    res.json({
        text: "Hello",
    });
});

app.get('/test', async function (req, res) {
    counter.add(1, { service_name: "testservice" });
    counter.add(1, { service_name: "testservice", status: "success", path: "/test" });
    counter.add(1, { service_name: "testservice", status: "failure", path: "/test" });
    counter.add(1, { service_name: "testservice", status: "data not found", path: "/test" });

    res.type('json')
    var delay = Math.floor((Math.random() * 2000) + 100);

    setTimeout((() => {
        res.send(({
            movies: [
                { name: 'Jaws', genre: 'Thriller' },
                { name: 'Annie', genre: 'Family' },
                { name: 'Jurassic Park', genre: 'Action' },
            ]
        }))
    }), delay)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});