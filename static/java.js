///*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
//
//var tweetReach = document.querySelector('.tweetReach')
//
//
//function calculateTweetReach() {
//    fetch('/tweetReach')
//        .then(onresponse)
//        .then(onload, onfail)
//
//    function onresponse(res) {
//        return res.json()
//    }
//
//    function onload() {
//        window.location = '/'
//    }
//
//    function onfail() {
//        throw new Error('Could not reach!')
//    }
//}
//
//tweetReach.addEventListener('click', calculateTweetReach)
//
