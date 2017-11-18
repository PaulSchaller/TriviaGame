$(document).ready(function(){

    $("#start").click(stopwatch.start);
    $("#stop").click(stopwatch.stop);
    $("#reset").click(stopwatch.reset);

});


    
//  Our stopwatch object.
	var stopwatch = {

  	time: 0,
  	
  	reset: function(){

  		stopwatch.time = 0;
  	},

  	
  	start: function() {

  		counter = setInterval(stopwatch.count, 1000);
      //loadQuestions();
      $("#main-container").hide();
      $("#main-container1").css('display', 'block');
  	},

	stop: function()  {
		clearInterval(counter);
	},


	count:  function(){
			
		stopwatch.time++;

    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#showTime').html(converted);

    if (stopwatch.time == 90){
      alert("You have a minute left.");
    }

		if (stopwatch.time == 120){
      alert("You have 30 seconds left.");
    }


    if (stopwatch.time == 150){
      alert("Time has expired.");
      stop();
    }
  },


	timeConverter: function(t) {

    	//  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    	var minutes = Math.floor(t / 60);
    	var seconds = t - (minutes * 60);

    	if (seconds < 10) {
      	seconds = "0" + seconds;
    	}

    	if (minutes === 0) {
      	minutes = "00";
    	}

    	else if (minutes < 10) {
      	minutes = "0" + minutes;
    	}

    	return minutes + ":" + seconds;
  	}


  //loadQuestions: function() {

  }

