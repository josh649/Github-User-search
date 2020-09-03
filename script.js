//gets user search and stores it in the variable search
var userName;
var api = "https://api.github.com/users";

async function getSearch(){
  var repoDiv = document.getElementById("userRepos");
  repoDiv.innerHTML = ""
  var  userName=document.getElementById("searchBar").value;
  var url = "https://api.github.com/users/" + userName;
  var response = await fetch(url);
  var json = await response.json();
  console.log(json['login'], json['bio'])



//pull josn title info into my variables 
  document.getElementById("profilepic").src = json["avatar_url"]
  document.getElementById("userName").innerHTML = json["login"]
  document.getElementById("name").innerHTML = json["name"]
  document.getElementById("userEmail").innerHTML = json["email"]
  document.getElementById("location").innerHTML = json["location"]
  document.getElementById("numGists").innerHTML= json["public_gists"]




  var repoResp = await fetch (json['repos_url']);
  var repos = await repoResp.json();
  var repoDiv = document.getElementById("userRepos");
  repoDiv.style="overflow: scroll ;max-height: 655px; width: 45%;visibility:visible"


//loops through the number of repos and creates the paragraphs in the list depending on repo numbers
    for(var i =0 ;i <repos.length;i++){
    console.log(repos[i]["name"])
    var innerHTML = "<p class='rightList'>" + repos[i]["name"] + "<br>" + repos[i]["description"] + "</p>"
    repoDiv.innerHTML+=innerHTML;
  }
}


//pulls user repo info
function setup(){
  var url = api +user
loadJSON('https://api.github.com/users',gotData);
}



function gotData(data){
  login = data;
}


function printUserName(){
    background(0)
    if(login){

      alert(login)
    }
}
