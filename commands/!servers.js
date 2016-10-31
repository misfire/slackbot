var util = require('../util');
var query = require('game-server-query');
var async = require("async");

module.exports = function (param) {
 
    var cache;

    async.waterfall([
    function firstStep(done) {
      // some async task
      console.log('start!');
      query(
    {
        type: 'svencoop',
        host: '70.173.51.39',
        port_query: '27015'
    }, serverContent );
    

    function serverContent(state) {
        if(state.error){
      console.log("Server is offline");
      done(null, cache)
    }
        else {
          //  console.log("done");
    //  console.log(state);
      cache = state.name + " - Map: " + state.map + " - Players: " + state.raw.numplayers + "/" + state.maxplayers + "\n - IP: " + state.query.host + ":" + state.query.port + " - <steam://connect/" + state.query.host + ":" + state.query.port + "|Connect>"
      done(null, cache)
    }

    }
        
    },
    function secondStep(step1result, done) {
      // some async task
      console.log('1');
          query(
    {
        type: 'svencoop',
        host: '136.243.147.27',
        port_query: '27030'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      done(null, cache)
    }
        else {
   //   console.log(state);
      cache += "\n" + state.name + " - Map: " + state.map + " - Players: " + state.raw.numplayers + "/" + state.maxplayers + "\n - IP: " + state.query.host + ":" + state.query.port + " - <steam://connect/" + state.query.host + ":" + state.query.port + "|Connect>"
    //  console.log(cache);
       done(null, step1result)
    }
    }
);  
       

    },
    function thirdStep(step2result, done) {
      // some async task
      console.log('2');
       query(
    {
        type: 'svencoop',
        host: '70.173.51.39',
        port_query: '27017'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      done(null, cache)
    }
        else {
      console.log(state);
      cache += "\n" + state.name + " - Map: " + state.map + " - Players: " + state.raw.numplayers + "/" + state.maxplayers + "\n - IP: " + state.query.host + ":" + state.query.port + " - <steam://connect/" + state.query.host + ":" + state.query.port + "|Connect>"
    //  console.log(cache);
       done(null,step2result);
    }
    }
);
      
     //  console.log(step2result);

    },
     function fourthStep(step3result, done) {
      // some async task
      console.log('2');
       query(
    {
        type: 'svencoop',
        host: '198.96.94.44',
        port_query: '27019'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      done(null,step3result);

    }
        else {
      console.log(state);
      cache += "\n" + state.name + " - Map: " + state.map + " - Players: " + state.raw.numplayers + "/" + state.maxplayers + "\n - IP: " + state.query.host + ":" + state.query.port + " - <steam://connect/" + state.query.host + ":" + state.query.port + "|Connect>"
    //  console.log(cache);
       done(null,step3result);
    }
    }
);
      
     //  console.log(step2result);

    },
         function fifthStep(step4result, done) {
      // some async task
      console.log('2');
       query(
    {
        type: 'svencoop',
        host: '198.96.94.44',
        port_query: '27015'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      done(null,step4result);

    }
        else {
      console.log(state);
      cache += "\n" + state.name + " - Map: " + state.map + " - Players: " + state.raw.numplayers + "/" + state.maxplayers + "\n - IP: " + state.query.host + ":" + state.query.port + " - <steam://connect/" + state.query.host + ":" + state.query.port + "|Connect>"
    //  console.log(cache);
       done(null,step4result);
    }
    }
);
      
     //  console.log(step2result);

    },
         function fourthStep(step4result, done) {
      // some async task
      console.log('2');
       query(
    {
        type: 'svencoop',
        host: '198.96.94.44',
        port_query: '27018'
    },
    function(state) {
        if(state.error){
      console.log("Server is offline");
      done(null,step4result);

    }
        else {
      console.log(state);
      cache += "\n" + state.name + " - Map: " + state.map + " - Players: " + state.raw.numplayers + "/" + state.maxplayers + "\n - IP: " + state.query.host + ":" + state.query.port + " - <steam://connect/" + state.query.host + ":" + state.query.port + "|Connect>"
    //  console.log(cache);
       done(null);
    }
    }
);
      
     //  console.log(step2result);

    }
  ],function(err) {
    console.log(cache);
   util.postMessage(param.channel, cache);
    // Code to execute when everything is done.
});


  
};