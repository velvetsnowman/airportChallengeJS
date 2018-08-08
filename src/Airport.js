var Airport = function(){
  this.hangar = [];

}

Airport.prototype.land = function(plane){
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane){
  if (!this.hangar.includes(plane)) {
    throw Error("Plane is not in airport");
  } if (this.generateWeather() === "Stormy") {
    throw Error("Weather conditions are unsatisfactory for takeoff");
  } else {
    this.hangar.splice(this.hangar.indexOf(plane), 1);
    return "Plane has left the building";
  }
};

Airport.prototype.generateWeather = function(){
  var weatherCondition = ["Stormy", "Sunny", "Sunny", "Sunny", "Sunny"];
  weatherCondition[Math.floor ( Math.random() * weatherCondition.length )];
};
