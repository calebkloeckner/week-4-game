// game start
$(document).ready(function() {
   
    var audioElement = document.createElement('audio');
    audioElement.autoplay = true;
    audioElement.loop = true;
    audioElement.setAttribute('src', 'assets/audio/starwars.m4a');

    var audio = new Audio("assets/audio/lightsaber.mp3");

    // characters to chose from
    var characters = {
skywalker: {
    name: 'Luke Skywalker',
    health: 500,
    attack: 100,
    imgUrl: './assets/images/skywalker.png',
},
chewie: {
    name: "Chewbacca",
    health: 800,
    attack: 130,
    imgUrl: './assets/images/chewie.png',
},
maul: {    
    name: "Darth Maul",
    health: 500,
    attack: 90,
    imgUrl: './assets/images/darthmaul.jpg',
},
vader: {
    name: "Darth Vader",
    health: 1000,
    attack: 80,
    imgUrl: './assets/images/vader.jpg',
}
};    
$('#skywalker').attr('src', characters.skywalker.imgUrl);
$('#chewie').attr('src', characters.chewie.imgUrl);
$('#maul').attr('src', characters.maul.imgUrl);
$('#vader').attr('src', characters.vader.imgUrl);
$('#my-image').css('display', 'none');
$('#comp-image').css('display', 'none');

// empty variable for player and computer
var attacker;
var defender;
// $(".hp").html(character.health);
$('p').on('click', function(){   
    // use jquery to select data-player attribute and iterate over the character object to assign attacker and defender character object
var chosenCharacter = $(this).attr("data-player");
    // iterate over an object - for each key inside of characters object
for (var key in characters) {
    if (key === chosenCharacter) {
        //assign player
        if (attacker) {
            defender = characters[key];
        
        $(this).css('display', 'none');
        $("#comp-player").css("display", "none");
        $('.comp').text(defender.name);
        $('.comp-points').text(defender.attack);
        $('#comp-image').attr('src', defender.imgUrl);
            
        //assign computer 
            console.log(defender);
        } else {
            attacker = characters[key];
        
        $(this).css('display', 'none');
        $("#my-player").css("display", "none");
        $('.chosen').text(attacker.name);
        $('.hit-points').text(attacker.attack);
        $('#my-image').attr('src', attacker.imgUrl);
    // console.log(player); 
            console.log(attacker);
        }
    }
    }    
});
// attack button
  $("button").on('click', function(){
    audioElement.pause();
    audio.play();
    
   //call health points   
  //loop points until winner is decided
  var attackAttack = attacker.attack;
  var defenderAttack = defender.attack;    
  var compHealth = defender.health -= attackAttack;
  var health = attacker.health -= defenderAttack;
  $(".comp-health").text(compHealth);
  $(".health").text(health);
    //call attack points
  $(".comp-attack").text(defenderAttack); 
  $(".attack").text(attackAttack);

    if (health <= 0) {
        setTimeout(function() {
            alert("You lose");
            2000;
        });
       

} else if (compHealth <= 0) {
        setTimeout(function(){
        alert("You win! Pick another victim.");
         2000;
     });
    
 };

    console.log(attacker.attack)
      
  });
  // attacker attacks defender. deduct attacker.attack - defender.health. update new attack points
});