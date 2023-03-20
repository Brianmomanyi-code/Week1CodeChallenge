//Challenge 2:Speed Detector (Toy Problem)
// Define the speed limit and the demerit point increment
const speedLimit = 70;
const increment = 5;

//Define the car's speed as a constant
const speed = 80;

// Calculate the number of demerit points
let demeritPoints = 0;
if (carSpeed <= speedLimit) {
  console.log("Ok");
} else {
  demeritPoints = Math.floor((carSpeed - speedLimit) / increment);
  console.log(`Points: ${demeritPoints}`);

  // Check if the driver's license should be suspended
  if (demeritPoints >= 12) {
    console.log("License suspended");
  }
}