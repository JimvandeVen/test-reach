'use strict'

var Twit = require('twit')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', 'view')
app.use(express.static('static'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.listen(8000)

app.get('/', index)
app.post('/tweetReach', tweetReach)

var T = new Twit({
    consumer_key: '9KrBvLfH3PNIsMJGJFsGNWilI',
    consumer_secret: '1JT1yMpnjFLa8ERwhEdXrCpUWyX6BpkjfTgYoNd7vCSBduRxIy',
    access_token: '988848475415699456-1rFm0tgzbCwJhjWHLJ1tJlotKV2sGum',
    access_token_secret: 'Q85VB75V2aTye1scoeXwxjT5JheRq1ouinB0ktgvvltTJ'
})

function index(req, res) { // This is the index, one of the two pages you can see without logging in or registering
    var result = {
        data: undefined
    }
    res.status(200).render('index.ejs', Object.assign({}, result))
}

function tweetReach(req, res) {
    console.log(req.body.tweetId)
    var tweetId = req.body.tweetId
    T.get('statuses/retweets/:id', {id: tweetId}, retweets)

    function retweets(err, data) {
        if (err) {
            console.log(err)
        } else {
            var followers = []
            data.forEach(function (data) {
                followers.push(data.user.followers_count)
                //        console.log(data.user.followers_count)
            })

            console.log(followers)

            var reach = followers.reduce(function (acc, val) {
                return acc + val
            })

            console.log(reach)

            var result = {
                data: reach
            }
            res.render('index.ejs', Object.assign({}, result))
        }
    }
}
