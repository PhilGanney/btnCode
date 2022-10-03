var savedCode = {
	"JS": {
		"function": "function changeMe1(){}",
		"variable": "var changeMe1;",
		"constant": "const changeMe1;",
		"ifElse": "if(){} else {}"
	}
	
}

function pageLoad(){
	console.groupCollapsed("page load");
	btnJSFunc.addEventListener("click", function(){ makeCode('function')});
	btnJSVar.addEventListener("click", function(){ makeCode('variable')});
	btnJSConst.addEventListener("click", function(){ makeCode('constant')});
	btnJSIfElse.addEventListener("click", function(){ makeCode('ifElse')});
	
	
	
	console.groupEnd();
}


function makeCode(key){
	console.groupCollapsed("makeCode: " + key);
	
	
	
	
	console.groupEnd();
}
function someFunction(){

}
function someFunction(){

}