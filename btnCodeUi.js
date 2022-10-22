

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
		"BoilerplateBasic": [0, "codeBtn", "Basic Boilerplate", "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<title>Page Title</title>\r\n	</head>\r\n	<body>\r\n		<h1>Heading</h1>\r\n		\r\n	</body>\r\n</html>"],
		"HeadElementsGrp": [0, "group", "Head<br/>Elements", ["Stylesheet", "Script", "LinkBase", "MetaOther", "MetaCharset", "MetaViewport"]],
		"Stylesheet": [1, "codeBtn", "&lt;link&gt; stylesheet", "<link rel=\"stylesheet\" href=\"main.css\"> </link>"],
		"Script": [1, "codeBtn", "&lt;script&gt;", "<script src=\"btnCodeUi.js\"></script>"],
		"LinkBase": [1, "codeBtn", "&lt;base&gt;(for all links)", "<base href=\"\" target=\"_blank\">"],
		"MetaCharset": [1, "codeBtn", "&lt;meta&gt;<br/>charset", "<meta charset=\"UTF-8\">"],
		"MetaViewport": [1, "codeBtn", "&lt;meta&gt;<br/>viewport", "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"],
		"MetaOther": [1, "codeBtn", "&lt;meta&gt; desc,<br/>keywords, author", "<meta name=\"description\" content=\"\">\r\n<meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">\r\n<meta name=\"author\" content=\"Grace Hopper\">"],
		"LayoutGrp": [0, "group", "Layout", ["Header", "MainElem", "Footer", "Div", "Span"]],
		"Header": [1, "codeBtn", "&lt;header&gt;", "<header>\r\n	\r\n</header>"],
		"MainElem": [1, "codeBtn", "&lt;main&gt;", "<main>\r\n	\r\n</main>"],
		"Footer": [1, "codeBtn", "&lt;footer&gt;", "<footer>\r\n	\r\n</footer>"],
		"Div": [1, "codeBtn", "&lt;div&gt;", "<div>\r\n	\r\n</div>"],
		"Span": [1, "codeBtn", "&lt;span&gt;", "<span></span>"],
		"LinksGrp": [0, "group", "Links", ["Link", "LinkNewTab", "ImageLink"]],
		"Link": [1, "codeBtn", "&lt;a&gt; (regular link)", "<a href=\"\">visible text</a>"],
		"LinkNewTab": [1, "codeBtn", "&lt;a&nbsp;_blank&gt; (link new tab)", "<a href=\"url\" target=\"_blank\">link text</a>"],
		"ImageLink": [1, "codeBtn", "(image link)", "<a href=\"\"><img border=\"0\" alt=\"\" src=\"\" width=\"100\" height=\"100\"></a>"],
		"FormsUIGrp": [0, "group", "Forms and UI", ["Button", "Select", "Option"]],
		"Button": [1, "codeBtn", "&lt;button&gt;", "<button id=\"\">Text</button>"],
		"Select": [1, "codeBtn", "&lt;select&gt;", "<select>\r\n	\r\n</select>"],
		"Option": [1, "codeBtn", "&lt;option&gt;", "<option></option>"],
		"AttributesGrp": [0, "group", "Attributes", ["id", "class", "value", "onclick"]],
		"id": [1, "codeBtn", "id=", "id=\"\""],
		"class": [1, "codeBtn", "class=", "class=\"\""],
		"value": [1, "codeBtn", "value=", "value=\"\""],
		"onclick": [1, "codeBtn", "onclick=", "onclick=\"\""],		
		"HtmlEntitiesGrp": [0, "group", "HTML<br/>Entities", ["nonBreakingSpace", "lessThanEntity", "greaterThanEntity"]],
		"nonBreakingSpace": [1, "codeBtn", "non-breaking space", "&nbsp;"],
		"lessThanEntity": [1, "codeBtn", "< entity", "&lt;"],
		"greaterThanEntity": [1, "codeBtn", "> entity", "&gt;"],
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
	}/*,
	"PHP": {
		
	},
	"MySQL": {
		
	},
	"QBASIC": {
		
	},*/
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
	
	const allLangs = Object.keys(savedCodeWithGroupsConcept1);
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
	//get the buttons for lang - Note that without wrapping in Object.keys you get the value of each key instead. This var previously called langBtns but that became horribly confusing as context changed
	var langDescendantKeys = Object.keys(savedCodeWithGroupsConcept1[lang]);
	console.log(langDescendantKeys);
	console.log(savedCodeWithGroupsConcept1[lang]);
	
	var btnKey = "";
	var btnType = "";
	var btnClass = "";
	for (val in langDescendantKeys) {
		btnKey = langDescendantKeys[val];
		console.log(savedCodeWithGroupsConcept1[lang][btnKey]);
		
		
		//we store what level of nesting the btn is in index 0 of the btns outer array
		//so to find btns that by UX seem in the "top" of a lang, match with 0
		if(savedCodeWithGroupsConcept1[lang][btnKey][0] == 0){
			
			createLangDescendantBtn(lang, btnKey, "beforeend", document.getElementById("codeBtns"));
		}
	}
	console.groupEnd();
}


