describe("Airport", function(){
  var airport;
  var plane;


  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe("Capacity", function(){
    it("lets you change the capacity", function() {
      airport.changeCapacity(4);
      expect(airport.viewCapacity()).toEqual(4);
    });
  });

  describe("landing a plane", function() {
    it("adds a plane to the hangar", function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
    it("doesnt allow landing if weather is stormy", function() {
      spyOn(airport, 'generateWeather').and.returnValue('Stormy');
      expect( function() {airport.land(plane);}).toThrowError("Weather conditions are unsatisfactory for landing");
    });
    it("doesnt allow landing if capacity is reached", function() {
      spyOn(airport, 'generateWeather').and.returnValue('Sunny');
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      expect( function() {airport.land(plane);}).toThrowError("Airport capacity reached, can not land plane");
    });
  });

  describe("takeoff", function() {
    it("will allow a plane depart from the airport", function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar).not.toContain(plane);
    });

    it('throws an error if plane has not landed', function(){
      expect( function() {airport.takeoff(plane);}).toThrowError("Plane is not in airport");
    });

    it('will NOT allow a plane take off if weather is stormy', function(){
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
