


var query = require('game-server-query');
var async = require("async");
var CronJob = require('cron').CronJob;

module.exports = function (param) {
 
 var webClient = param.getWebClient();

    new CronJob('* 5 * * * *', function() {
  console.log('You will see this message 15 second');

  query(
    {
        type: 'svencoop',
        host: '70.173.51.39',
        port_query: '27015'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      webClient.chat.postMessage("#general", state.query.host + ":" + state.query.port + " is not responding");
    }
        else {
      console.log(state.query.host + ":" + state.query.port + " is online.");
    // webClient.chat.postMessage("#training", "test");
    }
    }
);

  query(
    {
        type: 'svencoop',
        host: '70.173.51.39',
        port_query: '27017'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      webClient.chat.postMessage("#general", state.query.host + ":" + state.query.port + " is not responding");
    }
        else {
      console.log(state.query.host + ":" + state.query.port + " is online.");
    }
    }
);

  query(
    {
        type: 'svencoop',
        host: '136.243.147.27',
        port_query: '27030'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      webClient.chat.postMessage("#general", state.query.host + ":" + state.query.port + " is not responding");
    }
        else {
      console.log(state.query.host + ":" + state.query.port + " is online.");
    }
    }
);

  query(
    {
        type: 'svencoop',
        host: '198.96.94.44',
        port_query: '27019'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      webClient.chat.postMessage("#general", state.query.host + ":" + state.query.port + " is not responding");
    }
        else {
      console.log(state.query.host + ":" + state.query.port + " is online.");
    }
    }
);

  query(
    {
        type: 'svencoop',
        host: '198.96.94.44',
        port_query: '27018'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      webClient.chat.postMessage("#general", state.query.host + ":" + state.query.port + " is not responding");
    }
        else {
      console.log(state.query.host + ":" + state.query.port + " is online.");
    }
    }
);

query(
    {
        type: 'svencoop',
        host: '198.96.94.44',
        port_query: '27015'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      webClient.chat.postMessage("#general", state.query.host + ":" + state.query.port + " is not responding");
    }
        else {
      console.log(state.query.host + ":" + state.query.port + " is online.");
    }
    }
);

}, null, true, 'America/Los_Angeles');


  
};