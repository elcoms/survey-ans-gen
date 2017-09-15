var instructors = [];

function copied(event){

  var randColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  var element = event.target;

  document.getElementById("cName").innerHTML = "Copied!";
  document.getElementById("cName").style.color = randColor;
}

function output(event){

  var element = event.target;

  if(document.getElementById("name") != null)
  {
    //randomize and output
    var randomNum = 0;
    var randomLine;
    //random
    randomNum = Math.floor(Math.random() * instructors.length + 0);

    //split and insert topic
    var randomLine = instructors[randomNum];

    document.getElementById("name").value = randomLine;
    document.getElementById("cName").innerHTML = "Waiting for you to copy...";
    document.getElementById("cName").style.color = 'black';
  }
}


function getData(callback, file)
{

  var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status == 0)
              {
                  callback(rawFile.responseText);
              }
          }
      }
      rawFile.send(null);

}

function processData(text)
{
  var lines = text.split(";");

  if(lines[0].indexOf("Instructor") > 0)
  {
    instructors = lines;
    instructors.shift();
  }
  else {
    alert("Error loading data. Please try again later.");
  }
}

getData(processData, "../data/instructors.txt");

console.log("js working.");