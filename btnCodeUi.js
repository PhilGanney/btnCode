var savedCode = {
	"General": {
		"Tab": "	",
		"NewLine": "\r\n"
	},
	"HTML": {
		"BoilerPlateBasic": "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<title>Page Title</title>\r\n	</head>\r\n	<body>\r\n		<h1>Heading</h1>\r\n		\r\n	</body>\r\n</html>",
		"Stylesheet": "<link rel=\"stylesheet\" href=\"main.css\"> </link>",
		"Script": "<script src=\"btnCodeUi.js\"></script>",
		"Div": "<div>\r\n	\r\n</div>",
		"id": "id=\"\"",
		"class": "class=\"\"",
		"LinkNewTab": "<a href=\"url\"  target=\"_blank\">link text</a>",
		"Button": "<button id=\"\">Text</button>",
		"onclick": "onclick=\"\"",
		"Select": "<select>\r\n	\r\n</select>",
		"Option": "<option></option>",
		"value": "value=\"\""
	},
	"JS": {
		"Function": "function changeMe1(){\r\n	\r\n}",
		"Variable": "var someVar = 0;",
		"Let": "let blahblah = 0;",
		"Constant": "const changeMe1;",
		"IfElse": "if(){\r\n	\r\n} else {\r\n	\r\n}",
		"SwitchCase": "switch(expression) {\r\n	case x:\r\n		\r\n		break;\r\n	case y:\r\n		\r\n		break;\r\n	default:\r\n	\r\n}",
		"For": "for (let i = 0; i < someAmount; i++) {\r\n	\r\n}",
		"ForKeyInObject": "for (keyName in objectName) {\r\n	\r\n}",
		"Break": "break;",
		"GetElByID": "document.getElementById(\"codeBtns\")",
		"ConsoleGroup": "console.group(\"\");\r\nconsole.groupEnd();",
		"ConsoleLog":"console.log();",
		"/*Comment*/": "/* Comment */",
		"//Comment": "//Comment",
		"JSONKeyValue": "\"key\": \"value\"",
		"JSONKeyObject": "\"key\": {\r\n	\r\n	\r\n}",
	},
	"CSS": {
		"MediaQuery": "@media only screen and (min-width: 768px) {\r\n	\r\n}",
		"P": "p {\r\n	\r\n	\r\n}",
		"Button": "button {\r\n	\r\n	\r\n}",
		"Class": ".className {\r\n	\r\n	\r\n}",
		"ByID": "#elementID {\r\n	\r\n	\r\n}",
		"Comment": "/* Comment */",
		"BackgroundColour": "background-color: DodgerBlue;",
		"TextColour": "color: Tomato;",
		
	},
	"Python": {
		"4Spaces": "    ",
		"DefFunction": "def my_function():\r\n  ",
		"Print": "print(\"\")",
		"Class": "class MyClass",
		"Divide": " / ",
		"Remainder": " % ",
		"FloorDivision": " // ",
		"ToThePowerOf": " ** ",
		"MultilineString": "\"\"\"\r\n\r\n\"\"\"",
		"Slice": "[x:y]"
	}/*,
	"PHP": {
		
	},
	"MySQL": {
		
	},
	"QBASIC": {
		
	},*/
	
}

