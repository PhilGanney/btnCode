var savedCode = {
	"JS": {
		"Function": "function changeMe1(){}",
		"Variable": "var changeMe1;",
		"Constant": "const changeMe1;",
		"IfElse": "if(){} else {}"
	}
	
}

function pageLoad(){
	console.group("page load");
	
	
	/*btnJSFunc.addEventListener("click", function(){ makeCode('Function')});
	btnJSVar.addEventListener("click", function(){ makeCode('Variable')});
	btnJSConst.addEventListener("click", function(){ makeCode('Constant')});
	btnJSIfElse.addEventListener("click", function(){ makeCode('IfElse')});*/
	
	addLangBtns("JS");
	
	console.groupEnd();
}

function addLangBtns(lang){
	console.group("addLangBtns:" + lang);
	//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
	addButtons("makeCode", "JS", ["Function", "Variable", "SomeButton"], "btn" + "JS", "", document.getElementById("philsJSBtnsInner"));
	console.groupEnd();
}

function addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv){
    console.group("addButtons");
	//Logging the arguments
	console.group("arguments");
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
	console.groupEnd();
	/*Yoinked from TeaRounder, with added idPrefix param. Note that it maybe is not the best code for doing this, but it does work. Todo: see if you can improve this to use proper eventlistener syntax, and if that actually makes things better

	To make:
		<button onclick="presetAddDrink('Hot Chocolate')">Hot Chocolate</button>
		inside an element called "categoriesContainer"
	   Pass in:
		("presetAddDrink", ["Hot Chocolate"],document.getElementById("categoriesContainer"))  
	*/  
    /*
	Creating id's based on similar concept to the one used in adding drinks to the list
	var attemptDrinkID = escape(attemptDrink);
	*/
	
	
    var indexes;
    for (indexes in buttonTextArray){
        containerDiv.innerHTML += "<button id=\"" + idPrefix + escape(buttonTextArray[indexes]) + idSuffix +"\" class=\"" + buttonClass + "\" onclick=\"" + clickEventName+ "('" + escape(buttonTextArray[indexes]) + idSuffix + "')\">" + buttonTextArray[indexes] + "</button>"
    }
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