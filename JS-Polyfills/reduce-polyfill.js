

// --------------------reduce function polyfills--------------------
Array.prototype.myReduce=function(){
    const callback = arguments[0];
    let currentVal = arguments[1];
    for(let i=0; i<this.length; i++){
      let result = callback(currentVal, this[i], i ,this);
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

