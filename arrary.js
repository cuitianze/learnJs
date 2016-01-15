array 8 -> [1,2,3] [4,5,6] [7,8,1]
    var prizes = [1,2,3,4,5,6,7,8];
    var newPrizeLi = [];
    for (var i = 0; i < prizes.length; i+=3) {
      newPrizeLi.push(prizes.slice(i, i+3));
    };
    for(var i = 0; i < newPrizeLi.length; i++) {
      var newRow = true;
      for(let a = 0; a < (3 - newPrizeLi[i].length % 3); a++ ) {
        if(newRow && newPrizeLi[i].length < 3) {
         newPrizeLi[i].push(1);          
        }
        newRow = false;
      }      
    }
    console.log(newPrizeLi, 'newArr');
    
    
    
