var elems = document.getElementsByTagName('*');

function getUniqueTags(arr) {
  
  var newArr = [],  
      copyArr = [].slice.call(arr);
  
  copyArr.map(function(item){
    
    if(newArr.indexOf(item.tagName) === -1 ) {
      newArr.push(item.tagName);
    }
  });
  
  return newArr;
}

console.log(getUniqueTags(elems));
