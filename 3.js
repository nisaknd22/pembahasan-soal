function divideAndSort(arraydivide){
	var digits = (""+arraydivide).split("0");
  	var result = "";
    digits.forEach(function(digit,index)
    {
        var a = (""+digit).split("");
        var sorted = false;
        while(!sorted){
          sorted = true;
          for (i = 0 ; i<a.length-1; i++)
          {
            if(a[i]>a[i+1]){
              temp = a[i+1];
              a[i+1] = a[i];
              a[i]=temp;

              sorted=false;
            }
          }      
        }
      	var b = "";
        a.forEach(function(num,index){ b += num});
      	result += b;	
    }
    );
  		return result;
}

console.log(divideAndSort(5956560159466056));