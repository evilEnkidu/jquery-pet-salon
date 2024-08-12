// start empty global array of services //
var services = [];

//  execute starting services function at load//
window.onload = startingServices;

// hardcoded starting services //
function startingServices(){
var service1 = new ServiceConstructor("Nail Clipping", "Lorem Ipsum etc etc", "15", '<i class="fa-solid fa-paw"></i>');
services.push(service1);
updateServiceSection();
}
// update service section at start and each time a new service is added//
function updateServiceSection(){

  // clean .row so services don't duplicate.
  $('.row').empty();

  // loop through services 
  
  for (let i = 0; i < services.length; i++){
    var service = services[i];

    // create service element
    var $serviceDiv = $('<div>').addClass('service');
    var $icon = $(service.icon);
    var $heading = $('<h3>').text(service.name);
    var $description = $('<p>').text(service.description);
    var $price = $('<p>').addClass('price').text('$' + service.price);

    // append the elements to the service div
    $serviceDiv.append($icon, $heading,$description, $price);

    // append the service div to the row container
    $('.row').append($serviceDiv);
  }

}

// Service Constructor //
function ServiceConstructor(name, description, price, icon){
    this.name = name;
    this.description = description;
    this.price = price;
    this.icon = icon;
}

// read input that will go to service constructor //
function addService(){
    let name = $("#nameInput").val();
    let description = $("#descriptionInput").val();
    let price = $("#priceInput").val();
    let icon = $("#urlInput").val();
    if (price === "" || name === "" || description === "") {
        if ($('.error-container .error-message').length === 0) {
          $('.error-container').append('<h4 class="error-message">Please do not leave empty fields.</h4>');
        }
      } 
      else{
        if (icon === ""){
          let icon = "<p> icon placeholder </p>";
          ServiceConstructor(name, description, price, icon);
        }
        else{
          ServiceConstructor(name, description, price, icon);
        }
        $('#service-form')[0].reset();
      }
      let newService = new ServiceConstructor(name, description, price, icon);
      services.push(newService);
      updateServiceSection();
    }


