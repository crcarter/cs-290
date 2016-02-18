function deepEqual(obj1, obj2) {
  // Verify that both are objects and not null.
  if(typeof obj1 != "object" || obj1 == null || typeof obj2 != "object" || obj2 == null) {
    return obj1 === obj2;
  };
  
  // Get the number of properties in both objects to verify they have the same number.
  var numInObj1 = 0;
  var numInObj2 = 0;
  for(var prob in obj1) {
    numInObj1++;
  };
  for(var prob in obj2) {
    numInObj2++;
  };
  if(numInObj1 != numInObj2){
    return false;
  };
  
  // Verify that each property and value is the same.
  for(var prop in obj1) {
    if(!deepEqual(obj1[prop], obj2[prop])){
      return false;
    };
  };
  
  // If everything checked out return true.
  return true;
};