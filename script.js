function box1(id) {
  var divs = document.getElementById('container').getElementsByTagName('div');  //get all divs from div called container
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] != id) {  //if not selected div set .items css
      divs[i].className = 'items';
    }
  }
  id.className = 'boxitemred';  //set different css for selected one
}

function box2(id) {
  var divs = document.getElementById('container').getElementsByTagName('div');  //get all divs from div called container
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] != id) {  //if not selected div set .items css
      divs[i].className = 'items';
    }
  }
  id.className = 'boxitemorange';  //set different css for selected one
}


function box3(id) {
  var divs = document.getElementById('container').getElementsByTagName('div');  //get all divs from div called container
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] != id) {  //if not selected div set .items css
      divs[i].className = 'items';
    }
  }
  id.className = 'boxitemyellow';  //set different css for selected one
}

function box4(id) {
  var divs = document.getElementById('container').getElementsByTagName('div');  //get all divs from div called container
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] != id) {  //if not selected div set .items css
      divs[i].className = 'items';
    }
  }
  id.className = 'boxitemgreen';  //set different css for selected one
}

function box5(id) {
  var divs = document.getElementById('container').getElementsByTagName('div');  //get all divs from div called container
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] != id) {  //if not selected div set .items css
      divs[i].className = 'items';
    }
  }
  id.className = 'boxitemviolet';  //set different css for selected one
}

function box6(id) {
  var divs = document.getElementById('container').getElementsByTagName('div');  //get all divs from div called container
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] != id) {  //if not selected div set .items css
      divs[i].className = 'items';
    }
  }
  id.className = 'boxitemblue';  //set different css for selected one
}

///

document.getElementById("long").addEventListener("click", function () {
  long.style.backgroundColor = prompt("What color?");
});


//https://stackoverflow.com/questions/31896819/setting-background-color-of-div-on-click