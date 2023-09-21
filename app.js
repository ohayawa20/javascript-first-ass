let myName=prompt("What is your name?")
let myWeight=prompt("Enter your weight in KG?")
function resultDetail(){
    resultWeight = myWeight*2.2;
    return "My name is " + myName +" and i weighed " + resultWeight +" pounds"
}
alert(resultDetail())