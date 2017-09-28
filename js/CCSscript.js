var lessons = [];
var timing = [];

function copied(){
  document.getElementById("bTopic").innerHTML = "Copy";
  document.getElementById("bTopic").style.backgroundColor = "#8edbf9";
}

function output(event){

  var element = event.target;

  //randomize and output
  var randomNum = 0, randomNum2 = 0;

  randomNum = Math.floor(Math.random() * (lessons.length-2) + 0);
  randomNum2 = Math.floor(Math.random() * (timing.length-2) + 0);

  document.getElementById("topic").value = lessons[randomNum] + timing[randomNum2];
  document.getElementById("cTopic").innerHTML = "Generate another answer!";
  document.getElementById("cTopic").style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  document.getElementById("bTopic").innerHTML = "Copied!";
  document.getElementById("bTopic").style.backgroundColor = "#1f63d6";

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
    for(var i = 1; i < lines.length; i++)
    {
      var line = lines[i].split("|");

      lessons.push(line[0]);
      timing.push(line[1]);
    }
  }
  else {
    alert("Error loading data. Please try again later.");
  }
}


getData(processData, "../data/lessons.txt");

console.log("js working.");
