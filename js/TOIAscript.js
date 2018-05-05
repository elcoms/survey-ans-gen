var instructors = [];

function copied(){
  document.getElementById("bName").innerHTML = "Copy";
  document.getElementById("bName").style.backgroundColor = "#8edbf9";
}

function output(event){

  var element = event.target;

  if(instructors.length <= 1)
    getData(processData, "../data/instructors.txt");

  if(document.getElementById("name") != null)
  {
    //randomize and output
    var randomNum = 0;
    var randomLine;
    //random
    randomNum = Math.floor(Math.random() * instructors.length + 0);

    //split and insert topic
    var randomLine = instructors[randomNum];

    document.getElementById("name").innerHTML = randomLine;
    document.getElementById("cName").innerHTML = "Generate another answer!";
    document.getElementById("cName").style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    document.getElementById("bName").innerHTML = "Copied!";
    document.getElementById("bName").style.backgroundColor = "#1f63d6";

    deleteElement(instructors, randomNum);
  }
}

function deleteElement(array, num){
  if(array[num+1] != null)
  {
    array[num] = array[num+1];
    return deleteElement(array, num+1);
  }
  else {
    array.pop();
    return array;
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
