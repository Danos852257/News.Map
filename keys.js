//List of API keys for World News API
const api_keys = [
    'f605a18aa94646b687a4ed092a860a2e',
    '8c344a986ee942a8881fabfe37536b90',
    'd22f28d029df4591ae577d903f230d68',
    '3179f11327a3484587ae2f04cac86c10',
    'e486c4e21d7741579ae4e7237b312194',
    '45d3732621c140c79198792de23c5a08',
    'fa02617e6d9b4863b97e03fdda2bcd99',
    '74a8859f3b204d8bbf7a6f5fd5a3b4dd',
    '084a8025b6e64b1e8c907e48bcf0a2c5',
    '861c6d5e6f9a46fcb7b39875a8dfdd62'
  ];

//Index for which API key you are using
let num=3;
//Changes the index (implemented when the current key runs out of tokens)
function changeNum(){
  if(num>=api_keys.length-1){
    num = 0;
  }
  else{
    num = num+1;
  }
}