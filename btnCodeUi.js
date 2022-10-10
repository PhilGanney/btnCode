var savedCode = {
	"JS": {
		"Function": "function changeMe1(){\r\n	\r\n}",
		"Variable": "var someVar = 0;",
		"Let": "let blahblah = 0;",
		"Constant": "const changeMe1;",
		"IfElse": "if(){\r\n	\r\n} else {\r\n	\r\n}",
		"SwitchCase": "switch(expression) {\r\n	case x:\r\n    	\r\n 		break;\r\n	case y:\r\n		\r\n    	break;\r\n	default:\r\n	\r\n}",
		"For": "for (let i = 0; i < someAmount; i++) {\r\n	\r\n}",
		"ForKeyInObject": "for (keyName in objectName) {\r\n	\r\n}",
		"Break": "break;",
		"ConsoleGroup": "console.group(\"\");\r\nconsole.groupEnd();",
		"ConsoleLog":"console.log();"
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
		//1) find the last newline - textarea value has newlines as \n not \r\n
		const searchTerm = '\n';
		console.log(`The index of the first "${searchTerm}" from the end is ${beforeCursor.lastIndexOf(searchTerm)}`);
		var lastNewLinePos = beforeCursor.lastIndexOf(searchTerm);

		

		
		//2)count the tabs after. 
		var tabsFromNewLine = 0;
		//initial value of indexToCheck is 1 more than the lastNewLinePos - when coding I thought it would be 2 more since lastNewLinePos would indicate the \ so this would need to count over the n, but after a bit of debugging I found this was not the case
		var indexToCheck = lastNewLinePos +1;
		var tabString = "";
		
		/* Some console log lines that I used to help sus out 
		console.log(val.charAt(indexToCheck));
		console.log(val.charAt(indexToCheck-1));
		console.log(val.charAt(indexToCheck+1));*/
		
		//val.charAt... means we check for indentation on that line even after the cursor, giving subtly different behaviour to if we used beforeCursor.charAt
		while(val.charAt(indexToCheck) == "	"){//tab
			console.log("tab found");
			tabsFromNewLine++;
			tabString += "	";
			indexToCheck++;
		}
		console.log("tabs found:" + tabsFromNewLine);
		
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

