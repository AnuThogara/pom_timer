(function() {
    //initialize variables
    var startButton = $("#start");

    var seconds = $('#seconds');
    // main functionaility

    startButton.on('click', countdown);

    //function definition
    function countdown() {
     var secondsText= seconds.text();
     var secondsTextAsNumber= parseInt(secondsText);
     if(secondsTextAsNumber === 0){
       seconds.text("59");
       //then change sec text to 59

     }
     else{
       // var secondsvalue = parseInt(seconds.text());
       //
       // seconds.text(pad(secondsvalue - 1));

     var decreasedSecondsAsNumberByOne = secondsTextAsNumber - 1;
     var padSecondsTextAsNumber = pad(secondsTextAsNumber);
     seconds.text(padSecondsTextAsNumber);
}
    }

    function pad(num) {
        if (num < 10) {
            //spit out num leading 0
            return "0" + num;
        } else {
            //spit out the original number
            return num;
        }
    }
}());
