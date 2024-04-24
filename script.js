// Mad Lib with JavaScript by Ahmed Alomran

// Event Listener
document.getElementById("proccess").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib()  {

// Input
let pluralNown = document.getElementById("PN").value;
let adjective =  document.getElementById("A").value; 
let verb = document.getElementById("PTV").value;
let noun = document.getElementById("N").value;
let verb2 = document.getElementById("PTV2").value;
let adjective2 = document.getElementById("A2").value;

// Process
let result = 'There are too many ' + pluralNown + ' on this ' + adjective + ' airplane. I screamed. Somebody has to ' + verb + ' on the ' + noun + ' to solve this problem. A couragous person got up, who was known for being ' + adjective2 + ' and he solved the problem, everyone began ' + verb2 + ' .the end.';
// Output
document.getElementById("yellowBorder").innerHTML = result;
}

// Event listener
document.getElementById("secondstory").addEventListener("click", buildMadLibtwo);

// Event Function
function buildMadLibtwo()  {

// Input
let pluralNown = document.getElementById("PN").value;
let adjective =  document.getElementById("A").value; 
let verb = document.getElementById("PTV").value;
let noun = document.getElementById("N").value;
let verb2 = document.getElementById("PTV2").value;
let adjective2 = document.getElementById("A2").value;

// Process
let result = 'Ive been seeing ' + pluralNown + ' in my nightmares, each time they were very ' + adjective + ' Each time this nightmare occured, I would wake up and ' + verb + ' Then a ' + noun + ' would begin ' + verb2 + ' Then id be calmed down and i would finally feel very ' + adjective2 + 'the end.';

// Output
document.getElementById("redborder").innerHTML = result; 

}