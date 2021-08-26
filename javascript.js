var translatebtn= document.querySelector("#btn");
var txtInput=document.querySelector("#text-input");
var outputtxt=document.querySelector(".output");
var url="https://api.funtranslations.com/translate/chef.json";
// var url="https://api.funtranslations.com/translate/mandalorian.json";
 function translatedtxt(text){

     return url +"?"+"text="+text
 }

 function clickhandler()
 {
     //  console.log(txtInput.value);
     // outputtxt.innerText="translated"+txtInput.value;
     var inputtxt =txtInput.value;
     fetch(translatedtxt(inputtxt))
     .then(response => response.json())
     .then(json =>{
         var translatedoutput=json.contents.translated;
         outputtxt.innerText=translatedoutput;
        console.log(json.contents.translated)
        } )
        
        
    };
    translatebtn.addEventListener( "click" , clickhandler)
