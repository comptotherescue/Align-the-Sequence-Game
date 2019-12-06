
    
function init(){
    var database  = firebase.database();
    var scoresRef = database.ref("scoreboard");
    scoresRef.orderByValue().on("value", function(snapshot) {
    document.getElementById("accordion").innerHTML = "<div class = 'row' style='color: white; font-size : 10; padding : 20px;'><div class='col-md-6'><span>Username</span></div><div class='col-md-6'><span>Time</span></div></div><hr style='border: 3px solid white;margin: 0px'>";
    snapshot.forEach(function(data) {
        creatDiv(data.key, data.val());
    });
    });
    
}

function creatDiv(name, score){
var div = document.createElement("div");
div.className = "row"
div.style.color = "white";
div.style.fontSize = "10";
div.style.padding = "20px";
div.innerHTML = "<div class='col-md-6'><span>" + name + "</span></div><div class='col-md-6'><span>" + score + "</span></div>";

document.getElementById("accordion").appendChild(div);
}

init();