/* Replacement for savedCode, which has a format that does not allow for groups within langs or any other data. It also created some limitations on the button text that are probably not ideal

concept 1: all codeBtns and codeGroupBtns of a lang (including codeBtns only to be shown after clicking a codeGroupBtn) are nested right in the lang with keys that do not need to have meaning within code. Values are always an array [int displayNestLevel, str codeBtn/Group, str displayText, either str insertValue OR [codeBtnKeys]]
opened groups would probably need to have a flag in the data to show that it is open - not sure if groups would need that to begin with and set flag to false or just use lack of flag as false
*/
var savedCodeWithGroupsConcept1 = {
	"General": {
		"Tab": [0, "codeBtn", "Tab", "	"],
		"NewLine": [0, "codeBtn", "New Line", "\r\n"]
	},
	"HTML": {
		"BoilerPlateBasic": [0, "codeBtn", "BoilerPlateBasic", "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<title>Page Title</title>\r\n	</head>\r\n	<body>\r\n		<h1>Heading</h1>\r\n		\r\n	</body>\r\n</html>"],
		"HeadElementsGrp": [2, "group", "HeadElementsGrp", ["Stylesheet", "Script"]], /*WORKING HERE first value set to 2 to hide it for commit*/
		"Stylesheet": [1, "codeBtn", "ExternalStylesheet", "<link rel=\"stylesheet\" href=\"main.css\"> </link>"],
		"Script": [1, "codeBtn", "Script", "<script src=\"btnCodeUi.js\"></script>"],
		"Div": [0, "codeBtn", "Div", "<div>\r\n	\r\n</div>"],
		"id": [0, "codeBtn", "id", "id=\"\""],
		"class": [0, "codeBtn", "class", "class=\"\""],
		"LinkNewTab": [0, "codeBtn", "LinkNewTab", "<a href=\"url\"  target=\"_blank\">link text</a>"],
		"Button": [0, "codeBtn", "Button", "<button id=\"\">Text</button>"],
		"onclick": [0, "codeBtn", "onclick", "onclick=\"\""],
		"Select": [0, "codeBtn", "Select", "<select>\r\n	\r\n</select>"],
		"Option": [0, "codeBtn", "Option", "<option></option>"],
		"value": [0, "codeBtn", "value", "value=\"\""]
	},
	"JS": {
		"Function": [0, "codeBtn", "Function", "function changeMe1(){\r\n	\r\n}"],
		"Variable": [0, "codeBtn", "Variable", "var someVar = 0;"],
		"Let": [0, "codeBtn", "Let", "let blahblah = 0;"],
		"Constant": [0, "codeBtn", "Constant", "const changeMe1;"],
		"IfElse": [0, "codeBtn", "IfElse", "if(){\r\n	\r\n} else {\r\n	\r\n}"],
		"SwitchCase": [0, "codeBtn", "SwitchCase", "switch(expression) {\r\n	case x:\r\n		\r\n		break;\r\n	case y:\r\n		\r\n		break;\r\n	default:\r\n	\r\n}"],
		"For": [0, "codeBtn", "For", "for (let i = 0; i < someAmount; i++) {\r\n	\r\n}"],
		"ForKeyInObject": [0, "codeBtn", "ForKeyInObject", "for (keyName in objectName) {\r\n	\r\n}"],
		"Break": [0, "codeBtn", "Break", "break;"],
		"GetElByID": [0, "codeBtn", "GetElByID", "document.getElementById(\"codeBtns\")"],
		"ConsoleGroup": [0, "codeBtn", "ConsoleGroup", "console.group(\"\");\r\nconsole.groupEnd();"],
		"ConsoleLog": [0, "codeBtn", "ConsoleLog", "console.log();"],
		"/*Comment*/": [0, "codeBtn", "/*Comment*/", "/* Comment */"],
		"//Comment": [0, "codeBtn", "//Comment", "//Comment"],
		"JSONKeyValue": [0, "codeBtn", "JSONKeyValue", "\"key\": \"value\""],
		"JSONKeyObject": [0, "codeBtn", "JSONKeyObject", "\"key\": {\r\n	\r\n	\r\n}"],
	},
	"CSS": {
		"MediaQuery": [0, "codeBtn", "MediaQuery", "@media only screen and (min-width: 768px) {\r\n	\r\n}"],
		"P": [0, "codeBtn", "P", "p {\r\n	\r\n	\r\n}"],
		"Button": [0, "codeBtn", "Button", "button {\r\n	\r\n	\r\n}"],
		"Class": [0, "codeBtn", "Class", ".className {\r\n	\r\n	\r\n}"],
		"ByID": [0, "codeBtn", "ByID", "#elementID {\r\n	\r\n	\r\n}"],
		"Comment": [0, "codeBtn", "Comment", "/* Comment */"],
		"BackgroundColour": [0, "codeBtn", "BackgroundColour", "background-color: DodgerBlue;"],
		"TextColour": [0, "codeBtn", "TextColour", "color: Tomato;"],
		
	},
	"Python": {
		"4Spaces": [0, "codeBtn", "4Spaces", "    "],
		"DefFunction": [0, "codeBtn", "DefFunction", "def my_function():\r\n  "],
		"Print": [0, "codeBtn", "Print", "print(\"\")"],
		"Class": [0, "codeBtn", "Class", "class MyClass"],
		"Divide": [0, "codeBtn", "Divide", " / "],
		"Remainder": [0, "codeBtn", "Remainder", " % "],
		"FloorDivision": [0, "codeBtn", "FloorDivision", " // "],
		"ToThePowerOf": [0, "codeBtn", "ToThePowerOf", " ** "],
		"MultilineString": [0, "codeBtn", "MultilineString", "\"\"\"\r\n\r\n\"\"\""],
		"Slice": [0, "codeBtn", "Slice", "[x:y]"]
	}
}

