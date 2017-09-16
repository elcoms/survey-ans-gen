var lessons = [];

function copied(event){

  var element = event.target;

  document.getElementById("cTopic").innerHTML = "Enter another lesson!";

  document.getElementById("copy").innerHTML = "Copied!";
  document.getElementById("copy").style.backgroundColor = "#1f63d6";
}

function output(event){

  var element = event.target;

  if(document.getElementById("topic") != null)
  {
    var topic = document.getElementById("topic").value;

    //randomize and output
    var randomNum = 0;
    var randomLine;
    //random
    randomNum = Math.floor(Math.random() * lessons.length + 0);

    //split and insert topic
    var randomLine = lessons[randomNum];
    var splitLines = randomLine.split("|");

    document.getElementById("topic").value = splitLines[0] + topic + splitLines[1];
    document.getElementById("cTopic").innerHTML = "Waiting for you to copy. . .";
    document.getElementById("cTopic").style.color = 'black';
    document.getElementById("copy").innerHTML = "Copy";
    document.getElementById("copy").style.backgroundColor = "#8edbf9";
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

  if(lines[0].indexOf("lesson") > 0)
  {
    lessons = lines;
    lessons.shift();
  }
  else {
    alert("Error loading data. Please try again later.");
  }
}


getData(processData, "../data/lessons.txt");

console.log("js working.");
