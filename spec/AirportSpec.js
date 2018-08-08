describe("Airport", function(){
  var airport;
  var plane;
  var weather;
  

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
  });
});
