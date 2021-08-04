const express = require("express")
const bodyParser = require("body-parser")
const app = express()
// app.set("view engine", path.join(__dirname, "view"))
app.set("view engine", 'ejs')


var items= ["buy food"]; 
var work =[];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/", function (req, res) {
    var today = new Date();
    var option = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    var day = today.toLocaleDateString("en-US", option)


    // var currentDay = today.getDate();
    // var day = "" 
    // console.log(currentDay)

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;

    //     default:
    //     console.log("error")


    



    res.render("list", { listTitle: day, newListItem: items});
});

app.get("/work", function(req,res){
    res.render("list", { listTitle: "Work list", newListItem: work})
})


app.post("/", function(req,res){
    item= req.body.newItem
    if(req.body.list === "Work" ){
        work.push(item)
        res.redirect("work")
    } else{
        items.push(item)
        res.redirect("/")

    }
   
    
})

app.listen(3000, function () {
    console.log("server running")
})