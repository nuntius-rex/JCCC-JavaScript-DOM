
var person = {
  name: ['Dan', 'Guinn'],
  age: 32,
  gender: 'male',
  interests: ['programming', 'hiking'],
  bio: function() {
    console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    console.log('Hi! I\'m ' + this.name[0] + '.');
  }
};

person.bio();