/* Todo: actually store controlBtns like this
var controlBtns = {
	"ChangeLanguage": {
		"btnText": "Change Language",
		"showTrigger": "pageLoad"
	}
}*/

function pageLoad(){
	console.groupCollapsed("page load");
	
	showLangBtns();
	
	console.log("Checking permissions for clipboard-write:");
	navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
		console.log(result);
		console.log("Permission: " + result.state);
		if(result.state === "granted"){
			//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
			addButtons("copyText", "", ["Copy all text"], "btn", "", document.getElementById("otherControlBtns"));	
		}
		console.groupEnd();
	});
	
	console.groupEnd();
}

//Coder beware: This func (and the UX change it was added to help create) introduces a new meaning of "LangBtn": a button with a name of a coding language on it that triggers showing the code btns (previouslty called LangBtns) for that particular language.
function showLangBtns(){
	console.groupCollapsed("showLangBtns");
	
	const allLangs = Object.keys(savedCode);
	console.log(allLangs);
	
	document.getElementById("codeBtns").innerHTML = "";
	
	for (i in allLangs){
		//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
		addButtons("languageChange", allLangs[i], [allLangs[i]], "btn", "", document.getElementById("codeBtns"));
		
	}
	console.groupEnd;
}

/*
	showLangTop means show the top level btns for a given language

	Adding concept of groups in that top level
*/
//TODO: working here -- changing this in stages for ease of development, with stages that I can commit to github
function showLangTop(lang){
	console.groupCollapsed("showLangTop:" + lang);
	//get the buttons for lang - Note that without wrapping in Object.keys you get the value of each key instead
	var langBtns = Object.keys(savedCodeWithGroupsConcept1[lang]);
	
	console.log(savedCodeWithGroupsConcept1[lang]);
	/*	 cannot use the new btn text values until we have a more flexible addButtons function that allows for different text on the button to name of the id
		BUT we can still grab the just ones that are top level btns!
	*/
	var btnTexts = [];
	for (val in langBtns) {
		console.log(savedCodeWithGroupsConcept1[lang][langBtns[val]]);
		
		if(savedCodeWithGroupsConcept1[lang][langBtns[val]][0] == 0){
			//Todo: (when possible) Get the more flexible button text value
			//btnTexts.push(savedCodeWithGroupsConcept1[lang][langBtns[val]][2]);
			//For now: use the keys
			btnTexts.push(langBtns[val]);
		}
	}
	
	console.log(btnTexts);
	
	//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
	addButtons("langDescendantClick", lang, btnTexts, "btn" + lang, "", document.getElementById("codeBtns"));
	console.groupEnd();
}


