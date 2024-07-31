document.addEventListener('DOMContentLoaded', (event) => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            console.log('Notification permission:', permission);
        });
    }
});
function notifyMe(message) {
    if (Notification.permission === "granted") {
        new Notification(message);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(message);
            }
        });
    }
}
const heure = document.getElementById("heure");
const minute = document.getElementById("minute");
const seconde = document.getElementById("seconde");
const jour = document.getElementById("yep")
const text = document.getElementsByTagName("span");
const timer= document.getElementsByClassName("nav2")[0];
const clock = document.getElementsByClassName("nav1")[0]
var  test =true;
var test2=true;
var i=0;
setInterval(temps, 1000);
setInterval(day,10);







const  timer1=document.getElementById("s1")
const  timer2=document.getElementById("s2")
const  timer3=document.getElementById("s3")
const  start=document.getElementById("start");
const reset = document.getElementById("reset")

reset.addEventListener('click',() =>{
    test=false;reseter();
    test2=false;
    start.innerText="START";
    start.classList.remove('new');
    start.classList.remove('continue');
    start.classList.add('btn');
    
  
})
 
start.addEventListener('click',() => {
    
       if ((start.innerText=="START" || start.innerText=="CONTINUE") && !(timer1.value=="" && timer2.value=="" && timer3.value==""))
       {
        settimer();
        start.classList.remove('btn');
        start.classList.remove('continue');
        start.classList.add('new');
        start.innerText="STOP";
        

       }
      else if (start.innerText=="STOP" )
       { test2=false;
        
        if ((timer1.value=="" && timer2.value=="" && timer3.value==""))
        {
           start.innerText="START";
           start.classList.remove('new');
           start.classList.add('btn');
        
        }  
    
          else 
          {
          start.innerText="CONTINUE";
          start.classList.remove('new')
  
          start.classList.add('continue');
          }
        }
       
       
})
timer1.addEventListener('input',check)
timer2.addEventListener('input',check)
timer3.addEventListener('input',check)







const plusheure =document.getElementById("heureplus")
const moinsheure =document.getElementById("heuremoins")
const plusseconde =document.getElementById("secondeplus")
const moinsseconde=document.getElementById("secondemoins")
const plusminute =document.getElementById("minuteplus")
const mooinsminute =document.getElementById("minutemoins")

plusheure.addEventListener('click',function()
{  let valeur= parseInt(timer1.value,10);
    if (isNaN(valeur) )
    {
        valeur=1;
    }
    else 
    if (valeur < 24)
     valeur++;
 if (valeur<10)
 timer1.value="0"+valeur;
else 
 timer1.value=valeur;

     
     
})
moinsheure.addEventListener('click',function()
{  let valeur= parseInt(timer1.value,10);
    if (!isNaN(valeur) && valeur>0 )
    {valeur--;
 if (valeur<10)
 timer1.value="0"+valeur;
else 
 timer1.value=valeur;
    }
     
     
})

plusminute.addEventListener('click',function()
{  let valeur= parseInt(timer2.value,10);
    if (isNaN(valeur) )
    {
        valeur=1;
    }
    else 
    if (valeur < 60)
     valeur++;
 if (valeur<10)
 timer2.value="0"+valeur;
else 
 timer2.value=valeur;

     
     
})
mooinsminute.addEventListener('click',function()
{  let valeur= parseInt(timer2.value,10);
    if (!isNaN(valeur) && valeur>0 )
    {valeur--;
 if (valeur<10)
 timer2.value="0"+valeur;
else 
 timer2.value=valeur;
    }
     
     
})



plusseconde.addEventListener('click',function()
{  let valeur= parseInt(timer3.value,10);
    if (isNaN(valeur) )
    {
        valeur=1;
    }
    else
     if (valeur < 60) 
     valeur++;
 if (valeur<10)
 timer3.value="0"+valeur;
else 
 timer3.value=valeur;

     
     
})
moinsseconde.addEventListener('click',function()
{  let valeur= parseInt(timer3.value,10);
    if (!isNaN(valeur) && valeur>0 )
    {valeur--;
 if (valeur<10)
 timer3.value="0"+valeur;
else 
 timer3.value=valeur;
    }
     
     
})















timer.addEventListener('click',function (){
    document.getElementById('tim').scrollIntoView({
        behavior:'smooth'
    })
})
clock.addEventListener('click',function (){
    document.getElementById('here').scrollIntoView({
        behavior:'smooth'
    })
})







function temps() {
   
    text[1].style.animation = "none";
    text[2].style.animation = "none";
    text[3].style.animation = "none";

    
    void text[1].offsetWidth;
    void text[2].offsetWidth;
    void text[3].offsetWidth;

    
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

  
    heure.innerText = hours;
    minute.innerText = minutes;
    seconde.innerText = seconds;

    text[3].style.animation = "fadeInOut 1s ease-in-out";

   
    if (seconds === "00") {
        text[2].style.animation = "fadeInOut 1.5s ease-in-out";
    }

    if (minutes === "00" && seconds === "00") {
        text[1].style.animation = "fadeInOut 1.4s ease-in-out";
    }
}
function day()
{
    const date = new Date()
    const journee= date.getDate();
    const mois = date.getMonth()+1
    const annee = date.getFullYear();
    jour.innerText= journee + "/" + mois + "/" + annee


}

function reseter()
{
    timer1.value="";
    timer2.value="";
    timer3.value="";

}
function check()
{
    let valeur1 =parseInt(timer1.value,10);
    let valeur2 =parseInt(timer2.value,10);
    let valeur3 =parseInt(timer3.value,10);

    if (valeur1>=24)
    
        timer1.value="23";
    
    if (valeur2>59)
        
            timer2.value="59";
        
        if (valeur3>59)
            
                timer3.value="59";
            
    if (isNaN(valeur1))
        timer1.value="";
    if (isNaN(valeur2))
        timer2.value="";
    if (isNaN(valeur3))
        timer3.value="";
    if (valeur1<10)

        timer1.value="0"+valeur1
    
    if (valeur2<10)
        
            timer2.value="0"+valeur2
        
        if (valeur3<10)
        
                timer3.value="0"+valeur3;
            
  
}


async function settimer() {
    test = true; test2=true;

    let x = parseInt(timer1.value, 10),vide= [0,NaN],
        y = parseInt(timer2.value, 10),
        z = parseInt(timer3.value, 10);

    if (isNaN(x)) x = 0;
    if (isNaN(y)) y = 0;
    if (isNaN(z)) z = 0;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    while (x >= 0 && test && test2) {
        while (y >= 0 && test && test2) {
            while (z >= 0 && test && test2) {

               if (test==true && test2==true)
               {
                if (z < 10) timer3.value = "0" + z;
                else timer3.value = z;
                await sleep(1000);
                
               
                z--;
               }
            }
            if (test==true && test2==true)
            {
            y--;
            
            if (y >= 0) {
                if (y < 10) timer2.value = "0" + y;
                else timer2.value = y;
            }
            if  (test2)
            z = 59;
        }
        }
        if (test2)
        x--;
        if (x >= 0 && test2) {
            if (x < 10) timer1.value = "0" + x;
            else timer1.value = x;
            y = 59;
            timer2.value = y;
        }
    }
    if (vide.includes(parseInt(timer1.value,10)) && vide.includes(parseInt(timer2.value,10)) && vide.includes(parseInt(timer3.value,10)) )
        {
           start.innerText="START";
           start.classList.remove('new');
           start.classList.add('btn');
           notifyMe("Countdown has ended!");
           
           
        
        } 
    

}
const vide = [0,NaN]

