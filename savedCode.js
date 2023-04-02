savedCodeWithGroupsConcept1 = {
	"General": {
		"langName": "General",
		"Tab": [0, "codeBtn", "Tab", "	"],
		"NewLine": [0, "codeBtn", "New<br/>Line", "\n"],
		"Symbols": [0, "group", "@<<br/>>$", ["singleQuote", "doubleQuote", "backTick", "at", "lessThanSymbol", "moreThanSymbol", "fslashSymbol", "bslashSymbol", "dollarSymbol", "£", "€", "¥", "©", "≡","×"]],
		"singleQuote": [1, "codeBtn", "'", "'"],
		"doubleQuote": [1, "codeBtn", "\"", "\""], /*just one double quote character (backslashes needed to "escape" the double quote character) */
		"backTick": [1, "codeBtn", "`", "`"],
		"at": [1, "codeBtn", "@", "@"],
		"lessThanSymbol": [1, "codeBtn", "<", "<"],
		"moreThanSymbol": [1, "codeBtn", ">", ">"],
		"fslashSymbol": [1, "codeBtn", "/", "/"],
		"bslashSymbol": [1, "codeBtn", "\\", "\\"],/*just one backslash (extra one in the codebase each time to "escape" the character)*/
		"dollarSymbol": [1, "codeBtn", "$", "$"],
		"£": [1, "codeBtn", "£", "£"],
		"€": [1, "codeBtn", "€", "€"],
		"¥": [1, "codeBtn", "¥", "¥"],
		"©": [1, "codeBtn", "©", "©"],
		"≡":[1,"codeBtn","≡","≡"], /*A mathematical called the "triple bar" or "tribar". Phil has used this within btnCode for the text on the menu open button since it looks exactly like a "hamburger menu" icon.*/
		"×":[1,"codeBtn","×","×"], /*Times symbol. Phil has used this within btnCode for the button text on the menu close button since it looks exactly like a close cross icon.*/
	},
	"HTML": {
		"langName": "HTML",
		"BoilerplateTemplatesGrp":[0,"group","Boilerplate & Templates",["BoilerplateBasic", "OneFileBoilerplate", "FreeCodeCamp"]],
		"BoilerplateBasic": [1, "codeBtn", "Minimal Boilerplate", "<!DOCTYPE html>\n<html>\n	<head>\n		<meta charset=\"utf-8\">\n		<title>Page Title</title>\n	</head>\n	<body>\n		\n	</body>\n</html>"],
		"OneFileBoilerplate": [1, "codeBtn", "Minimal + JS & CSS in body", "<!DOCTYPE html>\n<html>\n	<head>\n		<meta charset=\"utf-8\">\n		<title>Page Title</title>\n	</head>\n	<body>\n		\n		<script>\n			\n		</script>\n		<style>\n			\n		</style>\n	</body>\n</html>"],
		"FreeCodeCamp": [1, "codeBtn", "FreeCodeCamp Boilerplate", "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>HTML 5 Boilerplate</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n  </head>\n  <body>\n	<script src=\"index.js\"></script>\n  </body>\n</html>"],
		"HeadElementsGrp": [0, "group", "Head<br/>Elements", ["Stylesheet", "Script", "Title", "LinkBase", "MetaOther", "MetaCharset", "MetaViewport", "MetaThemeColor", "MetaThemeColorDark", "MetaRobotsNoIndex"]],
		"Title": [1, "codeBtn", "&lt;title&gt; (of the Tab/Page)", "<title>Title</title>"],
		"Stylesheet": [1, "codeBtn", "&lt;link&gt; stylesheet", "<link rel=\"stylesheet\" href=\"main.css\"> </link>"],
		"Script": [1, "codeBtn", "&lt;script&gt; with src=", "<script src=\"btnCodeUi.js\"></script>"],
		"LinkBase": [1, "codeBtn", "&lt;base&gt;(for all links)", "<base href=\"\" target=\"_blank\">"],
		"MetaCharset": [1, "codeBtn", "&lt;meta&gt;<br/>charset", "<meta charset=\"UTF-8\">"],
		"MetaViewport": [1, "codeBtn", "&lt;meta&gt;<br/>viewport", "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"],
		"MetaOther": [1, "codeBtn", "&lt;meta&gt; desc,<br/>keywords, author", "<meta name=\"description\" content=\"\">\n<meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">\n<meta name=\"author\" content=\"Grace Hopper\">"],
		"MetaThemeColor": [1, "codeBtn", "&lt;meta&gt; theme&#8209;color", "<meta name=\"theme-color\" content=\"#4285f4\" />"],
		"MetaRobotsNoIndex": [1, "codeBtn", "&lt;meta&gt; robots noindex", "<meta name=\"robots\" content=\"noindex\">"],
		"MetaThemeColorDark": [1, "codeBtn", "&lt;meta&gt; theme&#8209;color light/dark&nbsp;modes", "<meta name=\"theme-color\" media=\"(prefers-color-scheme: light)\" content=\"cyan\" />\n<meta name=\"theme-color\" media=\"(prefers-color-scheme: dark)\" content=\"black\" />"],
		"LayoutGrp": [0, "group", "Layout", ["Header", "MainElem", "Footer", "Div", "Span", "article"]],
		"Header": [1, "codeBtn", "&lt;header&gt;", "<header>\n	\n</header>"],
		"MainElem": [1, "codeBtn", "&lt;main&gt;", "<main>\n	\n</main>"],
		"Footer": [1, "codeBtn", "&lt;footer&gt;", "<footer>\n	\n</footer>"],
		"Div": [1, "codeBtn", "&lt;div&gt;", "<div>\n	\n</div>"],
		"Span": [1, "codeBtn", "&lt;span&gt;", "<span></span>"],
		"article":[1,"codeBtn","&lt;article&gt;","<article>\n\t<h2>Article Heading Here</h2>\n\t<p>First paragraph here.</p>\n</article>"],
		"TextGrp": [0, "group", "Text", ["Heading1","Heading2","Heading3","Heading6","Paragraph"]],
		"Heading1": [1, "codeBtn", "&lt;h1&gt;", "<h1>Heading</h1>\n"],
		"Heading2": [1, "codeBtn", "&lt;h2&gt;", "<h2>Heading</h2>\n"],
		"Heading3": [1, "codeBtn", "&lt;h3&gt;", "<h3>Heading</h3>\n"],
		"Heading6": [1, "codeBtn", "&lt;h6&gt;", "<h6>Heading</h6>\n"],
		"Paragraph": [1, "codeBtn", "\n&lt;p&gt;", "<p>text</p>\n"],
		"LinksGrp": [0, "group", "Links", ["Link", "LinkNewTab", "ImageLink"]],
		"Link": [1, "codeBtn", "&lt;a&gt; (regular link)", "<a href=\"\">visible text</a>"],
		"LinkNewTab": [1, "codeBtn", "&lt;a&nbsp;_blank&gt; (link new tab)", "<a href=\"url\" target=\"_blank\">link text</a>"],
		"ImageLink": [1, "codeBtn", "(image link)", "<a href=\"\"><img border=\"0\" alt=\"\" src=\"\" width=\"100\" height=\"100\"></a>"],
		"FormsUIGrp": [0, "group", "Forms & UI", ["formTag", "Label","Input", "Datalist", "Button", "Select", "Option", "OptionSelected"]],
		"formTag":[1,"codeBtn","&lt;form&gt;","<form action=\"\" method=\"post\" id=\"\">\n\t\n</form>"],
		"Label": [1, "codeBtn", "&lt;label&gt;", "<label for=\"controlID\">Label text here</label>"],
		"Input": [1, "codeBtn", "&lt;input&gt; type=\"text\"", "<input type=\"text\" id=\"\" name=\"\"/>"],
		"Datalist":[1,"codeBtn","&lt;datalist&gt; ","<datalist id=\"\">\n	<option value=\"val1\"></option>\n	<option value=\"val2\"></option>\n</datalist>"],
		"Button": [1, "codeBtn", "&lt;button&gt;", "<button id=\"\">Text</button>"],
		"Select": [1, "codeBtn", "&lt;select&gt;", "<select id=\"\">\n	\n</select>"],
		"Option": [1, "codeBtn", "&lt;option&gt;", "<option></option>\n"],
		"OptionSelected": [1, "codeBtn", "&lt;option selected&gt;", "<option selected></option>\n"],
		"ImagesGrp":[0,"group","Images &<br/>Graphics",["img", "CanvasTag", "CanvasRect"]],
		"img":[1,"codeBtn","&lt;img&gt;","<img src=\"filepath\" alt=\"Text to show, if cannot show image\">"],
		"CanvasTag":[1,"codeBtn","&lt;canvas&gt;","<canvas id=\"myCanvas\">Your browser does not support the canvas tag.</canvas>\n<script>\n</script>"],
		"CanvasRect":[1,"codeBtn","&lt;canvas&gt; (with rectangle)","<canvas id=\"myCanvas\">Your browser does not support the canvas tag.</canvas>\n<script>\n var c = document.getElementById(\"myCanvas\");\n var ctx = c.getContext(\"2d\");\n ctx.fillStyle = \"#23FF23\";\n ctx.fillRect(0, 34, 80, 100);\n</script>"],
		"ProgrammingGrp":[0,"group","Programming",["HtmlComment","ScriptTag", "NoscriptTag", "NoscriptBrowserWarn"]],
		"ScriptTag":[1,"codeBtn","&lt;script&gt;","<script>\n</script>"],
		"NoscriptTag":[1,"codeBtn","&lt;noscript&gt; (tag only)","<noscript></noscript>"],
		"NoscriptBrowserWarn":[1,"codeBtn","&lt;noscript&gt; (scripts needed text)","<noscript>Looks like scripts are disabled, some functionality will not be able to work</noscript>"],
		"HtmlComment":[1,"codeBtn","&lt;!-- html comment --&gt;","<!-- comment -->"],
		"TableGrp":[0,"group","Tables",["Table"]],
		"Table":[1,"codeBtn","&lt;table&gt;","<table>\n\t<tr>\n\t\t<th>header1</th>\n\t\t<th>header2</th>\n\t\t<th>header3</th>\n\t</tr>\n\t<tr>\n\t\t<td>row1 col1</td>\n\t\t<td>row1 col2</td>\n\t\t<td>row1 col3</td>\n\t</tr>\n\t<tr>\n\t\t<td>row2 col1</td>\n\t\t<td>row2 col2</td>\n\t\t<td>row2 col3</td> \n\t</tr>\n\t\n</table>"],
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
		"Core":[0,"group","Core",["Function", "arrowFunc", "Variable", "Let", "Constant", "IfElse", "SwitchCase", "GetElByID", "querySelector"]],
		"Function": [1, "codeBtn", "Function", "function changeMe1(){\n	\n}"],
		"arrowFunc": [1,"codeBtn","Arrow Function","//define arrow function\nlet hello = \"\";\nhello = (param) => {\n\treturn \"Hello \" + param;\n}\n\n//call the arrow function\ndocument.getElementById(\"demo\").innerHTML = hello(\"world!\");"],
		"Variable": [1, "codeBtn", "var variable", "var someVar = 0;"],
		"Let": [1, "codeBtn", "let variable", "let yourVar = 0;"],
		"Constant": [1, "codeBtn", "constant", "const changeMe1;"],
		"IfElse": [1, "codeBtn", "if else", "if(){\n	\n} else {\n	\n}"],
		"SwitchCase": [1, "codeBtn", "switch case", "switch(expression) {\n	case x:\n		\n		break;\n	case y:\n		\n		break;\n	default:\n	\n}"],
		"For": [1, "codeBtn", "For", "for (let i = 0; i < someAmount; i++) {\n	\n}"],
		"ForKeyInObject": [1, "codeBtn", "ForKeyInObject", "for (keyName in objectName) {\n	\n}"],
		"Break": [1, "codeBtn", "Break", "break;"],
		"GetElByID": [1, "codeBtn", "getElement ById", "document.getElementById(\"codeBtns\")"],
		"querySelector":[1,"codeBtn","querySelector(selector)","document.querySelector(\"selector\")"],
		"Logging":[0,"group","Logging & Commenting",["ConsoleGroup", "ConsoleLog", "jsDocBasic", "/*Comment*/", "//Comment"]],
		"ConsoleGroup": [1, "codeBtn", "ConsoleGroup", "console.group(\"\");\nconsole.groupEnd();"],
		"ConsoleLog": [1, "codeBtn", "ConsoleLog", "console.log();"],
		"jsDocBasic":[1,"codeBtn","JSDoc description","/** description */"],
		"/*Comment*/": [1, "codeBtn", "/*Comment*/", "/* Comment */"],
		"//Comment": [1, "codeBtn", "//Comment", "//Comment"],
		"jsonGrp":[0,"group","JSON",["JSONKeyValue", "JSONKeyObject"]],
		"JSONKeyValue": [1, "codeBtn", "JSON Key:Value", "\"key\": \"value\""],
		"JSONKeyObject": [1, "codeBtn", "JSON Key{Object}", "\"key\": {\n	\n	\n}"],
		"LocalStorageGrp":[0,"group","Local Storage",["saveToLocalStorageFunc", "loadFromLocalStorageFunc"]],
		"saveToLocalStorageFunc":[1,"codeBtn","function saveToLocalStorage","/**\n * Checks if browser supports Storage, and if it does, sets one Local Storage Key and Value\n * @param {string} key \n * @param {string} value \n * @returns true if storage was successful, false (and alerts) if no web storage\n */\nfunction saveToLocalStorage(key,value){ \n\t//checking browser support for Storage (covers both localStorage and sessionStorage)\n\tif (typeof(Storage) !== \"undefined\") { //Storage is there, so we'll save it\n\t\tlocalStorage.setItem(key, value);\n\t\treturn true; //For use in functions that called this function\n\t} else {//No Web Storage support\n\t\t//TODO: is this a good experience??\n\t\talert(\"couldn't save, browser doesn't support local storage\");\n\t\treturn false; //For use in functions that called this function\n\t}\n}"],
		"loadFromLocalStorageFunc":[1,"codeBtn","function: loadFromLocalStorage","/**\n * general purpose localStorage loading function (it is often more useful to have more specific functions for loading particular keys)\n * @param {string} key the string to search for in local storage\n * @returns {string} the value that corresponds with the key, or an empty string if cannot find the key (also logs to console if that is the case)\n */\nfunction loadFromLocalStorage(key){\n\tlet value = localStorage.getItem(key);\n\tif(value == \"\"){\n\t\tconsole.log(`tried to load: ${key} but found nothing`);\n\t\treturn \"\";\n\t} else {\n\t\treturn value;\n\t}\n}"],
	},
	"CSS": {
		"langName": "CSS",
		"mediaQueriesGrp":[0,"group","Media Queries",["MqMinwidth576px", "MqMinwidth768px", "MqMinwidth992px", "MqMinwidth1200px", "PointerFine"]],
		"MqMinwidth576px": [1, "codeBtn", "screen width 576px", "@media only screen and (min-width: 576px) {\n	\n}\n"],
		"MqMinwidth768px": [1, "codeBtn", "screen width 768px", "@media only screen and (min-width: 768px) {\n	\n}\n"],
		"MqMinwidth992px": [1, "codeBtn", "screen width 992px", "@media only screen and (min-width: 992px) {\n	\n}\n"],
		"MqMinwidth1200px": [1, "codeBtn", "screen width 1200px", "@media only screen and (min-width: 1200px) {\n	\n}\n"],
		"PointerFine":[1,"codeBtn","pointer: fine","@media (pointer: fine) {\n	\n}\n"],
		"SelectorsGrp":[0,"group","Selectors",["P", "Button", "Class", "ClassesAnd", "ClassesOr", "NestedClasses", "ByID", "LiNthChild", "LiOddChild", "LiEvenChild", "LiFormula", "LiLastChild", "All"]],
		"P": [1, "codeBtn", "p", "p {\n	\n	\n}\n"],
		"Button": [1, "codeBtn", "button", "button {\n	\n	\n}\n"],
		"Class": [1, "codeBtn", ".class", ".className {\n	\n	\n}\n"],
		"ClassesAnd": [1, "codeBtn", ".class1.class2 (both)", ".class1.class2 {\n	\n	\n}\n"],
		"ClassesOr": [1, "codeBtn", ".class1, .class2 (either)", ".class1, .class2 {\n	\n	\n}\n"],
		"NestedClasses": [1, "codeBtn", ".classParent .classChild (nested)", ".classParent .classChild {\n	\n	\n}\n"],
		"ByID": [1, "codeBtn", "#ID", "#elementID {\n	\n	\n}\n"],
		"LiNthChild":[1,"codeBtn","li:nth-child(2) (2nd li in list)","li:nth-child(2) {\n	\n}\n"],
		"LiOddChild":[1,"codeBtn","li:nth-child(odd) (odd numbered)","li:nth-child(odd) {\n	\n}\n"],
		"LiEvenChild":[1,"codeBtn","li:nth-child(even) (even numbered)","li:nth-child(even) {\n	\n}\n"],
		"LiFormula":[1,"codeBtn","li:nth-child(3n + 1) (by formula)","li:nth-child(3n + 1) {\n\t\n}\n"],
		"LiLastChild":[1,"codeBtn","li:last-child (last li)","li:last-child {\n\t\n}\n"],
		"All":[1,"codeBtn","* (wildcard all)","* {\n\t\n}\n"],
		"ColoursBackgroundsGrp":[0,"group","colours & backgrounds",["BackgroundColour", "BackgroundLinearGradient", "TextColour", "twelveSaturatedColourWheel"]],
		"twelveSaturatedColourWheel":[1,"codeBtn","12 Hue, Saturated colour wheel","/*Imagine a colour wheel with 12 points at equal distances around it like an analogue clock*/\n--hue00: hsl(000, 100%, 50%);\n--hue01: hsl(030, 100%, 50%);\n--hue02: hsl(060, 100%, 50%);\n--hue03: hsl(090, 100%, 50%);\n--hue04: hsl(120, 100%, 50%);\n--hue05: hsl(150, 100%, 50%);\n--hue06: hsl(180, 100%, 50%);\n--hue07: hsl(210, 100%, 50%);\n--hue08: hsl(240, 100%, 50%);\n--hue09: hsl(270, 100%, 50%);\n--hue10: hsl(300, 100%, 50%);\n--hue11: hsl(330, 100%, 50%);"],
		"BackgroundColour": [1, "codeBtn", "background-color", "background-color: DodgerBlue;"],
		"BackgroundLinearGradient":[1,"codeBtn","background-image: linear-gradient","background-image: linear-gradient(to top, green, blue);"],
		"TextColour": [1, "codeBtn", "color (text)", "color: Tomato;"],
		"Comment": [0, "codeBtn", "/*Comment*/", "/* Comment */"],
	},
	"React": {
        "langName": "React",
		"OfficialTutorialGrp":[0,"group","reactjs.org tic&#8209;tac&#8209;toe tutorial",["tutorialSnippet1","tutorialSnippet2", "tutorialSnippetStarterCodeJS", "tutorialSnippetStarterHTML","tutorialSnippetStarterCSS","tutorialSnippet3","tutorialSnippet4","tutorialSnippet5","tutorialSnippet6","tutorialSnippet7","tutorialSnippet8","tutorialSnippet9","tutorialSnippet10","tutorialSnippet11","tutorialSnippet12","tutorialSnippet13","tutorialSnippet14","tutorialSnippet15","tutorialSnippet16","tutorialSnippet17","tutorialSnippet18","tutorialSnippet19","tutorialSnippet20","tutorialSnippet21","tutorialSnippet22"]],
        "tutorialSnippet1": [
            1,
            "codeBtn",
            "Class ... extends React.Component render html",
            "//From the official tutorial at https://reactjs.org/tutorial/tutorial.html\nclass ShoppingList extends React.Component {\n   render() {\n     return (\n       <div className=\"shopping-list\">\n         <h1>Shopping List for {this.props.name}</h1>\n         <ul>\n           <li>Instagram</li>\n           <li>WhatsApp</li>\n           <li>Oculus</li>\n         </ul>\n       </div>\n     );\n   }\n}\n  // Example usage: <ShoppingList name=\"Mark\" />"
        ],
		"tutorialSnippet2":[1,"codeBtn","return React.createElement ...","return React.createElement('div', {className: 'shopping-list'},   React.createElement('h1', /* ... h1 children ... */),   React.createElement('ul', /* ... ul children ... */) );"],
		"tutorialSnippetStarterCodeJS": [
			1,
			"codeBtn",
			"JS/React Starter Code",
			"class Square extends React.Component {\n  render() {\n    return (\n      <button className=\"square\">\n        {/* TODO */}\n      </button>\n    );\n  }\n}\n\nclass Board extends React.Component {\n  renderSquare(i) {\n    return <Square />;\n  }\n\n  render() {\n    const status = 'Next player: X';\n\n    return (\n      <div>\n        <div className=\"status\">{status}</div>\n        <div className=\"board-row\">\n          {this.renderSquare(0)}\n          {this.renderSquare(1)}\n          {this.renderSquare(2)}\n        </div>\n        <div className=\"board-row\">\n          {this.renderSquare(3)}\n          {this.renderSquare(4)}\n          {this.renderSquare(5)}\n        </div>\n        <div className=\"board-row\">\n          {this.renderSquare(6)}\n          {this.renderSquare(7)}\n          {this.renderSquare(8)}\n        </div>\n      </div>\n    );\n  }\n}\n\nclass Game extends React.Component {\n  render() {\n    return (\n      <div className=\"game\">\n        <div className=\"game-board\">\n          <Board />\n        </div>\n        <div className=\"game-info\">\n          <div>{/* status */}</div>\n          <ol>{/* TODO */}</ol>\n        </div>\n      </div>\n    );\n  }\n}\n\n// ========================================\n\nconst root = ReactDOM.createRoot(document.getElementById(\"root\"));\nroot.render(<Game />);\n"
		],
		"tutorialSnippetStarterHTML": [
			1,
			"codeBtn",
			"Starter HTML ",
			"<div id=\"errors\" style=\"\n  background: #c00;\n  color: #fff;\n  display: none;\n  margin: -20px -20px 20px;\n  padding: 20px;\n  white-space: pre-wrap;\n\"></div>\n<div id=\"root\"></div>\n<script>\nwindow.addEventListener('mousedown', function(e) {\n  document.body.classList.add('mouse-navigation');\n  document.body.classList.remove('kbd-navigation');\n});\nwindow.addEventListener('keydown', function(e) {\n  if (e.keyCode === 9) {\n    document.body.classList.add('kbd-navigation');\n    document.body.classList.remove('mouse-navigation');\n  }\n});\nwindow.addEventListener('click', function(e) {\n  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {\n    e.preventDefault();\n  }\n});\nwindow.onerror = function(message, source, line, col, error) {\n  var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';\n  errors.textContent += text + '\\n';\n  errors.style.display = '';\n};\nconsole.error = (function(old) {\n  return function error() {\n    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\\n';\n    errors.style.display = '';\n    old.apply(this, arguments);\n  }\n})(console.error);\n</script>"
		],
		"tutorialSnippetStarterCSS": [
			1,
			"codeBtn",
			"Starter CSS",
			"body {\n  font: 14px \"Century Gothic\", Futura, sans-serif;\n  margin: 20px;\n}\n\nol, ul {\n  padding-left: 30px;\n}\n\n.board-row:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.status {\n  margin-bottom: 10px;\n}\n\n.square {\n  background: #fff;\n  border: 1px solid #999;\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 34px;\n}\n\n.square:focus {\n  outline: none;\n}\n\n.kbd-navigation .square:focus {\n  background: #ddd;\n}\n\n.game {\n  display: flex;\n  flex-direction: row;\n}\n\n.game-info {\n  margin-left: 20px;\n}\n"
		],
		"tutorialSnippet3":[1,"codeBtn","pass a prop called&nbsp;value to Square","return <Square value={i} />;"],
		"tutorialSnippet4":[1,"codeBtn","{this.props.value}","{this.props.value}"],
		"tutorialSnippet5":[1,"codeBtn","onClick","onClick={function() { console.log('click'); }}"],
		"tutorialSnippet6":[1,"codeBtn","onClick arrow syntax","onClick={() => console.log('click')}"], 
		"tutorialSnippet7":[1,"codeBtn","constructor to initialize state","  constructor(props) {\n     super(props);\n     this.state = {\n       value: null,\n     };\n   }"],
		"tutorialSnippet8":[1,"codeBtn","this.state.value","this.state.value"],
		"tutorialSnippet9":[1,"codeBtn","onClick ... setState","onClick={() => this.setState({value: 'X'})}"],
		"tutorialSnippet10":[1,"codeBtn","lift state to Board&nbsp;component","  constructor(props) {\n     super(props);\n     this.state = {\n       squares: Array(9).fill(null),\n     };\n   }"],
		"tutorialSnippet11":[1,"codeBtn","modify Boards renderSquare&nbsp;method to read from squares","  return <Square value={this.state.squares[i]} />;"],
		"tutorialSnippet12":[1,"codeBtn","onClick={() =&gt; this.handleClick(i)}","onClick={() => this.handleClick(i)}"],
		"tutorialSnippet13":[1,"codeBtn","this.props.onClick()","this.props.onClick()"],
		"tutorialSnippet14":[1,"codeBtn","handleClick","  handleClick(i) {\n     const squares = this.state.squares.slice();\n     squares[i] = 'X';\n     this.setState({squares: squares});\n   }"],
		"tutorialSnippet15":[1,"codeBtn","function component","function Square(props) {\n   return (\n     <button className=\"square\" onClick={props.onClick}>\n       {props.value}\n     </button>\n   );\n }"],
		"tutorialSnippet16":[1,"codeBtn","xIsNext: true,","xIsNext: true,"],
		"tutorialSnippet17":[1,"codeBtn","X or O depends on&nbsp;xIsNext","squares[i] = this.state.xIsNext ? 'X' : 'O';"],
		"tutorialSnippet18":[1,"codeBtn","flip&nbsp;value of xIsNext","xIsNext: !this.state.xIsNext,"],
		"tutorialSnippet19":[1,"codeBtn","Next player message","const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');"],
		"tutorialSnippet20":[1,"codeBtn","calculateWinner helper function","function calculateWinner(squares) {\n  const lines = [\n    [0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [2, 4, 6],\n  ];\n  for (let i = 0; i < lines.length; i++) {\n    const [a, b, c] = lines[i];\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n  return null;\n"],
		"tutorialSnippet21":[1,"codeBtn","display&nbsp;winner or next text","    const winner = calculateWinner(this.state.squares);\n    let status;\n    if (winner) {\n      status = 'Winner: ' + winner;\n    } else {\n      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');\n    }"],
		"tutorialSnippet22":[1,"codeBtn","ignore clicks after&nbsp;game&nbsp;won or&nbsp;square&nbsp;filled ","    if (calculateWinner(squares) || squares[i]) {\n      return;\n    }"],
		/*Todo: snippets for the "Adding Time Travel" section. (I decided after getting to snippet 22 that everything else was outside of scope for the current day - this is enough to make the working tic tac toe game, and probably the biggest batch of btns I have ever done)*/
		"letsreactWithoutNpm": [
			0,
			"group",
			"letsreact.org React app without&nbsp;npm",
			["letsreactWithoutNpm1","letsreactWithoutNpm2","letsreactWithoutNpm3","letsreactWithoutNpm3b","letsreactWithoutNpm4","letsreactWithoutNpm5","letsreactWithoutNpm6"]
		],
		"letsreactWithoutNpm1": [
			1,
			"codeBtn",
			"simple HTML file",
			"<html>\n    <head>\n        <title>Let's React without npm</title>\n        \n    </head>\n    <body>\n        \n    </body>\n</html>"
		],
		"letsreactWithoutNpm2": [
			1,
			"codeBtn",
			"import&nbsp;React library (version 17)",
			"<!-- Load React Libraries -->\n<!-- Note: 1) React version numbers in this snippet match tutorial not latest avaiable 2)when deploying, replace \"development.js\" with \"production.min.js\". -->\n<script src=\"https://unpkg.com/react@17/umd/react.development.js\" crossorigin></script>\n<script src=\"https://unpkg.com/react-dom@17/umd/react-dom.development.js\" crossorigin></script>"
		],
		"letsreactWithoutNpm3": [
			1,
			"codeBtn",
			"Placeholder root div",
			"<div id=\"root\"></div>"
		],
		"letsreactWithoutNpm3b": [
			1,
			"codeBtn",
			"(extra&nbsp;snippet) body&#8209;end&nbsp;script&nbsp;tag for&nbsp;steps&nbsp;4+5&nbsp;to&nbsp;go",
			"<!-- This is embedded JavaScript (for the end of the body tag). You could also place this in a separate .js file -->\n<script>\n    window.onload = function()\n    {\n        //next steps will go here\n    };\n</script>"
		],
		"letsreactWithoutNpm4": [
			1,
			"codeBtn",
			"Create a React Component",
			"class HelloClass extends React.Component\n{\n    render()\n    {\n        return React.createElement('div', null, 'React without npm');\n    }\n}"
		],
		"letsreactWithoutNpm5": [
			1,
			"codeBtn",
			"Call React Component",
			"ReactDOM.render(\n    React.createElement(HelloClass, null, null),\n    document.getElementById('root')\n);"
		],
		"letsreactWithoutNpm6": [
			1,
			"codeBtn",
			"Complete HTML Document",
			"<html>\n    <head>\n        <title>Let's React without npm</title>\n        <!– Load React Libraries –>\n        <!– Note: when deploying, replace \"development.js\" with \"production.min.js\". –>\n        <script src=\"https://unpkg.com/react@17/umd/react.development.js\" crossorigin></script>\n        <script src=\"https://unpkg.com/react-dom@17/umd/react-dom.development.js\" crossorigin></script>\n    </head>\n    <body>\n        <div id=\"root\"></div>\n        <!– This is embedded JavaScript (for the end of the body tag). You could also place this in a separate .js file –>\n        <script>\n            window.onload = function()\n            {\n                class HelloClass extends React.Component\n                {\n                    render()\n                    {\n                        return React.createElement('div', null, 'React without npm');\n                    }\n                }\n                ReactDOM.render(\n                    React.createElement(HelloClass, null, null),\n                    document.getElementById('root')\n                );\n            };\n        </script>\n    </body>\n</html>"
		],
		"importReact": [
			0,
			"codeBtn",
			"import&nbsp;React library (version 18)",
			"<!-- Load React Libraries -->\n<!-- Note: 1) Check version numbers 2)when deploying, replace \"development.js\" with \"production.min.js\". -->\n<script src=\"https://unpkg.com/react@18/umd/react.development.js\" crossorigin></script>\n<script src=\"https://unpkg.com/react-dom@18/umd/react-dom.development.js\" crossorigin></script>"
		],
		"babelStandalone": [
			0,
			"codeBtn",
			"Babel Standalone (convert&nbsp;JSX&nbsp;in&nbsp;browser)",
			"<!-- Load @babel/standalone - a way to have Babel running in the browser rather than needing to build every time, https://babeljs.io/docs/en/babel-standalone#docsNav -->\n<script src=\"https://unpkg.com/@babel/standalone/babel.min.js\"></script>"
		]
	},
	"npm": {
        "langName": "npm",
		"installLatestNpm":[0,"codeBtn","install latest npm (cmd&nbsp;line)","npm install -g npm"],
        "checkNodeVersion": [
            0,
            "codeBtn",
            "check node version (cmd)",
            "node -v"
        ],
		"checkNpmVersion":[0,"codeBtn","check npm version (cmd)","npm -v"]
    },
	"commandPrompt": {
        "langName": "🚧Command Prompt (CMD)",
        "dirGrp": [
            0,
            "group",
            "show DIRectories dir",
            ["justDir", "dirCDrive"]
        ],
		"justDir": [
			1,
			"codeBtn",
			"in&nbsp;current directory dir",
			"dir"
		],
		"dirCDrive": [
			1,
			"codeBtn",
			"top of C&nbsp;drive dir C:\\",
			"dir C:\\"
		]

    },
	"python": {
		"langName": "🚧python🚧",
		"4Spaces": [0, "codeBtn", "4 spaces", "    "],
		"DefFunction": [0, "codeBtn", "def my_function():", "def my_function():\n    "],
		"Print": [0, "codeBtn", "output print()", "print(\"\")"],
		"Class": [0, "codeBtn", "class", "class MyClass"],
		"ArithmeticOperators": [0, "group", "Arithmetic Operators", ["Divide", "Remainder", "FloorDivision", "ToThePowerOf"]],
		"Divide": [1, "codeBtn", "divide", " / "],
		"Remainder": [1, "codeBtn", "remainder", " % "],
		"FloorDivision": [1, "codeBtn", "floor division", " // "],
		"ToThePowerOf": [1, "codeBtn", "to the power of", " ** "],
		"MultilineString": [0, "codeBtn", "\"\"\"Multiline String\"\"\"", "\"\"\"\n\n\"\"\""],
		"Slice": [0, "codeBtn", "Slice [x:y]", "[x:y]"]
	},
	"php": {
		"langName": "🚧php🚧",
		/* logo uses lowercase php, wheras elsewhere they use PHP */
		"PHPTag":[0,"codeBtn","&lt;?php  ?&gt;","<?php\n\n?>"],
		"Echo":[0,"codeBtn","echo \"Hello World!\";","echo \"Hello World!\";"],
		"DoubleSlashComment":[0,"codeBtn","//single-line comment","//"],
		"HashComment":[0,"codeBtn","#single-line comment","#"],
		"MultilineComment":[0,"codeBtn","/*Multiline comment*/","/* comment */"],
		"var":[0,"codeBtn","$var","$var_name = '';"],
		"mySQLConnect": [
			0,
			"codeBtn",
			"connect to MySQL",
			"$mysqli = mysqli_connect('localhost', 'DATABASE_USERNAME', 'DATABASE_PASSWORD', 'DATABASE_NAME');"
		],
		"mySQLCheckConnection": [
			0,
			"codeBtn",
			"test MySQL connection",
			"if (mysqli_connect_errno()) {\n\texit('Failed to connect to MySQL: ' . mysqli_connect_error());\n}"
		],
		"Array":[0,"group","Array",["arrayKeys","arrayKeysValueStrict","arrayKeysValueNonStrict"]],
		"arrayKeys": [
			1,
			"codeBtn",
			"get all keys of an array array_keys($array)",
			"array_keys($array)"
		],
		"arrayKeysValueStrict": [
			1,
			"codeBtn",
			"get&nbsp;keys&nbsp;with&nbsp;given&nbsp;value (type-strict) array_keys($array, \"value\", true)",
			"array_keys($array, \"value\", true)"
		],
		"arrayKeysValueNonStrict": [
			1,
			"codeBtn",
			"get&nbsp;keys&nbsp;with&nbsp;given&nbsp;value (not type-strict) array_keys($array, \"value\", false)",
			"array_keys($array, \"value\", false)"
		],
		/* Having a "Coming Soon" btn allows btncode to have clearly incomplete languages, without looking ridiculous in the meantime. Gives us a way of saying "don't worry, there is more coming*/
		"ComingSoon":[0,"group","🚧 Coming Soon",[ "Calendar", "Date", "Directory", "Error"]],
		"Calendar":[1,"group","Calendar",[]],
		"Date":[1,"group","Date",[]],
		"Directory":[1,"group","Directory",[]],
		"Error":[1,"group","Error",[]],
		"🎨": [1, "codeBtn", "🎨", "🎨"],
	},
	"Java": {
		"langName": "🚧Java🚧",
		"infoLine": "",
		"class":[0,"codeBtn","public class MyClass","public class MyClass {\n    \n\n}"],
		"main":[0,"codeBtn","public static void main","public static void main(String... args) {\n\t\n}"],
		"println":[0,"codeBtn","System.out.println","System.out.println(\"Hello, World!\");"]
	},
	"CSharp": {
		"langName": "🚧C#🚧",
		"🚧": [0, "codeBtn", "🚧", "🚧"],
		"MSTutorial": [
			0,
			"group",
			"Snippets&nbsp;from Official Tutorial",
			["MSTutorial1",]
		],
		"MSTutorial1":[1,"codeBtn","Console.WriteLine Hello World","Console.WriteLine(\"Hello World!\");"],
	},
	/* commented to limit the number of work in progress langs on the UI
	"Ada": {
		"langName": "🚧Ada🚧",
		"infoLine": "(Phil is adding this gradually as he learns this language)",
		"withGrp":[0,"group","with",["withText_IO"]],
		"withText_IO":[1,"codeBtn","with Ada.Text_IO;","with Ada.Text_IO;"],
		"procedure":[0,"codeBtn","procedure","procedure Hello is\nbegin\n\t\t\nend Hello;"],
		"Put_Line":[0,"codeBtn","Put_Line","Put_Line (\"Hello, World!\");"]
	},*/
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
		"🚀":[0,"codeBtn","🚀","🚀"],
	},
	"MiscSnippets": {
		"langName": "Misc Snippets",
		"LoremIpsum": [0, "codeBtn", "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
		"QuickBrownFox": [0, "codeBtn", "Quick brown fox", "The quick brown fox jumps over the lazy dog."],
		"CharRuler": [0, "codeBtn", "Char ruler", "         1         2         3         4         5         6         7         8         9        10        11        12        13        14        15        16\n1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"],
		"digits": [0, "codeBtn", "digits", "0123456789"],
		"alphabet": [0, "codeBtn", "english alphabet", "abcdefghijklmnopqrstuvwxyz"],
		"ALPHABET": [0, "codeBtn", "english ALPHABET", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
		"userStory": [0, "codeBtn", "As a user I&nbsp;want&nbsp;...", "As a user I want to be able to xyz so that I can ..."],
		"userStoryMarkdown":[0,"codeBtn","User Story (markdown)","### User Story\nAs a abc I want to be able to xyz so that I can ...\n\n### Definition of done\n - \n - "],
	},
	"AddBtnsToMe": {
        "langName": "🚧Add&nbsp;to&nbsp;me🚧"
    }/*,	

	"MySQL": {
		
	},
	"QBASIC": {
		
	},*/
}