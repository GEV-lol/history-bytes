const facts = [
    {"fact":"The Spitfire, a WW2-era British Fighter Plane had a wingspan of 11-12 metres!", "tags":["WW2", "Cold War", "UK", "Vehicles"], "date":"1938-1961 CE", "period":["WW2","Cold War"], "country":["UK"], "url":"https://en.wikipedia.org/wiki/Supermarine_Spitfire"}, 
    {"fact":"The Viking Age in Britain began when Vikings raided a Christian Monastery on the Island of Lindisfarne!", "tags":["Viking", "Middle Ages","England","Scandinavia"], "date":"793 CE", "period":["Middle Ages"],"country":["England", "Scandinavia"],"url":"https://www.britannica.com/event/Lindisfarne-Raid"},
    {"fact":"The Hundred Years' War between England and France actually lasted for 116 years, and had many seperate phases!", "tags":["Middle Ages", "England", "France"], "date":"1337-1453 CE", "period":["Middle Ages"],"country":["England", "France"],"url":"https://en.wikipedia.org/wiki/Hundred_Years%27_War"},
    {"fact":"The infamous King Henry VIII was coronated in 1509!" , "tags":["Tudor Era", "England"], "date":"1509 CE", "period":["Tudor Era"],"country":["England"],"url":"https://en.wikipedia.org/wiki/Henry_VIII"},
    {"fact":"The last Holy Roman Emperor reigned until 1806!" , "tags":["Napoleonic Era", "Germany"], "date":"1806 CE", "period":["Napoleonic Era"],"country":["Germany"],"url":"https://en.wikipedia.org/wiki/Francis_II,_Holy_Roman_Emperor"},
    {"fact":"The Chinese Civil War lasted from 1927-1949, but a peace treaty was never signed!" , "tags":["Interwar Period", "China", "WW2", "Cold War"], "date":"1927-1948 CE", "period":["Cold War"],"country":["China"],"url":"https://en.wikipedia.org/wiki/Chinese_Civil_War"},
    {"fact":"Ethiopia and Liberia were the only African nations to not be colonized by European countries!" , "tags":["Colonial Africa", "Ethiopia", "Liberia"], "date":"1884-1914 CE", "period":["Colonial Africa"],"country":["Ethiopia/Liberia"],"url":"https://en.wikipedia.org/wiki/Scramble_for_Africa"}
]
var currentFact=0
function runFacts()
{
 
        console.log(facts)
        

        var randomFact = Object.keys(facts).length * Math.random();
        randomFact = Math.round(randomFact);
        randomFact = randomFact - 1;
        if (randomFact == -1){
            randomFact = 0
        }
        console.log(randomFact)
        var selectedFact=facts[randomFact];
        currentFact=randomFact
        console.log(currentFact);
        appendFact(selectedFact)
        
        
};  
function newFact(){
    $("#more-info").addClass("hide");
          runFacts();
}
function appendFact(afact){
    var div = document.getElementById('generated-fact');
        while(div.firstChild){
        div.removeChild(div.firstChild);
        }
 $("<p>"+afact.fact +"</p>").appendTo("#generated-fact");
 var div = document.getElementById('date');
        while(div.firstChild){
        div.removeChild(div.firstChild);
        }
 $("<p>Date: "+ afact.date +"</p>").appendTo("#date");
 var div = document.getElementById('tags');
        while(div.firstChild){
        div.removeChild(div.firstChild);
        }
 $("<p>Key Words: " +afact.tags +"</p>").appendTo("#tags");
 var div = document.getElementById('period');
        while(div.firstChild){
        div.removeChild(div.firstChild);
        }
 $("<p>Period: "+afact.period +"</p>").appendTo("#period");
 var div = document.getElementById('country');
        while(div.firstChild){
        div.removeChild(div.firstChild);
        }
 $("<p>Country: "+afact.country +"</p>").appendTo("#country");
 var div = document.getElementById('external-website');
    while(div.firstChild){
    div.removeChild(div.firstChild);
    }
 $("<a href='"+afact.url+"' target='_blank' > Wikipedia</a>").appendTo("#external-website")
}
function showInfo()
{
console.log(currentFact)
$("#more-info").toggleClass("hide");
}




//this function can't see the 'Fact' variable, so we can't use HTML 'onclick'
