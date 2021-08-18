let express = require("express");
let path = require('path');
const { rawObj } = require("./ytdata");




let pbF = express.static("./public")

let app = express();
app.use(pbF)

// app.get("/", (req, res) => {

//     res.sendFile(path.join(__dirname, '/public/index.html'))

// });
// app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/about.html'))
// });
app.get('/api/first', (req, res) => {
    res.json([{ name: 'teazer', acct: 'deity' }, { name: 'Admiral', acct: 'alias' }])

})

app.get('/api/recipes', (req, res) => {

    let myrecipes = [];
    rawObj.items.forEach(r => {
        myrecipes.push({
            title: r.snippet.title,
            desc: r.snippet.description,
            image: r.snippet.thumbnails.medium.url,
            vidId: "/recipe/" + r.id.videoId
        });
    })
    res.json(myrecipes)

})
app.get('/api/recipes/:id', (req, res) => {


    let singleRecipe = rawObj.items.find(recipe => recipe.id.videoId === req.params.id)

    singleRecipe ? res.json(singleRecipe) : res.status(404).send('Oops ... Recipe not Found')


})
app.all('*', (req, res) => {

    res.sendFile(path.join(__dirname, '/404.html'))
})
app.listen(7000, () => {
    console.log("someone connect5ed");
});
