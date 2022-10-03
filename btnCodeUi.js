var savedCode = {
	"JS": {
		"Function": "function changeMe1(){}",
		"Variable": "var changeMe1;",
		"Constant": "const changeMe1;",
		"IfElse": "if(){} else {}"
	}
	
}

function pageLoad(){
	console.groupCollapsed("page load");
	
	
	/*btnJSFunc.addEventListener("click", function(){ makeCode('Function')});
	btnJSVar.addEventListener("click", function(){ makeCode('Variable')});
	btnJSConst.addEventListener("click", function(){ makeCode('Constant')});
	btnJSIfElse.addEventListener("click", function(){ makeCode('IfElse')});*/
	
	addLangBtns("JS");
	
	console.groupEnd();
}

function addLangBtns(lang){
	console.group("addLangBtns:" + lang);
	//get the buttons for lang - Note that without wrapping in Object.keys you get the value of each key instead
	var langBtns = Object.keys(savedCode[lang]);
	
	
	//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
	addButtons("makeCode", lang, langBtns, "btn" + lang, "", document.getElementById("philsJSBtnsInner"));
	console.groupEnd();
}

function addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv){
    console.group("addButtons");
	//Logging the arguments TODO: remove this debug code
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
	console.group("makeCode: " + key);
	//get the button that was clicked
	var btnClicked = event.target || event.srcElement;
	//get the lang from the class
	console.log(btnClicked.className);
	//get the text
	console.log(savedCode[btnClicked.className][key]);
	
	//insertTextAtCursor(el, text)
	insertTextAtCursor(codeTA, savedCode[btnClicked.className][key]);
	
	console.groupEnd();
}


/*I had no idea how to find the cursor so searched online and got this entire function that was doing what I wanted to do ultimately:
https://stackoverflow.com/questions/7404366/how-do-i-insert-some-text-where-the-cursor-is

Notes:
Seems that this solution has to account for browser differences - this is what the top level if test is about

Stuff I did not recognise:
ownerDocument: https://www.w3schools.com/jsref/prop_node_ownerdocument.asp
selectionStart

*/
function insertTextAtCursor(el, text) {
    var val = el.value, endIndex, range, doc = el.ownerDocument;
    if (typeof el.selectionStart == "number"
            && typeof el.selectionEnd == "number") {
		//Not IE
        endIndex = el.selectionEnd;
        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length;
    } else if (doc.selection != "undefined" && doc.selection.createRange) {
		//IE
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
}


function someFunction(){

}
function someFunction(){

}