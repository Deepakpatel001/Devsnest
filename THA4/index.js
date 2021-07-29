//qus1:- Write a JavaScript function to check whether an `input` is an array or not
    // Test Data :
    // console.log(is_array('w3resource'));
    // console.log(is_array([1, 2, 4, 0]));
    // false
    // True

    // Solution:-
    function is_array(a){
        return Array.isArray(a);
     }
     
     var arr1 = 'w3resource';
     console.log(is_array(arr1));
 
     // qus2:- Write a JavaScript function to clone an array
     //         Test Data :
     //         console.log(array_Clone([1, 2, 4, 0]));
     //         console.log(array_Clone([1, 2, [4, 0]]));
     //         [1, 2, 4, 0]
     //         [1, 2, [4, 0]]
 
     // solution:-
     function array_Clone(arr){
         
         return arr; 
     }
     console.log(array_Clone([1, 2, 4, 0]));
     console.log(array_Clone([1, 2, [4, 0]]));
 
     // que3:- Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
     //     Test Data :
     //     console.log(first([7, 9, 0, -2]));
     //     console.log(first([],3));
     //     console.log(first([7, 9, 0, -2],3));
     //     console.log(first([7, 9, 0, -2],6));
     //     console.log(first([7, 9, 0, -2],-3));
     //     Expected Output :
     //     7
     //     []
     //     [7, 9, 0]
     //     [7, 9, 0, -2]
     //     []
     // function first(arr,x=0){
     //     if(x == 0){
     //         return arr[0];
     //     }
     //     else if(n < 0){
     //         return[];
     //     }
         
     // }
     // console.log(first([7, 9, 0, -2]));
     // console.log(first([],3));
     // console.log(first([7, 9, 0, -2],3));
     // console.log(first([7, 9, 0, -2],6));
     // console.log(first([7, 9, 0, -2],-3));
 
 
 
 //     Write a simple JavaScript program to join all elements of the following array into a string.
 // Sample array : myColor = ["Red", "Green", "White", "Black"];
 // Expected Output :
 // "Red,Green,White,Black"
 // "Red,Green,White,Black"
 // "Red+Green+White+Black"
 let myColor = ["Red", "Green", "White", "Black"];
 
 console.log(myColor.join());
 console.log(myColor.join('+'));
 
 
 
 //  Write a JavaScript program to find the most frequent item of an array
 // Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 // Sample Output : a ( 5 times )
 
 var arr3 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
 arr3.sort();
 var max= 1;
 var count = 0;
 var item;
 for (var i = 0; i < arr3.length; i++) {
   for (var j = i; j < arr3.length; j++) {
     if (arr3[i] == arr3[j]) count++;
     if (max < count) {
       max = count;
       item = arr3[i];
     }
   }
   count = 0;
 }
 console.log(item + " ( " + max + " times ) ");
 
 