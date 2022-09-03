//require dotenv to use enviroment variable
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
/* Require Express to run server and routes */
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

//get Api key
const ApiKey = process.env.API_KEY;
const sentimentResults = {};


const app = express()
/* Middleware
Here we are configuring express to use body-parser as middle-ware. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Cors for cross origin allowance */
app.use(cors());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//recive user input and retrive external server data
app.post('/add', async function  (req, res) {
   
    const userData = req.body;
    const sentimentUrl = userData.userUrl;    
    const linktoFetch = `https://api.meaningcloud.com/sentiment-2.1?key=${ApiKey}&lang=en&url=${sentimentUrl}`;    

    const response = await fetch(linktoFetch);
 
    try {
        const data = await response.json()                                 
        sentimentResults['polarity'] = data.score_tag;
        sentimentResults['subjectivity'] = data.subjectivity;
        sentimentResults['sample_text'] = data.sentence_list[0].text;
        console.log(sentimentResults);
        res.json(sentimentResults)                      
       
      }catch(error) {
      console.log("errorr", error)      
      }
    
    
    
})    


