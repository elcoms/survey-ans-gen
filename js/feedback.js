function displayAnswer(){
  document.getElementById('bImprove').style.display = 'none';
  document.getElementById('bSubmit').style.display = 'block';
  document.getElementById('input').style.display = 'block';
  document.getElementById("text").innerHTML = "Enter an answer. Submit and we'll review it!";
}

function displayImprovement(){
  document.getElementById('bAnswer').style.display = 'none';
  document.getElementById('bSubmit').style.display = 'block';
  document.getElementById('input').style.display = 'block';
  document.getElementById("text").innerHTML = "Enter your feedback on this website. All feedback appreciated!";
}

function back(){
  if(document.getElementById('input').style.display === 'block'){
    document.getElementById('bAnswer').style.display = 'block';
    document.getElementById('bImprove').style.display = 'block';
    document.getElementById('bSubmit').style.display = 'none';
    document.getElementById('input').style.display = 'none';
    document.getElementById("text").innerHTML = "Choose a category.";
  }
  else {
    window.location.href = "../index.html";
  }
}

function submit(){
  if(document.getElementById('input').value != ""){

    var feedback = document.getElementById('input').value;

    if(document.getElementById('bAnswer').style.display === 'none')
      firebase.database().ref('improvement').push(feedback);
    else
      firebase.database().ref('answer').push(feedback);

    document.getElementById("text").innerHTML = "Submitted. Thanks for your support!";
    document.getElementById('input').value = "";
  }
  else{
    alert("Please enter a value.");
  }
}



console.log("js working.");
