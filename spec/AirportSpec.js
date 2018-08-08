describe("Airport", function(){
  var airport;
  var plane;


  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe("landing a plane", function() {
    it("adds plane to hangar", function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe("takeoff", function() {
    it("makes a plane depart from the airport", function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar).not.toContain(plane);
    });

    it('throws an error if plane is not in hangar', function(){
      expect( function() {airport.takeoff(plane);}).toThrowError("Plane is not in airport");
    });

    it('will not let a plane take off if weather is stormy', function(){
      airport.land(plane);
      spyOn(airport, 'generateWeather').and.returnValue('Stormy');
      expect( function() {airport.takeoff(plane);}).toThrowError("Weather conditions are unsatisfactory for takeoff");

    });
  });

  describe("generates the weather", function(){
    it("and returns stormy", function(){
      spyOn(airport, 'generateWeather').and.returnValue('Stormy');
      expect(airport.generateWeather()).toEqual("Stormy");
    });

    it("and returns sunny", function(){
      spyOn(airport, 'generateWeather').and.returnValue('Sunny');
      expect(airport.generateWeather()).toEqual("Sunny");
    });
  });
});
