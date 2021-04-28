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