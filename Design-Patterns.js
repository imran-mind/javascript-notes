The Constructor Pattern
In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object once memory has been allocated for it. In JavaScript, as almost everything is an object, we're most often interested in object constructors.

Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.

Object Creation

The three common ways to create new objects in JavaScript are as follows:

// Each of the following options will create a new empty object:
 
var newObject = {};
 
// or
var newObject = Object.create( Object.prototype );
 
// or
var newObject = new Object();



Where the "Object" constructor in the final example creates an object wrapper for a specific value, or where no value is passed, it will create an empty object and return it.

There are then four ways in which keys and values can then be assigned to an object:


// ECMAScript 3 compatible approaches
 
// 1. Dot syntax
 
// Set properties
newObject.someKey = "Hello World";
 
// Get properties
var value = newObject.someKey;
 
 
 
// 2. Square bracket syntax
 
// Set properties
newObject["someKey"] = "Hello World";
 
// Get properties
var value = newObject["someKey"];
 
 
 
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 
// Set properties
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
 
// If the above feels a little difficult to read, a short-hand could
// be written as follows:
 
var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};
 
// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );
 
// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
 
console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
 
 
// 4. Object.defineProperties
 
// Set properties
Object.defineProperties( newObject, {
 
  "someKey": {
    value: "Hello World",
    writable: true
  },
 
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
 
});
 
// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.

--------------------------------------------------------------------------------------

=> BASIC CONSTRUCTOR 
==================================
  
  function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
 
// Usage:
 
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic.toString() );
console.log( mondeo.toString() );

The above is a simple version of the constructor pattern but it does suffer from some problems. 
One is that it makes inheritance difficult and the other is that functions such as toString() are redefined for each of the new objects created using the Car constructor.
This isn't very optimal as the function should ideally be shared between all of the instances of the Car type.



Constructors With Prototypes
================================
  Functions, like almost all objects in JavaScript, contain a "prototype" object. When we call a JavaScript constructor to create an object,
    all the properties of the constructor's prototype are then made available to the new object. In this fashion, multiple Car objects can be
    created which access the same prototype. We can thus extend the original example as follows
  function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}
 
 
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );



---------------------------------------------------------------------
  
  Module Pattern -> by using this pattern we can add privacy for module properties and methods
  like below basket array outside directly we can't access we can access using that module only

  ========================
    
    var basketModule = (function () {
 
  // privates
 
  var basket = [];
 
  function doSomethingPrivate() {
    //...
  }
 
  function doSomethingElsePrivate() {
    //...
  }
 
  // Return an object exposed to the public
  return {
 
    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },
 
    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },
 
    // Public alias to a private function
    doSomething: doSomethingPrivate,
 
    // Get the total value of items in the basket
    getTotal: function () {
 
      var q = this.getItemCount(),
          p = 0;
 
      while (q--) {
        p += basket[q].price;
      }
 
      return p;
    }
  };
})();



---
// basketModule returns an object with a public API we can use
 
basketModule.addItem({
  item: "bread",
  price: 0.5
});
 
basketModule.addItem({
  item: "butter",
  price: 0.3
});
 
// Outputs: 2
console.log( basketModule.getItemCount() );
 
// Outputs: 0.8
console.log( basketModule.getTotal() );
 
// However, the following will not work:
 
// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log( basketModule.basket );
 
// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
console.log( basket );


-----------------------------------------------------------------------------------------
 
 Singleton Pattern =>
 =======================
  The Singleton pattern is thus known because it restricts instantiation of a class to a single object. Classically,
   the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist.
In the event of an instance already existing, it simply returns a reference to that object.

Singletons differ from static classes (or objects) as we can delay their initialization, generally because they require some information that may not be
available during initialization time. They don't provide a way for code that is unaware of a previous reference to them to easily retrieve them.
This is because it is neither the object or "class" that's returned by a Singleton, it's a structure. Think of how closured variables aren't actually closures
 - the function scope that provides the closure is the closure.

In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of 
access for functions.

We can implement a Singleton as follows:

var mySingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }
 
    var privateVariable = "Im also private";
 
    var privateRandomNumber = Math.random();
 
    return {
 
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
 
      publicProperty: "I am also public",
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();
 
var myBadSingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    var privateRandomNumber = Math.random();
 
    return {
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
 
    // Always create a new Singleton instance
    getInstance: function () {
 
      instance = init();
 
      return instance;
    }
 
  };
 
})();
 
 
// Usage:
 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
 
var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); // true
 
// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.


-------------------------------------------------------------------------------------------------
 
 The Prototype Pattern
 ======================
  We can think of the prototype pattern as being based on prototypal inheritance where we create objects which act as prototypes for other objects.
  The prototype object itself is effectively used as a blueprint for each object the constructor creates.
  If the prototype of the constructor function used contains a property called name for example (as per the code sample lower down),
   then each object created by that same constructor will also have this same property.
   
   var myCar = {
 
  name: "Ford Escort",
 
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
 
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
 
};
 
// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );
 
// Now we can see that one is a prototype of the other
console.log( yourCar.name );

----
Object.create also allows us to easily implement advanced concepts such as differential inheritance where objects are able to directly inherit from other objects.
We saw earlier that Object.create allows us to initialise object properties using the second supplied argument. For example:


var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};
 
var car = Object.create(vehicle, {
 
  "id": {
    value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true
  },
 
  "model": {
    value: "Ford",
    enumerable: true
  }
 
});


--------------------------------------------------------------------------------


=> FACAD DESIGN PATTERN =>
==============================
 The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. 
 It is a simple pattern that may seem trivial but it is powerful and extremely useful.
 It is often present in systems that are built around a multi-layer architecture.

The intent of the Façade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.

var Mortgage = function(name) {
    this.name = name;
}
 
Mortgage.prototype = {
 
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
}
 
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
 
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
 
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
 
function run() {
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");
 
    alert(result);
}


--------------------------------------------------------------------------------------------------------------


