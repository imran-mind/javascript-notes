

// --------------------map function polyfills--------------------

Array.prototype.eachAlbum = function(callback) {
    // callback here is the callback function
    // which actual .forEach() function accepts
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this) // currentValue, index, array
    }
}
logicAlbums.eachAlbum(function(word) {
console.log(word)
})

// --------------------map function polyfills--------------------
var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
  ]

Array.prototype.ourMap = function(callback) {
    var arr = [] // since, we need to return an array
    for (var i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
    }
    return arr // finally returning the array
  }
  const mapThoseAlbums = logicAlbums.ourMap(function(album) {
    return album;
  })



// --------------------filter function polyfills--------------------
Array.prototype.filterAlbums = function(callback, context) {
    const arr = []
    for (var i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i])
      }
    }
    return arr
  }
  logicAlbums.filterAlbums(function(album) {
    return album.rating > 4.9 // providing the context here
  })
  console.log(logicAlbums)
  
  var logicAlbums= [
    { name: 'Bobby Tarantino', rating: 5 },
    { name: 'The Incredible True Story', rating: 4.5 },
    { name: 'Supermarket', rating: 4.9 },
    { name: 'Under Pressure', rating: 5 }
  ];

// --------------------reduce function polyfills--------------------
Array.prototype.myReduce=function(){
    const callback = arguments[0];
    let currentVal = arguments[1];
    for(let i=0; i<this.length; i++){
      let result = callback(currentVal,this[i],i,this);
      currentVal = result;
    }
    return currentVal;
}

var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
  ]
var withReduce = logicAlbums.myReduc(function(a, b) {
    return a + ' , ' + b
}, 'Young Sinatra')



// --------------------unique function polyfills--------------------

Array.prototype.unique = function () {
  var exist = {};
  for (var i = 0; i < this.length; i++) {
      if (exist[this[i]]) {
          this.splice(i, 1);
          i -= 1;
      } else {
          exist[this[i]] = true;
      }
  }
  return this;
};

/* 
var arr = [1,2,4,4,5,5]
    arr.unique()
    [1, 2, 4, 5]
*/