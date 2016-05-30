window.onresize = function () {
  document.getElementById('coverpage').style.height='100vh';
  document.getElementById('coverpage').style.width='100vw';
}
//for the i love html animation
var i=0,j=0,jinc=1;
var arr=[['|','C|'],['C|','C+|','C++|'],['|','H|','HT|','HTM|','HTML|'],['|','C|','CS|','CSS|'],['|','J|','Ja|','Jav|','Java|','Javas|','Javasc|','Javascr|','Javascri|','Javascrip|','Javascript|'],['|','P|','Py|','Pyt|','Pyth|','Pytho|','Python|'],['|','A|','Al|','Alg|','Algo|','Algor|','Algori|','Algorit|','Algorith|','Algorithm|','Algorithms|']];
function fun()
{
  document.getElementById('nm').innerHTML=arr[i][j];
  if(j== (arr[i].length)-1)
      jinc=-1;
  j=j+jinc;
  if(j==-1)
  {
    i++;
    j=0;
    jinc=1;
  }
  if(i==7)
        i=j=0;
}
var t=setInterval(fun,200);
document.getElementById('nm').innerHTML=arr[i][j];

//side navigation bar
function opennav()
{
    if(window.screen.width>480)           //for mobile compatibility
       document.getElementById("mySideNav").style.width="20%";
    else
       document.getElementById("mySideNav").style.width="40%";

    document.body.style.backgroundColor="rgba(0,0,0,0.4)";
}
function closenav()
{
    document.getElementById("mySideNav").style.width="0";
    document.body.style.backgroundColor="white";
}