/* Formerly langTopClick(langTop) but then I found I could use it for levels below that

langTops could be either codeGroupBtns or codeBtns, but at the top level of a lang

codeGroupBtn is a btn that represents a group of code, when clicked displays an amount of associated codeBtns. For example in HTML you might group anything that only goes inside a head tag into one group and all the form elements into another, click on codeGroupBtn marked HeadElements to get codeBtns marked Stylesheet, RobotsMeta, ExternalScript etc.
A codeBtn actually places text into the text area
*/
function langDescendantClick(btnDataIdentifier){
	console.groupCollapsed("langDescendantClick: " + btnDataIdentifier);
	
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
	
	//get the lang and btnType from the class
	var lang = btnClicked.classList[0];
	console.log("lang taken from btnClicked.classList[0]: " + lang);
	var btnType = btnClicked.classList[1];
	console.log("btnType taken from btnClicked.classList[1]: " + btnType);
	
	//find the button or group within savedCodeWithGroupsConcept1
	var btn = savedCodeWithGroupsConcept1[lang][btnDataIdentifier];
	
	console.log(btn);
	
	//branching pathway for codeBtn or group
	if (btnType == "codeBtn"){
		console.log("Btn is a codeBtn");
		//the old makeCode function did not seem worthwhile adapting for this
		insertTextAtCursor(codeTA, btn[3]);
	} else if (btnType == "group") { 
		console.log("Btn is a group that has not been opened yet");
		//showGroupDescendants(btn);
		var btnsToDraw = btn[3].slice().reverse();//reverse needed since create...Btn will place each new btn next to the group btn, slice needed because otherwise reverse will mutate the original array (which gives the UX of btns appearing in reverse every other time the group opens), doing this as a new var as doing this reversal in the for condition would just get ignored for actual logging or creating and we would not want to do that reversal every go through the loop - getting indexes backward instead would work, but this implementation seemed easier to do at this point
		for (indexes in btnsToDraw) { 
			console.log(btnsToDraw[indexes]);
			createLangDescendantBtn(lang, btnsToDraw[indexes], "afterend", btnClicked)

		}
		//set the btn type to openGroup, so that when it is next click it will take the correct pathway
		btn[1] = "openGroup";
		btnClicked.classList.remove("group");
		btnClicked.classList.add("openGroup");
	} else if (btnType == "openGroup"){
		console.log("btn represents a group that has already been opened");
		for (indexes in btn[3]) {
			console.log(btn[3][indexes]);
			removeElementById("btn" + lang + btn[3][indexes]);
		}
		btn[1] = "group";
		btnClicked.classList.remove("openGroup");
		btnClicked.classList.add("group");
	} else { //Just in case I ever have a dumb moment when altering this code, or make a typo in a btn type in the data
		console.error("no pathway in the code for the value: " + btn[1]);
	}
	
	console.groupEnd();
}

function createLangDescendantBtn(lang, btnKey, position, elRelativeTo){
	var btnType = savedCodeWithGroupsConcept1[lang][btnKey][1];
	//Todo: (might be possible now?) Get the more flexible button text value
	var btnText = savedCodeWithGroupsConcept1[lang][btnKey][2];
	
	//swap openGroups to regular groups, since we are not also drawing the buttons within the group that would be on show
	if(btnType == "openGroup"){
		//maybe todo: could be good to have a user option that if activated  show the btns within the group instead of reverting openGroups to groups,
		btnType = "group";
		savedCodeWithGroupsConcept1[lang][btnKey][1] = btnType;
	}
	//I was going to only apply an extra class for groups, but I think it may benefit us to assign each btn types from data as class on btns
	var btnClass = lang + " " + btnType;
	
	
	//drawBtn(id, btnClass, btnText, clickFunc, clickArgs, position, elRelativeTo)
	drawBtn("btn" + lang + btnKey, btnClass, btnText, langDescendantClick, [btnKey], position, elRelativeTo)

}

//used in eventlisteners for elements created via JS, to get round the issue of passing functions in at element creation, with their params, but without calling those functions at the moment.
function runEvent(callback, args){
	callback.apply(this, args);
}

/* About the "position" param below - 
	There are four acceptable inputs, directly from the Element Web API, basically setting which side of the opening or closing tags of the element you are placing the new btn in relation to:
		'beforebegin': Before the element in elRelativeTo itself.
		'afterbegin': Just inside the element in elRelativeTo, before its first child.
		'beforeend': Just inside the element in elRelativeTo, after its last child.
		'afterend': After the element in elRelativeTo itself.
	The key to understanding that param is understanding insertAdjacentElement()
	https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

*/
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
		runEvent(clickFunc, clickArgs);
	});
	
	elRelativeTo.insertAdjacentElement(position, btn)
	
	console.groupEnd();
}

function removeElementById(id){
	console.groupCollapsed("removeElementById: " + id);
	if (!!document.getElementById(id)){
		console.log("Found element with id: " + id + " removing it now.");
		document.getElementById(id).remove();
	} else {
		console.warn("Could not find element with id: " + id);
	}
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

