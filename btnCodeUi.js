var savedCode = {
	"JS": {
		"Function": "function changeMe1(){\r\n	\r\n}",
		"Variable": "var changeMe1;",
		"Constant": "const changeMe1;",
		"IfElse": "if(){\r\n	\r\n} else {\r\n	\r\n}"
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


/*I had no idea how to find the cursor so searched online and got an entire function for inserting text at a cursor, it didnt account for code whitespace conventions though:
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
		//Not IE (everything else)
        
		endIndex = el.selectionEnd;
		
		//we need to separate off all the text before the cursor for two things: 1) so that we can search just that bit for the last new line 2)later on when we merge the new text into the old text at the cursor
		var beforeCursor = val.slice(0, endIndex);
		console.log(beforeCursor);
		
		//findout what the last character was
		var lastChar = val.slice(endIndex - 1, endIndex);
		console.log("Last Char:" + lastChar);
		
		//Work on better indentation 
		//1) find the last newline DOESNT WORK!
		/*const searchTerm = '\r\n';
		console.log(`The index of the first "${searchTerm}" from the end is ${val.lastIndexOf(searchTerm)}`);*/
		
		//DEBUGGING - This MDN code works, even now I adapted it to finding new line
		const paragraph = 'The quick brown fox jumps over the lazy dog.\r\nIf The dog barked, was it really lazy?';

		const searchTerm = '\r\n';
		const searchTerm2 = '\n';

		console.log(`The index of the first "${searchTerm}" from the end of the MDN paragraph is ${paragraph.lastIndexOf(searchTerm)}`);
		console.log(`The index of the first "${searchTerm2}" from the end of beforeCursor is ${beforeCursor.lastIndexOf(searchTerm2)}`);
		

		
		//currently working, but flawed indentation code. Todo: better approach would be to find the last newline (\r\n) and count the tabs after. I tried for about 30 mins to get that to work but I got into a huge tangle and the best course at that point was to discard my changes and start the process in little steps
		var precedingTabs = 0;
		var indexToCheck = endIndex - 1;
		var tabString = "";
		while(val.slice(indexToCheck, indexToCheck + 1) == "	"){//tab
			console.log("tab found");
			precedingTabs++;
			tabString += "	";
			indexToCheck--;
			
		}
		console.log("tabs found:" + precedingTabs);
		
		//add tabs into the text we are about to insert
		text = text.replaceAll("\r\n", "\r\n" + tabString);
		
        el.value = beforeCursor + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length;
    } else if (doc.selection != "undefined" && doc.selection.createRange) {
		//VERY BASIC SUPPORT FOR IE - (edge uses the top part anyway. There is little point supporting IE for this project beyond that)
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
}


function copyText(){
	console.group("copyText");
	console.log(codeTA.value);
	
	navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
		console.log(result);
		console.log(result.state);
	});
	
	/*navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
		//in the case of the permissions API the main thing in result is result.state which can have the value "granted", "prompt" or "denied" depending on if the user has already granted permission, denied it or has not been asked. more info at https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API
		if (result.state === 'granted') {
			navigator.clipboard.writeText(codeTA.value);
		} else if (result.state === 'prompt') {
			conf
		} else if (result.state === 'denied') {
			
		}
	}*/
	
	

	console.groupEnd();
}
function someFunction(){

}

function changeMe1(){
	var philsVar;
}

