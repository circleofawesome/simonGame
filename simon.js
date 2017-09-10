console.log('hello world');

//globals here
var isItOn=false;

function powerButton(){
	//powers the game on and off
	if(isItOn){
		return isItOn=false;
	}
	else{
		return isItOn=true;
	}
}

function moveSeries(moveLength){
	var moveList=[]
	for(var i=0;i<moveLength;i++){
		moveList.push(Math.floor((Math.random() * 4) + 1));
	}
	return moveList;
}

function areTheyEqual(aiMoves,userMoves){
	//compare two arrays and return true or false if they're equal or not
}