/* Formally langTopClick(langTop) but then I found I could use it for levels below that
langTops can be either codeGroupBtns or codeBtns

codeGroupBtn is a btn that represents a group of code, when clicked displays an amount of associated codeBtns. For example in HTML you might group anything that only goes inside a head tag into one group and all the form elements into another, click on codeGroupBtn marked HeadElements to get codeBtns marked Stylesheet, RobotsMeta, ExternalScript etc.
A codeBtn actually places text into the text area
*/
function langDescendantClick(langTop){
	console.groupCollapsed("langDescendantClick: " + langTop);
	
	/*Existing (soon to be amended) code from makeCode for reference while coding
	//get the button that was clicked
	var btnClicked = event.target || event.srcElement;
	//get the lang from the class
	console.log(btnClicked.className);
	//get the text
	console.log(savedCode[btnClicked.className][key]);
	*/
	//get the button that was clicked
	var btnClicked = event.target || event.srcElement;
	
	//get the lang from the class
	console.log("lang derived from btns class: " + btnClicked.className);
	
	//find the button or group within savedCodeWithGroupsConcept1
	var btn = savedCodeWithGroupsConcept1[btnClicked.className][langTop];
	
	console.log(btn);
	
	//branching pathway for codeBtn or group
	if (btn[1] == "codeBtn"){
		console.log("Btn is a codeBtn");
		//the old makeCode function did not seem worthwhile adapting for this
		insertTextAtCursor(codeTA, btn[3]);
	} else {
		console.log("Btn not a codeBtn");
		for (indexes in btn[3]) {
			console.log(btn[3][indexes]);
			/*Call drawBtn(id, btnClass, btnText, clickFunc, clickArgs, position, elRelativeTo)
			turns out we could pass in this same function 
			*/
			drawBtn("btn" + btn[3][indexes], btnClicked.className, btn[3][indexes], langDescendantClick, [btn[3][indexes]], "afterend", btnClicked);
			//Todo: swap above for below when ready for using separate btn text, rather than using the key for the text params will need updating to match changes since writing that, but I had tested this call worked with how drawBtn was at the time
			//drawBtn("btn" + btn[3][indexes], btnClicked.className, savedCodeWithGroupsConcept1[btnClicked.className][btn[3][indexes]][2], "", "afterend", btnClicked);
		}
		
	}
	
	console.groupEnd();
}

//TODO: Barely started, duplicated from old addLangBtns
function showGroupOfBtns(group){
	console.groupCollapsed("addLangBtns:" + lang);
	//get the buttons for lang - Note that without wrapping in Object.keys you get the value of each key instead
	var langBtns = Object.keys(savedCode[lang]);
	
	
	
	
	//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
	addButtons("makeCode", lang, langBtns, "btn" + lang, "", document.getElementById("codeBtns"));
	console.groupEnd();
}

function runEvent(callback, args){
	callback.apply(this, args);
}

