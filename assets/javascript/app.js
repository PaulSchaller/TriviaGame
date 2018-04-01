//the document loads and then is ready to receive clicks from the user 
$(document).ready(function(){

    $("#start").click(stopwatch.start);
    $("#stop").click(stopwatch.stop);
    $("#reset").click(stopwatch.reset);
    $("#resetA").click(stopwatch.reset1);

});


    
//  Our stopwatch object.
	var stopwatch = {

  	time: 0,

//get the resuts of the quiz and evaluate and broadcast the results
    computeResults:  function() {

//I set up three variables to receive the results of the user inputs on the quiz
      var vacant = 0;
      var missed = 0;
      var correct = 0;

//check questions for those that were not answered during the quiz.  
      if (!$("input[name=question1]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question2]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question3]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question4]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question5]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question6]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question7]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question8]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question9]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question10]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question11]:checked").val()){
        vacant++;
      }
      if (!$("input[name=question12]:checked").val()){
        vacant++;
      }


//the letters on the left (a, b, c, d) are the correct answers to the questions.  I am trying to determine which questions were answered correctly
      if ($("input[name=question1]:checked").val() == 'c'){
        correct++;
      }
      if ($("input[name=question2]:checked").val() == 'd'){
        correct++;
      }
      if ($("input[name=question3]:checked").val() == 'c'){
        correct++;
      }
      if ($("input[name=question4]:checked").val() == 'b'){
        correct++;
      }
      if ($("input[name=question5]:checked").val() == 'b'){
        correct++;
      }
      if ($("input[name=question6]:checked").val() == 'd'){
        correct++;
      }
      if ($("input[name=question7]:checked").val() == 'b'){
        correct++;
      }
      if ($("input[name=question8]:checked").val() == 'c'){
        correct++;
      }
      if ($("input[name=question9]:checked").val() == 'd'){
        correct++;
      }
      if ($("input[name=question10]:checked").val() == 'a'){
        correct++;
      }
      if ($("input[name=question11]:checked").val() == 'a'){
        correct++;
      }
      if ($("input[name=question12]:checked").val() == 'c'){
        correct++;
      }

//I can calculat the # of missed questions by subtracting the correct and unanswered questions from  12 (12 is the number of questions on the quiz).
      missed = 12 - vacant - correct;

//troubleshooting
      console.log(missed);
      console.log(vacant);
      console.log(correct);

//jquery code to manipulate the DOM and broadcast the results of the quiz on a webpage
      $('#answeredCorrectly').text(correct);
      $('#unanswered').text(vacant);
      $('#wrongAnswers').text(missed);

    },


//resets the game
  	reset: function(){
      $('#main-container').show();
      $('#main-container1').css('display', 'none');
  		stopwatch.time = 0;
  	},

  	reset1:  function(){
      $('#main-container').show();
      $('#main-container2').css('display', 'none');
      stopwatch.time = 0;
    },

//initial start of the game  	
    start: function() {
      counter = setInterval(stopwatch.count, 1000);
      $("#main-container").hide();
      $("#main-container1").css('display', 'block');
  	 },
    
//ending the game and getting the results
    stop: function()  {
      clearInterval(counter);
      $('#main-container1').css('display', 'none');
      $('#main-container2').css('display', 'block');
      stopwatch.computeResults();
	   },

//the stopwatch (timer) of the game
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
        stopwatch.stop();
      }
    },

//converts seconds to a minutes and seconds display
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

     
  }

