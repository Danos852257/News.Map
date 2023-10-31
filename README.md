# News.Map

IMPORTANT: There is a hidden file that wasn't uploaded, as you can see in gitignore. It contains the api keys.

This is what is contains in case you want to implement the code yourself for some reason:

const api_keys = [
    /*The api keys needed that I got from World News Api*/
  ];

let num=0; //which index of the array you are using
function changeNum(){ //change the index if it stops working
  if(num>=api_keys.length-1){
    num = 0;
  }
  else{
    num = num+1;
  }
}