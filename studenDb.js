let names = ["Austin", "Randy", "Michael", "Lindsay", "Shelly"];
let favoriteFood = ["Pizza", "Sausage", "Salad", "Ice Cream", "Ramen"];
let homeTown = ["Kansas", "Ohio", "California", "Alaska", "Florida"];
let goAgain = true;

while (goAgain === true){
printStudents(names);
let input = selectStudent();
getNavChoice(names, input);
goAgain = runAgain();
}
function printStudents(names){
    for (i = 0; i < names.length; i++){
        console.log((i+1) + ": "  + names[i]);
    }
}
function selectStudent(){
    let input = prompt("Please Choose a Student from the above list");
    if (input -1 < 0 || input -1 > names.length ){
        console.log("Sorry, that is not a valid selection. Please try again");
        return selectStudent();
    }
    else {
        return input;
    }
}
function runAgain(){
   let input = prompt("Would you like to run again? Please enter y/n");
    if (input === "y"){
        return true;
    }
    else if (input === "n"){
        return false;
    }
    else {
        console.log("Sorry, I didnt quite understand. Please try again");
        return runAgain();
    }
}
function getNavChoice(names, input){
    let navChoice = prompt(`Okay, you've selected ${names[input -1]} Would you like to learn about ${names[input -1]}'s favorite food or home town?`).toLowerCase().trim();

    if (navChoice.includes("food")){
       console.log(`${names[input -1]}'s favorite food is ${favoriteFood[input -1]}`); 
       return navChoice;
    }
    else if (navChoice.includes("town")){
        console.log(`${names[input -1]}'s hometown is ${homeTown[input-1]}`);
        return navChoice;
    }
    else {
        console.log("Sorry, I didn't quite get that. Please try again");
        return getNavChoice(names, input);
    }
}