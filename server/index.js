'use strict'

var Twit = require('twit')

var T = new Twit({
    consumer_key: '9KrBvLfH3PNIsMJGJFsGNWilI',
    consumer_secret: '1JT1yMpnjFLa8ERwhEdXrCpUWyX6BpkjfTgYoNd7vCSBduRxIy',
    access_token: '988848475415699456-1rFm0tgzbCwJhjWHLJ1tJlotKV2sGum',
    access_token_secret: 'Q85VB75V2aTye1scoeXwxjT5JheRq1ouinB0ktgvvltTJ'
})

T.get('statuses/retweets/998595495303008258', retweets)

function retweets(err, data) {
    var followers = []
    data.forEach(function (data) {
        followers.push(data.user.followers_count)
        //        console.log(data.user.followers_count)
    })
    console.log(followers)
    console.log(followers.reduce(function (acc, val) {
        return acc + val
    }))
}
