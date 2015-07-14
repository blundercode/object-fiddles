//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "Erik",
  age: "19",  
}
alert.me;


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {
    band: "Flume",
    food:"Cheese",
    person: "George Washington",
    book: "The Dip",
    movie: "Mad Max",
    holiday: "Halloween"
  };


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings["brand"] = "Fossil";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

 favoriteThings["food"] = "lettuce";
 favoriteThings["book"] = "50 shades of grey";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack = {};
  var item = 'firstPocket';
  backPack[item] = 'chapstick';

//After you do the above, alert your entire backPack object.

  alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  var me = {
    name: 'Erik',
    age: '19',
    height: 6.0,
    gender: 'male',
    married: 'no',
    eyeColor: 'blue',
    hairColor: 'brown',
  };

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  for (var prop in me) {
    for (var prop in me) {
  console.log( prop + " = " + me[prop]);
}
  }




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here

//Now, loop through your album object alerting every song title individually.

var album = {
  insane: 415,
  sleepless: 315,
  flume: 128,
  taku: 715,
};

for (var prop in album) {
  console.log(prop);
}




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  var states = {
    utah: 30000,
    idaho: 40000,
    colorado: 1000,
    wyoming: 15000,
    maine: 50000,
  };

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  for (var prop in states) {
      if (states[prop] > 30000) {
        console.log(prop)
    }
}




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

 for (var prop in user) {
      if (!user[prop]) {
        delete user[prop];
    }
}
 

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.


user['name'] = "Erik";
user['username'] = "erik.mcland";
user['birthday'] = "august";


//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            console.log('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  user['name'] = 'Tyle S. McGinnis';
  user['email'] = 'tylermcginnis33@gmail.com';

//Now call the sayName method that's on the user object which will alert the users email

 user.sayName();



//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection['alertHello'] = function() {
      alert('hello');
  };
  methodCollection['logHello'] = function() {
    console.log('hello')
  };

//Now call your alertHello and logHello methods.

  methodCollection.alertHello();
  methodCollection.logHello();


//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  var makePerson = function (name, birthday, ssn) {
    var obj = {};
      obj['name1'] = name;
      obj['birthday2'] = birthday;
      obj['ssn3'] = ssn;
      return obj; 
  }
  var erik = makePerson('erik', '189', '34242');

//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

var makeCard = function (name, date, cardNum, exprDate, secutrityCode) {
  var card = {};
  card.name1 = name;
  card.date1 = date;
  card.cardNumber = cardNum;
  card.expiration = exprDate;
  card.secutrity = secutrityCode;
  return card 
}
var erikCC = makeCard('ewr', 'wrerw', 'ewrwe', 'erwr', 'ewqr')
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/
var blindCard = function (obj1, obj2) {
    var account = {
      person: obj1,
      card: obj2
    };
    return account;
  };

  blindCard(erik, erikCC);
