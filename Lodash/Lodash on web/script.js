// alert(_.now());

var dinosaurs = ['Tyrannosaurus', 'Stegosaurus', 'Allosaurus', 'Velociraptor'];
console.log(dinosaurs[1]);
console.log(_.indexOf(dinosaurs, 'Stegosaurus'));

var new_dinos = ['Tyrannosaurus', 'Stegosaurus', 'Hadrosaur'];
var new_pens = ['Pen 1', 'Pen 2', 'Pen 3'];
console.log(_.zip(new_dinos, new_pens));

var dinosaur = 'Tyrannosaurus';
var admission_fee = 44.99;
// confirm if it is a number
console.log(_.isNumber(admission_fee));
// Confirm if it is an array
console.log(_.isArray(['Tyrannosaurus', 'Hadrosaur']));
// To confirm if it is a string
console.log(_.isString(dinosaur));

