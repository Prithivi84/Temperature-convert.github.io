let l,v,s;

if(document.querySelector('#type').value=='Celsius'){
    
    document.getElementById("type1").style.display= 'block';
    l=1;
   }

function Change()
{
if(document.querySelector('#type').value=='Celsius'){
    
    document.getElementById("type1").style.display= 'block';
    document.getElementById("type2").style.display= 'none';
    document.getElementById("type3").style.display= 'none';
    l=1;
    
   }
else if(document.querySelector('#type').value=='Fahrenheit'){
    
    document.getElementById("type2").style.display= 'block';
    document.getElementById("type1").style.display= 'none';
    document.getElementById("type3").style.display= 'none';
    l=2;
   }
else if(document.querySelector('#type').value=='Kelvin'){
    
    document.getElementById("type3").style.display= 'block';
    document.getElementById("type2").style.display= 'none';
    document.getElementById("type1").style.display= 'none';
    l=3;
   }


console.log(document.querySelector('#type').value);}
function Convert()
{
    let c,r;
    c=document.querySelector('#cent').value;
    if(l==1){

        if(document.querySelector('#type1').value=='Fahrenheit'){
        
         r=(c*9/5)+32;
         v="°F";
        }
        else if(document.querySelector('#type1').value=='Kelvin'){
            r=(c*1)+273.15;
            v="K";
        }
    }
    else if(l==2){

        if(document.querySelector('#type2').value=='Celsius'){
        
         r=((c*1)-32)*5/9;
         v="°C";
        }
        else{
            r=(((c*1)-32)*5/9)+273.15;
            v="K"
        }
    }
    else {

        if(document.querySelector('#type3').value=='Celsius'){
        
         r=(c*1)-273.15;
         v="°C";
        }
        else{
            r=((c*1)-273.15)*9/5+32;
            v="°F";
        }
    }
    console.log(c);
// let f=(0°C × 9/5) + 32 = 32°F 5/9(°F – 32)

    
        console.log(v);
        console.log(document.querySelector('#result').value);
s=r+v;
console.log(s);
document.querySelector('#result').value=s;
r=0;
}
