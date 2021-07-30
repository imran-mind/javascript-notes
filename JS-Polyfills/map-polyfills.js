
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
