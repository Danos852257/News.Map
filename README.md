# News.Map

IMPORTANT (in case you want to run the code): There is a hidden file called keys.java that wasn't uploaded, as you can see in gitignore. It contains the api keys.

keys.js:

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


If you want to run the code yourself, you'll need to:
1. Copy what is above into a javascript file called keys.js
2. Make an account in World News API and put your api key in the array.
3. You may need to download leaflet but it is included in the folder so you probably will not need it.