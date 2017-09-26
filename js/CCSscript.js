var lessons = [];
var timing = [];

function copied(event){

  var element = event.target;

  document.getElementById("cTopic").innerHTML = "Generate another answer!";
  document.getElementById("copy").innerHTML = "Copied!";
  document.getElementById("copy").style.backgroundColor = "#1f63d6";
}

function output(event){

  var element = event.target;
  //randomize and output
  var randomNum = 0, randomNum2 = 0;

  randomNum = Math.floor(Math.random() * (lessons.length-2) + 0);
  randomNum2 = Math.floor(Math.random() * (timing.length-2) + 0);
  
  document.getElementById("topic").value = lessons[randomNum] + timing[randomNum2];
  document.getElementById("cTopic").innerHTML = "Waiting for you to copy. . .";
  document.getElementById("cTopic").style.color = 'black';
  document.getElementById("copy").innerHTML = "Copy";
  document.getElementById("copy").style.backgroundColor = "#8edbf9";
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
