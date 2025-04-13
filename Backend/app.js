const session = require("express-session"); //express session 
const ejs = require("ejs");
const path = require("path");

// importing mysql
const newDB = require("./database/Create/createNewDatabase");
const createProfitTable = require("./database/Create/createProfitTable");
const createLossTable = require("./database/Create/createLossTable");
const profitSubmit = require("./calculations/profitSubmit");
const lossSubmit = require("./calculations/lossSubmit");
const calculateProfit = require("./calculations/calculateProfit");
const calculateLoss = require("./calculations/calculateLoss");

// express setup
const express = require("express");
const app = express();

// ejs setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// middlewares || 
app.use(express.urlencoded({extended: true})); // for receiving POST method

//setting express session
app.use(session({
    secret: "very secret company name",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


// setting default/root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/heroPage/homePage.html")); // to send Files using {path.join}
});

app.get("/pnl", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/pnlPage/pnl.html"));
});

// handling create req
app.post("/create", async (req, res) => {
    let projectName = (req.body.companyName);
    req.session.companyName = projectName; 
    let duration = req.body.duration;
    await newDB(projectName);
    await createProfitTable(projectName);
    await createLossTable(projectName);
    res.sendFile(path.join(__dirname, "/views/pnlPage/pnl.html"));
});

app.post("/create/revenue_submit", async (req, res) => {
    let values = req.body;
    let companyName = req.session.companyName;
    await profitSubmit(values, companyName);
    // res.redirect("/create/revenue_submit");
});

app.post("/create/expense_submit", async (req, res) => {
    let values = req.body;
    let companyName = req.session.companyName;
    await lossSubmit(values, companyName);
    // res.sendFile(path.join(__dirname, "/views/index.html"));
});

// calculation API
app.post("/profit/calculate", (req, res) => {
    let values = req.body;
    let companyName = req.session.companyName;
    let output = calculateProfit(values);
    res.render("pnlPage/pnlProfitOutput.ejs", {output});
});

app.post("/loss/calculate", (req, res) => {
    let values = req.body;
    let companyName = req.session.companyName;
    let output = calculateLoss(values);
    res.render("pnlPage/pnlLossOutput.ejs", {output});
});

//listening server setup
app.listen(8080, () => {
    console.log("Listening on port 8080 :)");
});
