var Airport = function(){
  this.hangar = [];
  this.capacity = 5;

}

Airport.prototype.changeCapacity = function(capacity){
  this.capacity = capacity;
};

Airport.prototype.viewCapacity = function(){
  return this.capacity;
};

Airport.prototype.land = function(plane){
  if (this.generateWeather() === "Stormy") {throw Error("Weather conditions are unsatisfactory for landing");}
  if (this.hangar.length >= this.capacity) {throw Error("Airport capacity reached, can not land plane");}
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane){
  if (!this.hangar.includes(plane)) {throw Error("Plane is not in airport");}
  if (this.generateWeather() === "Stormy") {throw Error("Weather conditions are unsatisfactory for takeoff");}
  this.hangar.splice(this.hangar.indexOf(plane), 1);
  return "Plane has left the building";
};

Airport.prototype.generateWeather = function(){
  var weatherCondition = ["Stormy", "Sunny", "Sunny", "Sunny", "Sunny"];
  return weatherCondition[Math.floor ( Math.random() * weatherCondition.length )];
};
