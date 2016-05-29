var arr=[],solved=[],activeIndex=null,activeObj=null,countSolved=0,score=0,noOfMoves=0;
var tt,mins=0,secs=0,gameStarted=0;//gameStarted waits for the first click to start the timer
//tt sets and clears the interval for timer
for(i=0;i<15;i=i+2)
{
  arr[i]=arr[i+1]=i;
}
for(i=0;i<16;i++)
{
  solved[i]=false;
}

 //Fisher-Yates algorithm to randomly shuffle the array
function shuffle()
{
  var len=arr.length,temp,randomIndex;
  for(i=len-1;i>=0;i--)
  {
    randomIndex=Math.floor(Math.random()*i);
    temp=arr[i];
    arr[i]=arr[randomIndex];
    arr[randomIndex]=temp;
  }
}

//function to display the time taken to finish the game
function timer()
{
  secs++;
  if(secs>=60)
  {
    secs=0;
    mins++;
  }
  document.getElementById('time').textContent=((mins<10)?'0'+mins:mins)+':'+((secs<10)?'0'+secs:secs);
}

//function to check whether the two consecutive boxes have the same value
function check(i,obj)
{
  if(arr[activeIndex]==arr[i])
  {
    solved[activeIndex]=solved[i]=true;
    countSolved+=2;
    document.getElementById('score').textContent= ++score;
  }
  else {
    hide(obj,i);
    hide(activeObj,activeIndex);
  }
  activeIndex=activeObj=null;
  document.getElementById('moves').textContent= ++noOfMoves;
  if(countSolved==16)
  {
    clearInterval(tt);
    window.alert("Congratulations!!You solved it with "+noOfMoves+" moves in a time of "+document.getElementById('time').textContent);
    location.reload();
  }
}

//function to show the clicked box
function reveal(obj,i)
{
  if(!gameStarted)
  {
    gameStarted=1;
    tt=setInterval(timer,1000);
  }
  if(!solved[i] && i!=activeIndex) {
    console.log(i);
    obj.style.transform='rotateY(360deg)';
    obj.style.backgroundColor='lightgray';
    obj.style.color='black';
    obj.textContent=arr[i];
    if(activeIndex==null)
    {
        activeIndex=i;
        activeObj=obj;
    }
    else
      setTimeout(check,1500,i,obj);
  }
}

//function to hide the boxes which don't match
function hide(obj,i) {
    obj.style.transform='rotateY(0deg)';
    obj.style.backgroundColor='darkslategray';
    obj.style.color='white';
    obj.textContent='?';
}

shuffle();
