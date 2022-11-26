

/* Replacement for savedCode, which has a format that does not allow for groups within langs or any other data. It also created some limitations on the button text that are probably not ideal

concept 1: all codeBtns and codeGroupBtns of a lang (including codeBtns only to be shown after clicking a codeGroupBtn) are nested right in the lang with keys that do not need to have meaning within code. Values are always an array [int displayNestLevel, str codeBtn/Group, str displayText, either str insertValue OR [codeBtnKeys]]
opened groups would probably need to have a flag in the data to show that it is open - not sure if groups would need that to begin with and set flag to false or just use lack of flag as false
*/
var savedCodeWithGroupsConcept1 = {
	"General": {
		"langName": "General",
		"Tab": [0, "codeBtn", "Tab", "	"],
		"NewLine": [0, "codeBtn", "New<br/>Line", "\r\n"],
		"Symbols": [0, "group", "@<<br/>>$", ["singleQuote", "doubleQuote", "at", "lessThanSymbol", "moreThanSymbol", "fslashSymbol", "bslashSymbol", "dollarSymbol", "poundSymbol", "euroSymbol", "yenSymbol", "copyrightSymbol"]],
		"singleQuote": [1, "codeBtn", "'", "'"],
		"doubleQuote": [1, "codeBtn", "\"", "\""],
		"at": [1, "codeBtn", "@", "@"],
		"lessThanSymbol": [1, "codeBtn", "<", "<"],
		"moreThanSymbol": [1, "codeBtn", ">", ">"],
		"fslashSymbol": [1, "codeBtn", "/", "/"],
		"bslashSymbol": [1, "codeBtn", "\\", "\\"],
		"dollarSymbol": [1, "codeBtn", "$", "$"],
		"poundSymbol": [1, "codeBtn", "£", "£"],
		"euroSymbol": [1, "codeBtn", "€", "€"],
		"yenSymbol": [1, "codeBtn", "¥", "¥"],
		"copyrightSymbol": [1, "codeBtn", "©", "©"],
	},
	"HTML": {
		"langName": "HTML",
		"BoilerplateTemplatesGrp":[0,"group","Boilerplate & Templates",["BoilerplateBasic", "OneFileBoilerplate", "FreeCodeCamp"]],
		"BoilerplateBasic": [1, "codeBtn", "Minimal Boilerplate", "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<meta charset=\"utf-8\">\r\n		<title>Page Title</title>\r\n	</head>\r\n	<body>\r\n		\r\n	</body>\r\n</html>"],
		"OneFileBoilerplate": [1, "codeBtn", "Minimal + JS & CSS in body", "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<meta charset=\"utf-8\">\r\n		<title>Page Title</title>\r\n	</head>\r\n	<body>\r\n		\r\n		<script>\r\n			\r\n		</script>\r\n		<style>\r\n			\r\n		</style>\r\n	</body>\r\n</html>"],
		"FreeCodeCamp": [1, "codeBtn", "FreeCodeCamp Boilerplate", "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>HTML 5 Boilerplate</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n  </head>\r\n  <body>\r\n	<script src=\"index.js\"></script>\r\n  </body>\r\n</html>"],
		"HeadElementsGrp": [0, "group", "Head<br/>Elements", ["Stylesheet", "Script", "Title", "LinkBase", "MetaOther", "MetaCharset", "MetaViewport", "MetaThemeColor", "MetaThemeColorDark", "MetaRobotsNoIndex"]],
		"Title": [1, "codeBtn", "&lt;title&gt; (of the Tab/Page)", "<title>Title</title>"],
		"Stylesheet": [1, "codeBtn", "&lt;link&gt; stylesheet", "<link rel=\"stylesheet\" href=\"main.css\"> </link>"],
		"Script": [1, "codeBtn", "&lt;script&gt; with src=", "<script src=\"btnCodeUi.js\"></script>"],
		"LinkBase": [1, "codeBtn", "&lt;base&gt;(for all links)", "<base href=\"\" target=\"_blank\">"],
		"MetaCharset": [1, "codeBtn", "&lt;meta&gt;<br/>charset", "<meta charset=\"UTF-8\">"],
		"MetaViewport": [1, "codeBtn", "&lt;meta&gt;<br/>viewport", "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"],
		"MetaOther": [1, "codeBtn", "&lt;meta&gt; desc,<br/>keywords, author", "<meta name=\"description\" content=\"\">\r\n<meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">\r\n<meta name=\"author\" content=\"Grace Hopper\">"],
		"MetaThemeColor": [1, "codeBtn", "&lt;meta&gt; theme&#8209;color", "<meta name=\"theme-color\" content=\"#4285f4\" />"],
		"MetaRobotsNoIndex": [1, "codeBtn", "&lt;meta&gt; robots noindex", "<meta name=\"robots\" content=\"noindex\">"],
		"MetaThemeColorDark": [1, "codeBtn", "&lt;meta&gt; theme&#8209;color light/dark&nbsp;modes", "<meta name=\"theme-color\" media=\"(prefers-color-scheme: light)\" content=\"cyan\" />\r\n<meta name=\"theme-color\" media=\"(prefers-color-scheme: dark)\" content=\"black\" />"],
		"LayoutGrp": [0, "group", "Layout", ["Header", "MainElem", "Footer", "Div", "Span"]],
		"Header": [1, "codeBtn", "&lt;header&gt;", "<header>\r\n	\r\n</header>"],
		"MainElem": [1, "codeBtn", "&lt;main&gt;", "<main>\r\n	\r\n</main>"],
		"Footer": [1, "codeBtn", "&lt;footer&gt;", "<footer>\r\n	\r\n</footer>"],
		"Div": [1, "codeBtn", "&lt;div&gt;", "<div>\r\n	\r\n</div>"],
		"Span": [1, "codeBtn", "&lt;span&gt;", "<span></span>"],
		"TextGrp": [0, "group", "Text", ["Heading1","Heading2","Heading3","Heading6","Paragraph"]],
		"Heading1": [1, "codeBtn", "&lt;h1&gt;", "<h1>Heading</h1>\r\n"],
		"Heading2": [1, "codeBtn", "&lt;h2&gt;", "<h2>Heading</h2>\r\n"],
		"Heading3": [1, "codeBtn", "&lt;h3&gt;", "<h3>Heading</h3>\r\n"],
		"Heading6": [1, "codeBtn", "&lt;h6&gt;", "<h6>Heading</h6>\r\n"],
		"Paragraph": [1, "codeBtn", "\r\n&lt;p&gt;", "<p>text</p>\r\n"],
		"LinksGrp": [0, "group", "Links", ["Link", "LinkNewTab", "ImageLink"]],
		"Link": [1, "codeBtn", "&lt;a&gt; (regular link)", "<a href=\"\">visible text</a>"],
		"LinkNewTab": [1, "codeBtn", "&lt;a&nbsp;_blank&gt; (link new tab)", "<a href=\"url\" target=\"_blank\">link text</a>"],
		"ImageLink": [1, "codeBtn", "(image link)", "<a href=\"\"><img border=\"0\" alt=\"\" src=\"\" width=\"100\" height=\"100\"></a>"],
		"FormsUIGrp": [0, "group", "Forms & UI", ["Label","Input", "Datalist", "Button", "Select", "Option", "OptionSelected"]],
		"Label": [1, "codeBtn", "&lt;label&gt;", "<label for=\"controlID\">Label text here</label>"],
		"Input": [1, "codeBtn", "&lt;input&gt; type=\"text\"", "<input type=\"text\" id=\"\" name=\"\"/>"],
		"Datalist":[1,"codeBtn","&lt;datalist&gt; ","<datalist id=\"\">\r\n	<option value=\"val1\"></option>\r\n	<option value=\"val2\"></option>\r\n</datalist>"],
		"Button": [1, "codeBtn", "&lt;button&gt;", "<button id=\"\">Text</button>"],
		"Select": [1, "codeBtn", "&lt;select&gt;", "<select id=\"\">\r\n	\r\n</select>"],
		"Option": [1, "codeBtn", "&lt;option&gt;", "<option></option>\r\n"],
		"OptionSelected": [1, "codeBtn", "&lt;option selected&gt;", "<option selected></option>\r\n"],
		"ImagesGrp":[0,"group","Images &<br/>Graphics",["img", "CanvasTag", "CanvasRect"]],
		"img":[1,"codeBtn","&lt;img&gt;","<img src=\"filepath\" alt=\"Text to show, if cannot show image\">"],
		"CanvasTag":[1,"codeBtn","&lt;canvas&gt;","<canvas id=\"myCanvas\">Your browser does not support the canvas tag.</canvas>\r\n<script>\r\n</script>"],
		"CanvasRect":[1,"codeBtn","&lt;canvas&gt; (with rectangle)","<canvas id=\"myCanvas\">Your browser does not support the canvas tag.</canvas>\r\n<script>\r\n var c = document.getElementById(\"myCanvas\");\r\n var ctx = c.getContext(\"2d\");\r\n ctx.fillStyle = \"#23FF23\";\r\n ctx.fillRect(0, 34, 80, 100);\r\n</script>"],
		"ProgrammingGrp":[0,"group","Programming",["HtmlComment","ScriptTag", "NoscriptTag", "NoscriptBrowserWarn"]],
		"ScriptTag":[1,"codeBtn","&lt;script&gt;","<script>\r\n</script>"],
		"NoscriptTag":[1,"codeBtn","&lt;noscript&gt; (tag only)","<noscript></noscript>"],
		"NoscriptBrowserWarn":[1,"codeBtn","&lt;noscript&gt; (scripts needed text)","<noscript>Looks like scripts are disabled, some functionality will not be able to work</noscript>"],
		"HtmlComment":[1,"codeBtn","&lt;!-- html comment --&gt;","<!-- comment -->"],
		"TableGrp":[0,"group","Tables",["Table"]],
		"Table":[1,"codeBtn","&lt;table&gt;","<table>\r\n\t<tr>\r\n\t\t<th>header1</th>\r\n\t\t<th>header2</th>\r\n\t\t<th>header3</th>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td>row1 col1</td>\r\n\t\t<td>row1 col2</td>\r\n\t\t<td>row1 col3</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td>row2 col1</td>\r\n\t\t<td>row2 col2</td>\r\n\t\t<td>row2 col3</td> \r\n\t</tr>\r\n\t\r\n</table>"],
		"AttributesGrp": [0, "group", "Attributes", ["id", "class", "value", "onclick", "onchange", "placeholder", "List", "LangEnGB"]],
		"id": [1, "codeBtn", "id=", "id=\"\""],
		"class": [1, "codeBtn", "class=", "class=\"\""],
		"value": [1, "codeBtn", "value=", "value=\"\""],
		"onclick": [1, "codeBtn", "onclick=", "onclick=\"\""],		
		"onchange":[1,"codeBtn","onchange=","onchange=\"\""],
		"placeholder": [1, "codeBtn", "placeholder=", "placeholder=\"\""],	
		"List":[1,"codeBtn","list=","list=\"\""],
		"LangEnGB":[1,"codeBtn","lang= en&#8209;GB","lang=\"en-GB\""],
		"HtmlEntitiesGrp": [0, "group", "HTML<br/>Entities", ["nonBreakingSpace", "nonBreakingHyphen","lessThanEntity", "greaterThanEntity"]],
		"nonBreakingSpace": [1, "codeBtn", "non-breaking space", "&nbsp;"],
		"nonBreakingHyphen": [1, "codeBtn", "non&#8209;breaking hyphen", "&#8209;"],
		"lessThanEntity": [1, "codeBtn", "< entity", "&lt;"],
		"greaterThanEntity": [1, "codeBtn", "> entity", "&gt;"],
		
	},
	"JS": {
		"langName": "JS",
		"Core":[0,"group","Core",["Function", "Variable", "Let", "Constant", "IfElse", "SwitchCase"]],
		"Function": [1, "codeBtn", "Function", "function changeMe1(){\r\n	\r\n}"],
		"Variable": [1, "codeBtn", "var variable", "var someVar = 0;"],
		"Let": [1, "codeBtn", "let variable", "let blahblah = 0;"],
		"Constant": [1, "codeBtn", "const constant", "const changeMe1;"],
		"IfElse": [1, "codeBtn", "if else", "if(){\r\n	\r\n} else {\r\n	\r\n}"],
		"SwitchCase": [1, "codeBtn", "switch case", "switch(expression) {\r\n	case x:\r\n		\r\n		break;\r\n	case y:\r\n		\r\n		break;\r\n	default:\r\n	\r\n}"],
		"For": [1, "codeBtn", "For", "for (let i = 0; i < someAmount; i++) {\r\n	\r\n}"],
		"ForKeyInObject": [1, "codeBtn", "ForKeyInObject", "for (keyName in objectName) {\r\n	\r\n}"],
		"Break": [1, "codeBtn", "Break", "break;"],
		"GetElByID": [0, "codeBtn", "getElement ById", "document.getElementById(\"codeBtns\")"],
		"Logging":[0,"group","Logging & Commenting",["ConsoleGroup", "ConsoleLog", "/*Comment*/", "//Comment"]],
		"ConsoleGroup": [1, "codeBtn", "ConsoleGroup", "console.group(\"\");\r\nconsole.groupEnd();"],
		"ConsoleLog": [1, "codeBtn", "ConsoleLog", "console.log();"],
		"/*Comment*/": [1, "codeBtn", "/*Comment*/", "/* Comment */"],
		"//Comment": [1, "codeBtn", "//Comment", "//Comment"],
		"JSONKeyValue": [0, "codeBtn", "JSONKeyValue", "\"key\": \"value\""],
		"JSONKeyObject": [0, "codeBtn", "JSONKeyObject", "\"key\": {\r\n	\r\n	\r\n}"],
	},
	"CSS": {
		"langName": "CSS",
		"mediaQueriesGrp":[0,"group","Media Queries",["MqMinwidth576px", "MqMinwidth768px", "MqMinwidth992px", "MqMinwidth1200px", "PointerFine"]],
		"MqMinwidth576px": [1, "codeBtn", "screen width 576px", "@media only screen and (min-width: 576px) {\r\n	\r\n}\r\n"],
		"MqMinwidth768px": [1, "codeBtn", "screen width 768px", "@media only screen and (min-width: 768px) {\r\n	\r\n}\r\n"],
		"MqMinwidth992px": [1, "codeBtn", "screen width 992px", "@media only screen and (min-width: 992px) {\r\n	\r\n}\r\n"],
		"MqMinwidth1200px": [1, "codeBtn", "screen width 1200px", "@media only screen and (min-width: 1200px) {\r\n	\r\n}\r\n"],
		"PointerFine":[1,"codeBtn","pointer: fine","@media (pointer: fine) {\r\n	\r\n}\r\n"],
		"SelectorsGrp":[0,"group","Selectors",["P", "Button", "Class", "ClassesAnd", "ClassesOr", "NestedClasses", "ByID", "LiNthChild", "LiOddChild", "LiEvenChild", "LiFormula", "LiLastChild", "All"]],
		"P": [1, "codeBtn", "p", "p {\r\n	\r\n	\r\n}\r\n"],
		"Button": [1, "codeBtn", "button", "button {\r\n	\r\n	\r\n}\r\n"],
		"Class": [1, "codeBtn", ".class", ".className {\r\n	\r\n	\r\n}\r\n"],
		"ClassesAnd": [1, "codeBtn", ".class1.class2 (both)", ".class1.class2 {\r\n	\r\n	\r\n}\r\n"],
		"ClassesOr": [1, "codeBtn", ".class1, .class2 (either)", ".class1, .class2 {\r\n	\r\n	\r\n}\r\n"],
		"NestedClasses": [1, "codeBtn", ".classParent .classChild (nested)", ".classParent .classChild {\r\n	\r\n	\r\n}\r\n"],
		"ByID": [1, "codeBtn", "#ID", "#elementID {\r\n	\r\n	\r\n}\r\n"],
		"LiNthChild":[1,"codeBtn","li:nth-child(2) (2nd li in list)","li:nth-child(2) {\r\n	\r\n}\r\n"],
		"LiOddChild":[1,"codeBtn","li:nth-child(odd) (odd numbered)","li:nth-child(odd) {\r\n	\r\n}\r\n"],
		"LiEvenChild":[1,"codeBtn","li:nth-child(even) (even numbered)","li:nth-child(even) {\r\n	\r\n}\r\n"],
		"LiFormula":[1,"codeBtn","li:nth-child(3n + 1) (by formula)","li:nth-child(3n + 1) {\r\n\t\r\n}\r\n"],
		"LiLastChild":[1,"codeBtn","li:last-child (last li)","li:last-child {\r\n\t\r\n}\r\n"],
		"All":[1,"codeBtn","* (wildcard all)","* {\r\n\t\r\n}\r\n"],
		"ColoursBackgroundsGrp":[0,"group","colours & backgrounds",["BackgroundColour", "BackgroundLinearGradient", "TextColour"]],
		"BackgroundColour": [1, "codeBtn", "background-color", "background-color: DodgerBlue;"],
		"BackgroundLinearGradient":[1,"codeBtn","background-image: linear-gradient","background-image: linear-gradient(to top, green, blue);"],
		"TextColour": [1, "codeBtn", "color (text)", "color: Tomato;"],
		"Comment": [0, "codeBtn", "/*Comment*/", "/* Comment */"],
	},
	"python": {
		"langName": "python",
		"4Spaces": [0, "codeBtn", "4 spaces", "    "],
		"DefFunction": [0, "codeBtn", "def my_function():", "def my_function():\r\n    "],
		"Print": [0, "codeBtn", "output print()", "print(\"\")"],
		"Class": [0, "codeBtn", "class", "class MyClass"],
		"ArithmeticOperators": [0, "group", "Arithmetic Operators", ["Divide", "Remainder", "FloorDivision", "ToThePowerOf"]],
		"Divide": [1, "codeBtn", "divide", " / "],
		"Remainder": [1, "codeBtn", "remainder", " % "],
		"FloorDivision": [1, "codeBtn", "floor division", " // "],
		"ToThePowerOf": [1, "codeBtn", "to the power of", " ** "],
		"MultilineString": [0, "codeBtn", "\"\"\"Multiline String\"\"\"", "\"\"\"\r\n\r\n\"\"\""],
		"Slice": [0, "codeBtn", "Slice [x:y]", "[x:y]"]
	},
	"php": {
		"langName": "🚧php🚧",
		/* logo uses lowercase php, wheras elsewhere they use PHP */
		"PHPTag":[0,"codeBtn","&lt;?php  ?&gt;","<?php\r\n\r\n?>"],
		"Echo":[0,"codeBtn","echo \"Hello World!\";","echo \"Hello World!\";"],
		"DoubleSlashComment":[0,"codeBtn","//single-line comment","//"],
		"HashComment":[0,"codeBtn","#single-line comment","#"],
		"MultilineComment":[0,"codeBtn","/*Multiline comment*/","/* comment */"],
		"var":[0,"codeBtn","$var","$var_name = '';"],
		/* Having a "Coming Soon" btn allows btncode to have clearly incomplete languages, without looking ridiculous in the meantime. Gives us a way of saying "don't worry, there is more coming*/
		"ComingSoon":[0,"group","🚧 Coming Soon",["Array", "Calendar", "Date", "Directory", "Error"]],
		"Array":[1,"group","Array",[]],
		"Calendar":[1,"group","Calendar",[]],
		"Date":[1,"group","Date",[]],
		"Directory":[1,"group","Directory",[]],
		"Error":[1,"group","Error",[]],
		"🎨": [1, "codeBtn", "🎨", "🎨"],
	},
	"CSharp": {
		"langName": "🚧C#🚧",
		"🚧": [0, "codeBtn", "🚧", "🚧"],
		"HelloWorld":[0,"codeBtn","Console.WriteLine Hello World","Console.WriteLine(\"Hello World!\");"],
	},
	"Emoji": {
		/* because why not?*/
		"langName": "Emoji",
		"🚧": [0, "codeBtn", "🚧", "🚧"],
		"🏗": [0, "codeBtn", "🏗", "🏗"],
		"🆕": [0, "codeBtn", "🆕", "🆕"],
		"✏️": [0, "codeBtn", "✏️", "✏️"],
		"🎨": [0, "codeBtn", "🎨", "🎨"],
		"🔔": [0, "codeBtn", "🔔", "🔔"],
		"🔇": [0, "codeBtn", "🔇", "🔇"],
		"🔈": [0, "codeBtn", "🔈", "🔈"],
		"🔉": [0, "codeBtn", "🔉", "🔉"],
		"🔊": [0, "codeBtn", "🔊", "🔊"],
		"⚙️": [0, "codeBtn", "⚙️", "⚙️"],
		"💾": [0, "codeBtn", "💾", "💾"],
		"😄": [0, "codeBtn", "😄", "😄"],
	},
	"MiscSnippets": {
		"langName": "Misc Snippets",
		"LoremIpsum": [0, "codeBtn", "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
		"QuickBrownFox": [0, "codeBtn", "Quick brown fox", "The quick brown fox jumps over the lazy dog."],
		"CharRuler": [0, "codeBtn", "Char ruler", "         1         2         3         4         5         6         7         8         9        10        11        12        13        14        15        16\r\n1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"],
		"digits": [0, "codeBtn", "digits", "0123456789"],
		"alphabet": [0, "codeBtn", "english alphabet", "abcdefghijklmnopqrstuvwxyz"],
		"ALPHABET": [0, "codeBtn", "english ALPHABET", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
	},/*,	

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
		console.log(savedCodeWithGroupsConcept1[allLangs[i]]["langName"]);
		
		//addButtons(clickEventName, buttonClass, buttonTextArray, idPrefix, idSuffix, containerDiv)
		addButtons("languageChange", allLangs[i], [savedCodeWithGroupsConcept1[allLangs[i]]["langName"]], "btn", "", document.getElementById("codeBtns"));
		
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
		//interestingly, this if also means the addition of a langName child within each lang, did not cause any issues to fix up with erroneously trying to create btns for the langName. Unless the first letter of the langName value is 0 the condition is false. Without the if and just the contents always calling here, as well as making hidden buttons at top level you also get a btn for the third letter of the langName which would cause JS errors when clicked.
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

function addToSelect(items, selectId){
	//Pasted in from my tearounder codebase
//<option value="item">item</option>
    var selectElement = document.getElementById(selectId);
    var indexes;
    for (indexes in items){
        selectElement.innerHTML += "<option value=\"" + items[indexes] + "\">" + items[indexes] + "</option>" ;
    }
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
	} else if (lang == "%uD83D%uDEA7php%uD83D%uDEA7"){ //🚧php🚧
		showLangTop("General");
		showLangTop("php");
	} else if (lang == "%uD83D%uDEA7C%23%uD83D%uDEA7"){ //🚧C#🚧
		showLangTop("General");
		showLangTop("CSharp");
	} else if (lang == "C%23"){ //C#
		showLangTop("General");
		showLangTop("CSharp");
	} else if (lang == "Misc%20Snippets"){//Misc Snippets
		showLangTop("General");
		showLangTop("MiscSnippets");
	} else {//all the langs with names that have no spaces or other characters that get escaped, or any other special cases
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
	//this confirm wrapper is here because every now and then I would miss-click on the empty editor button when meaning to go back to the editor from another panel. Todo: it may be better to have a facility for saving the contents of the editor temporarily and switching the empty editor button for a restore contents button until there are say twenty characters in the editor, instead of or as well as the confirm.
	if(confirm("Empty editor?")){
		codeTA.value = "";
	}
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
	hideBottomStuff();
	applyShowClass("styler");
	togglePanelSwitcherBtns("btnStyleBtns");
}
function showBtnMkr(){
	hideBottomStuff();
	applyShowClass("btnMkr");
	togglePanelSwitcherBtns("btnCreateBtn");
	
	const allLangs = Object.keys(savedCodeWithGroupsConcept1);
	addToSelect(allLangs,"addBtnToLang");
}

function addBtnToLangChange(el){
	//the function that runs when the onchange event fires for the select addBtnToLang 
	console.log(el.value);
	if (el.value == "Add to new lang"){
		applyShowClass("newLangInputlbl");
		applyShowClass("newLangInput");
	} else {
		applyHideClass("newLangInputlbl");
		applyHideClass("newLangInput");
	}
}

function makeBtnJS(){
	//groups use "jsKey": [lvlInt, "group", "Text to go on the btn", ["jsKeyForBtn1", "jsKeyForBtn2" etc]]
	//codeBtns use "jsKey": [lvlInt, "codeBtn", "Text to go on the btn", "text to insert"]
	/*	Some examples of what we are making:
	"Span": [1, "codeBtn", "&lt;span&gt;", "<span></span>"],
	
	*/
	//.replace(/[<]/g,"&lt;")
	var outputObj = {};
	var textOnBtn = btnTextInput.value; //need to process input: no < or >
	
	textOnBtn = textOnBtn.replace(/[<]/g,"&lt;");
	textOnBtn = textOnBtn.replace(/[>]/g,"&gt;");
	
	var lastPart = "";
	if(btnType.value == "group"){
		lastPart = [];
	} else if (btnType.value == "codeBtn"){
		lastPart = textToInsert.value;
	} else {
		alert("code pathway not found for that value of btnType");
	}

	outputObj[jsKey.value] = [parseInt(lvlInt.value), btnType.value, textOnBtn, lastPart];
	
	var stringified = JSON.stringify(outputObj);
	alert(stringified.slice(1, stringified.length - 1));
}

function addToSavedCodeObject(){
	var langToAssignTo = "";
	if (addBtnToLang.value == "Add to new lang"){
		if (newLangInput.value == ""){
			alert("Can't add a btn without a lang, but the text box for 'New lang name' seems to be empty, while 'Add to new lang' seems selected.");
			return;
		}
		langToAssignTo = newLangInput.value;
	} else {
		langToAssignTo = addBtnToLang.value;
	}
	console.log("Assigning new btn to: " + langToAssignTo);
	alert("not finished yet");
}

function showSavedCodeObject(){
	
	
	var stringified = JSON.stringify(savedCodeWithGroupsConcept1);
	console.log(savedCodeWithGroupsConcept1);
	//alert(stringified.slice(1, stringified.length - 1));
	alert("It turns out the object is more text than alerts can show, so I used console.log to place them in the console. At least in chrome you can right click the object from the console and select copy object, format a bit more whitespaced than I was coding, but when copied that way is in same order as code - whereas it may show in alphabetic order in the console");
}

function showEditor(){
	hideBottomStuff();
	applyShowClass("codeTA");
	togglePanelSwitcherBtns("btnShowEditor");
}

function showWebDisplayer(){
	hideBottomStuff();
	applyShowClass("webDisplayer");
	togglePanelSwitcherBtns("btnShowWebDisplayer");
}

function showContactInfo(){
	hideBottomStuff();
	applyShowClass("contactInfo");
	togglePanelSwitcherBtns("btnContactInfo");
}

function displayInIframe(){
	//iframeDisplay.src = "google.com";
	//iframeDisplay.srcdoc = codeTA.value;
	//document.getElementById('webDisplayDiv').src = "data:text/html;charset=utf-8," + escape(codeTA.value);
	alert("This btn does not work yet, I have tried a bunch of different solutions but none work!!");
}
function displayInDiv(){
	webDisplayDiv.innerHTML = codeTA.value;
}

function togglePanelSwitcherBtns(hideBtnID){
	let panelSwitchers = ["btnShowEditor", "btnCreateBtn", "btnContactInfo", "btnStyleBtns", "btnShowWebDisplayer"];
	let showThese = panelSwitchers.filter(item => item !== hideBtnID);
	for (index in showThese) {
		applyShowClass(showThese[index]);
	}
	applyHideClass(hideBtnID);
}

function hideBottomStuff(){
	applyHideClass("newLangScrn");
	applyHideClass("btnMkr");
	applyHideClass("styler");
	applyHideClass("codeTA");
	applyHideClass("webDisplayer");
	applyHideClass("contactInfo");
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

function createDownloadFile(){
	var fileName = "renameMe.txt"; //using a default fileName since users can easily spot that and edit it later, and it might be intentional to not think about the filename before download
	if (document.getElementById("fileName").value){
		fileName = document.getElementById("fileName").value;
	}
	
	var mimeType = ""; //no default, since that is more awkward to fix after and they do need to think about it at download creation
	if (document.getElementById("mimeType").value){
		mimeType = document.getElementById("mimeType").value ;
	} else {
		alert("Mime type is needed");
		return;
	}
	
	const file = new Blob(
		[document.getElementById("codeTA").value], //codeTA is the code Text Area
		{ type: mimeType} //type wants the MIME type 
	);
	
	const fileURL = URL.createObjectURL(file);
	
	//create a table row
	const rowElement = document.createElement("tr");
	document.getElementById("downloadsTbody").appendChild(rowElement);
	//create cells within the row
	const cellElement1 = document.createElement("td");
	const cellElement2 = document.createElement("td");
	const cellElement3 = document.createElement("td");
	const cellElement4 = document.createElement("td");
	const cellElement5 = document.createElement("td");
	const cellElement6 = document.createElement("td");
	rowElement.appendChild(cellElement1);
	rowElement.appendChild(cellElement2);
	rowElement.appendChild(cellElement3);
	rowElement.appendChild(cellElement4);
	rowElement.appendChild(cellElement5);
	rowElement.appendChild(cellElement6);
	
	//create new tab link
	const newTabLinkElement = document.createElement("a");
	newTabLinkElement.setAttribute('href', fileURL);
	newTabLinkElement.setAttribute("target", "_blank");
	newTabLinkElement.innerText = "New tab for: " + fileName;
	cellElement1.appendChild(newTabLinkElement);
	//create download link
	const downloadLinkElement = document.createElement("a");
	downloadLinkElement.setAttribute('href', fileURL);
	downloadLinkElement.setAttribute('download', fileName);
	downloadLinkElement.innerText = "Download: " + fileName;
	cellElement2.appendChild(downloadLinkElement);
	//set other table text
	cellElement3.innerText = document.getElementById("fileName").value;
	cellElement4.innerText = mimeType;
	cellElement5.innerText = new Date().toLocaleString();
	//create iframe link
	const iframeLinkElement = document.createElement("a");
	iframeLinkElement.setAttribute('href', fileURL);
	iframeLinkElement.setAttribute('target', "iframeDisplay");
	iframeLinkElement.innerText = "view in iframe: " + fileName;
	cellElement6.appendChild(iframeLinkElement);
}

