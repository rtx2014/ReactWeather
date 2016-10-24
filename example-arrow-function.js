var names = ['Vladimir', 'Margarita', 'Kirill'];

// names.forEach(function (name) {
//   console.log(name);
// });

//names.forEach(name => console.log(name));

// var returnMe = name => name + '!';
//
// console.log(returnMe('Vladimir'));

var person = {
  name: 'Vladimir',
  greet: function () {
    names.forEach(name => console.log(this.name + ' приветствует ' + name))
  }
};

person.greet();
