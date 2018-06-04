//Set the array of arbitrarily nested arrays to startArray
//The flattened array is stored in endArray after flatten(startArray) is executed

const originalArray = [[1,2,[3,4,5]],6,7,8];
const flattenedArray = new Array();



function flatten(input, output)
{
	for(var i = 0; i < input.length; i++)
	{
		if(typeof(input[i]) === "object")
		{
			flatten(input[i]);
		}
		else
		{
			flattenedArray.push(input[i]);
		}
	}
}

function flatten(arrIn) {
  arrIn.forEach(
    (arrIn, index) => typeOf (input[index] === "object") ? flatten(input[index]) : flattenedArray.push(input[index])
  )
}


let flatten = function(arrIn) {
  arrIn.forEach(function(index) {
    if(typeOf arrIn[index] === "object") {
      flatten(arrIn[index])
    }else {
      flattenedArray.push(arrIn[index])
    }
  })
}



flatten(originalArray);

console.log('OriginalArray:  ' + originalArray);
console.log('FlattenedArray: ' + flattenedArray);
