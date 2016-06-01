var arr=[],solved=[],rotated=[];
var activeIndex=null,activeObj=null;
var countSolved=0,score=0,noOfMoves=0;
var tt,secs=60,gameStarted=0;//gameStarted waits for the first click to start the timer
//tt sets and clears the interval for timer
for(i=0;i<15;i=i+2)
{
  arr[i]=arr[i+1]=i;
}
for(i=0;i<16;i++)
{
  solved[i]=rotated[i]=false;
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
  secs--;
  document.getElementById('time').textContent='00:'+((secs<10)?'0'+secs:secs);
  if(secs==0)
  {
    clearInterval(tt);
    window.alert('Time up!! Click OK to see your score.');
    document.getElementById('score').textContent=score;
    document.getElementById('moves').textContent=noOfMoves;

  }
}

//function to check whether the two consecutive boxes have the same value
function check(i,obj,curIndex,curObj)
{
  if(arr[curIndex]==arr[i])
  {
    solved[curIndex]=solved[i]=true;
    countSolved+=2;
    ++score;
  }
  else {
    hide(obj,i);
    hide(curObj,curIndex);
  }

  ++noOfMoves;
  if(countSolved==16 && secs!=0)
  {
    clearInterval(tt);
    window.alert("Congratulations!!You solved it in "+(60-secs)+" seconds. Click OK to see your score");
    document.getElementById('score').textContent=score;
    document.getElementById('moves').textContent=noOfMoves;
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
  var curIndex,curObj;
  if(!solved[i] && i!=activeIndex) {
    console.log(i);
    obj.style.backgroundColor='lightgray';
    obj.style.color='black';
    obj.textContent=arr[i];
    if(activeIndex==null)
    {
        activeIndex=i;
        activeObj=obj;
    }
    else {
      curIndex=activeIndex;
      curObj=activeObj;
      activeIndex=activeObj=null;
      setTimeout(check,1500,i,obj,curIndex,curObj);
    }
  }
}

//function to hide the boxes which don't match
function hide(obj,i) {
    if(!rotated[i])
      obj.style.transform='rotateY(360deg)';
    else
      obj.style.transform='rotateY(0deg)';
    obj.style.backgroundColor='darkslategray';
    obj.style.color='white';
    obj.textContent='?';
    rotated[i]=!rotated[i];
}

shuffle();
