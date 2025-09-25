
let module_list = [
    "Programming for Digital Media",
    "Authoring for Digital Media",
    "Contextual Media",
    "Audio, Video and Sensor Technologies",
    "Visual Computing and Design"
];

console.log("second item", module_list[1]);
console.log("third item", module_list[2]);

var player_score = 0

function add_score (){
player_score ++;
}

add_score();
 
console.log(player_score);

if (player_score = 1,3,5){
    console.log("Your score is odd");
} else {
    console.log("Your score is even");
}