function drawBtn(id, btnClass, btnText, clickFunc, clickArgs, position, elRelativeTo){
	console.groupCollapsed("drawBtn");
	let btn = document.createElement("button");
	btn.id = id;
	btn.innerHTML = btnText;
	console.log(btnClass);
	console.log(clickFunc);
	console.log(clickArgs);
	//using className since there is no need to play nice with existing classes
	btn.className = btnClass;
	btn.addEventListener ("click", function() {
		//Todo: actually pass the event
		runEvent(clickFunc, clickArgs);
	});
	
	elRelativeTo.insertAdjacentElement(position, btn)
	
	/*if (insertAfterEl != ""){
		parentEl.after(btn);
	} else {
		parentEl.appendChild(btn);
	}*/
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
    console.log(el);
    console.log(text);
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
		
		//indentation
		var indentString = "";
		//1) find the last newline - textarea value has newlines as \n not \r\n
		const searchTerm = '\n';
		console.log(`The index of the first "${searchTerm}" from the end is ${beforeCursor.lastIndexOf(searchTerm)}`);
		var lastNewLinePos = beforeCursor.lastIndexOf(searchTerm);
	
		//2)count the tabs or spaces after. 
		var tabsFromNewLine = 0;
		var spacesFromNewLine = 0;
		//initial value of indexToCheck is 1 more than the lastNewLinePos - when coding I thought it would be 2 more since lastNewLinePos would indicate the \ so this would need to count over the n, but after a bit of debugging I found this was not the case
		var indexToCheck = lastNewLinePos +1;
		
		
		/* Some console log lines that I used to help sus out 
		console.log(val.charAt(indexToCheck));
		console.log(val.charAt(indexToCheck-1));
		console.log(val.charAt(indexToCheck+1));*/
		
		//val.charAt... means we check for indentation on that line even after the cursor, giving subtly different behaviour to if we used beforeCursor.charAt
		console.log(val.charAt(indexToCheck));
		if (val.charAt(indexToCheck) == "	"){ //tab
			while(val.charAt(indexToCheck) == "	"){//tab
				console.log("tab found");
				tabsFromNewLine++;
				indentString += "	";
				indexToCheck++;
			}
			console.log("tabs found:" + tabsFromNewLine);
		} else if(val.charAt(indexToCheck) == " "){//space
			while(val.charAt(indexToCheck) == " "){//space
				console.log("space found");
				spacesFromNewLine++;
				indentString += " ";
				indexToCheck++;
			}
			console.log("spaces found:" + spacesFromNewLine);
		}
		//add tabs/spaces into the text we are about to insert
		text = text.replaceAll("\r\n", "\r\n" + indentString);
		
        el.value = beforeCursor + text + val.slice(endIndex);
		el.focus();
		//place the cursor at the end of what was just inserted, by placing it at the position found at number of characters in the text box - number of characters in the bit that went after the inserted text
        el.selectionStart = el.selectionEnd = el.value.length - val.slice(endIndex).length;
		
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
	console.log("Attempting to copy:");
	console.log(codeTA.value);
	
	console.log("Checking permissions:");
	navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
		console.log(result);
		console.log("Permission: " + result.state);
	});
	
	navigator.clipboard.writeText(codeTA.value);
	
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

function languageChange(lang){
	console.group("languageChange");
	console.log(lang);
	
	codeBtns.innerHTML = "";
	
	//Add a button that can show the languages again
	//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
	addButtons("showLangBtns", "PickLang", ["Change Lang"], "btn", "", codeBtns)
	
	if(lang == "General"){
		showLangTop("General");
	}
	else {
		showLangTop("General");
		showLangTop(lang);
	}
	
	console.groupEnd();
}

function addAllLangBtns(){
	for (const lang in savedCode) {
		addLangBtns(lang);
	}
}

function emptyEditor(){
	codeTA.value = "";
}

function toggleFullscreen(){
	if(is_fullscreen()){
		closeFullscreen();
	} else {
		openFullscreen();
	}
}

function is_fullscreen(){
    return document.fullscreenElement != null;
}

function openFullscreen() {
//opens the browser in full screen - particularly wanted on mobile so that we have a bit more screen to work with
//found on https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen
	var elem = document.getElementById("btnCodeHTML");
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	}
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function showStyler(){
	applyHideClass("codeTA");
	applyHideClass("btnMkr");
	applyHideClass("newLangScrn");
	applyShowClass("styler");
}
function showBtnMkr(){
	applyHideClass("codeTA");
	applyHideClass("styler");
	applyHideClass("newLangScrn");
	applyShowClass("btnMkr");
}
function showNewLangScrn(){
	applyHideClass("codeTA");
	applyHideClass("btnMkr");
	applyHideClass("styler");
	applyShowClass("newLangScrn");
}
function showEditor(){
	applyHideClass("newLangScrn");
	applyHideClass("btnMkr");
	applyHideClass("styler");
	applyShowClass("codeTA");
}

//Nabbed and tweaked from my TeaRounder project 
function applyHideClass(id){
  document.getElementById(id).classList.remove("show");
  document.getElementById(id).classList.add("hide");
}
//Nabbed and tweaked from my TeaRounder project 
function applyShowClass(id){
  document.getElementById(id).classList.remove("hide");
  document.getElementById(id).classList.add("show");
}

function isRunningLocally(){
	if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === ""){
		console.log("Detected running locally");
		return true;
	} else {
		console.log("btnCode seems to be running from a server");
		return false;
	}
}

