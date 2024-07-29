async function settimer()
{
  let h="",m="",s="";
  h="01";
  m="02";s="10";

 
   let x=parseInt(h,10),y=parseInt(m,10),z=parseInt(s,10);
   function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    while (x>=0)
    {
        while (y>=0)
        {
            while (z>=0)
            {await sleep(1000);
             
             console.log(x+ "heures " +  y+ "minutes : "+ z + "secondes : " );
             
             z--;
            }
        z=59;
        y--;
            }
        x--;
        y=59;
    
    }

  }
 

settimer();