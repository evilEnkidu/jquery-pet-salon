var pet1 = {
    petName : "Charro",
    age : 8,
	gender : "F",
	service : "Grooming",
	breed : "Boxer"
}
var pet2 = {
    petName : "Apollo",
	age : 7,
	gender : "M",
	service : "Check-up",
	breed : "German Sheperd"
}
var pet3 = {
    petName : "Gala",
	age : 2,
	gender : "F",
	service : "Check-up",
	breed : "Mixed"
}

var pets = [pet1, pet2, pet3];

function showPetCount(){
    let petCount = pets.length;
    let button = document.getElementById("countBtn");
    let h3 = document.createElement('h3');
    h3.textContent = petCount + ' pets waiting!';
    h3.id = "petCount";
    button.parentNode.replaceChild(h3, button);
    return true;
}

function showAvgAge(){
    let totalAge = 0;
    for (let i = 0; i < pets.length; i++){
        totalAge += pets[i].age;
    }
    const averageAge = totalAge / pets.length;
    let button = document.getElementById("ageBtn");
    let h3 = document.createElement('h3');
    h3.textContent = parseFloat(averageAge).toFixed(1) + " years!";
    h3.id = "petAge";
    button.parentNode.replaceChild(h3, button);
    return true;
}

function showPetNames(){
    let button = document.getElementById('nameBtn');
    let h3 = document.createElement('h3');
    h3.textContent = '';

    for (let i = 0; i < pets.length; i++){
        h3.textContent += pets[i].petName + ' ';
    }
    h3.id = "petNames";
    button.parentNode.replaceChild(h3, button);
}

