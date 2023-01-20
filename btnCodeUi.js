
/* Replacement for savedCode, which has a format that does not allow for groups within langs or any other data. It also created some limitations on the button text that are probably not ideal

concept 1: all codeBtns and codeGroupBtns of a lang (including codeBtns only to be shown after clicking a codeGroupBtn) are nested directly in the lang with keys that do not need to have meaning within code. Values are always an array [int displayNestLevel, str codeBtn/Group, str displayText, either str insertValue OR [codeBtnKeys]]
opened groups would probably need to have a flag in the data to show that it is open - not sure if groups would need that to begin with and set flag to false or just use lack of flag as false
*/
var savedCodeWithGroupsConcept1 = {
	"General": {
		"langName": "General",
		"Tab": [0, "codeBtn", "Tab", "	"],
		"NewLine": [0, "codeBtn", "New<br/>Line", "\r\n"],
		"Symbols": [0, "group", "@<<br/>>$", ["singleQuote", "doubleQuote", "backTick", "at", "lessThanSymbol", "moreThanSymbol", "fslashSymbol", "bslashSymbol", "dollarSymbol", "poundSymbol", "euroSymbol", "yenSymbol", "copyrightSymbol"]],
		"singleQuote": [1, "codeBtn", "'", "'"],
		"doubleQuote": [1, "codeBtn", "\"", "\""],
		"backTick": [1, "codeBtn", "`", "`"],
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
		"LocalStorageGrp":[0,"group","Local Storage",["SaveToLocalStorageFunc"]],
		"SaveToLocalStorageFunc":[1,"codeBtn","function: saveToLocalStorage","function saveToLocalStorage(key,value){ \r\n\t/*Returns true if successful, alerts if not*/\r\n\t//Before using web storage, check browser support for Storage (covers both localStorage and sessionStorage)\r\n\tif (typeof(Storage) !== \"undefined\") {\r\n\t//Storage is there, so we'll save it\r\n\t\tlocalStorage.setItem(key, value);\r\n\t\treturn true; //lets us display a relevant success message or carry on doing things\r\n\t} else {//No Web Storage support\r\n\t\t//TODO: is this a good experience??\r\n\t\talert(\"couldn't save, browser doesn't support local storage\");\r\n\t\treturn false;\r\n\t}\r\n}"],
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
	"React": {
        "langName": "🚧React🚧",
		"OfficialTutorialGrp":[0,"group","reactjs.org tutorial",["tutorialSnippet1","tutorialSnippet2","tutorialSnippet3","tutorialSnippet4","tutorialSnippet5","tutorialSnippet6","tutorialSnippet7","tutorialSnippet8","tutorialSnippet9","tutorialSnippet10","tutorialSnippet11","tutorialSnippet12","tutorialSnippet13","tutorialSnippet14","tutorialSnippet15","tutorialSnippet16","tutorialSnippet17","tutorialSnippet18","tutorialSnippet19","tutorialSnippet20","tutorialSnippet21","tutorialSnippet22"]],
        "tutorialSnippet1": [
            1,
            "codeBtn",
            "Class ... extends React.Component render html",
            "//From the official tutorial at https://reactjs.org/tutorial/tutorial.html\r\nclass ShoppingList extends React.Component {\r\n   render() {\r\n     return (\r\n       <div className=\"shopping-list\">\r\n         <h1>Shopping List for {this.props.name}</h1>\r\n         <ul>\r\n           <li>Instagram</li>\r\n           <li>WhatsApp</li>\r\n           <li>Oculus</li>\r\n         </ul>\r\n       </div>\r\n     );\r\n   }\r\n}\r\n  // Example usage: <ShoppingList name=\"Mark\" />"
        ],
		"tutorialSnippet2":[1,"codeBtn","return React.createElement ...","return React.createElement('div', {className: 'shopping-list'},   React.createElement('h1', /* ... h1 children ... */),   React.createElement('ul', /* ... ul children ... */) );"],
		"tutorialSnippet3":[1,"codeBtn","pass a prop called&nbsp;value to Square","return <Square value={i} />;"],
		"tutorialSnippet4":[1,"codeBtn","{this.props.value}","{this.props.value}"],
		"tutorialSnippet5":[1,"codeBtn","onClick","onClick={function() { console.log('click'); }}"],
		"tutorialSnippet6":[1,"codeBtn","onClick arrow syntax","onClick={() => console.log('click')}"], 
		"tutorialSnippet7":[1,"codeBtn","constructor to initialize state","  constructor(props) {\r\n     super(props);\r\n     this.state = {\r\n       value: null,\r\n     };\r\n   }"],
		"tutorialSnippet8":[1,"codeBtn","this.state.value","this.state.value"],
		"tutorialSnippet9":[1,"codeBtn","onClick ... setState","onClick={() => this.setState({value: 'X'})}"],
		"tutorialSnippet10":[1,"codeBtn","lift state to Board&nbsp;component","  constructor(props) {\r\n     super(props);\r\n     this.state = {\r\n       squares: Array(9).fill(null),\r\n     };\r\n   }"],
		"tutorialSnippet11":[1,"codeBtn","modify Boards renderSquare&nbsp;method to read from squares","  return <Square value={this.state.squares[i]} />;"],
		"tutorialSnippet12":[1,"codeBtn","onClick={() =&gt; this.handleClick(i)}","onClick={() => this.handleClick(i)}"],
		"tutorialSnippet13":[1,"codeBtn","this.props.onClick()","this.props.onClick()"],
		"tutorialSnippet14":[1,"codeBtn","handleClick","  handleClick(i) {\r\n     const squares = this.state.squares.slice();\r\n     squares[i] = 'X';\r\n     this.setState({squares: squares});\r\n   }"],
		"tutorialSnippet15":[1,"codeBtn","function component","function Square(props) {\r\n   return (\r\n     <button className=\"square\" onClick={props.onClick}>\r\n       {props.value}\r\n     </button>\r\n   );\r\n }"],
		"tutorialSnippet16":[1,"codeBtn","xIsNext: true,","xIsNext: true,"],
		"tutorialSnippet17":[1,"codeBtn","X or O depends on&nbsp;xIsNext","squares[i] = this.state.xIsNext ? 'X' : 'O';"],
		"tutorialSnippet18":[1,"codeBtn","flip&nbsp;value of xIsNext","xIsNext: !this.state.xIsNext,"],
		"tutorialSnippet19":[1,"codeBtn","Next player message","const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');"],
		"tutorialSnippet20":[1,"codeBtn","calculateWinner helper function","function calculateWinner(squares) {\r\n  const lines = [\r\n    [0, 1, 2],\r\n    [3, 4, 5],\r\n    [6, 7, 8],\r\n    [0, 3, 6],\r\n    [1, 4, 7],\r\n    [2, 5, 8],\r\n    [0, 4, 8],\r\n    [2, 4, 6],\r\n  ];\r\n  for (let i = 0; i < lines.length; i++) {\r\n    const [a, b, c] = lines[i];\r\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\r\n      return squares[a];\r\n    }\r\n  }\r\n  return null;\r\n"],
		"tutorialSnippet21":[1,"codeBtn","display&nbsp;winner or next text","    const winner = calculateWinner(this.state.squares);\r\n    let status;\r\n    if (winner) {\r\n      status = 'Winner: ' + winner;\r\n    } else {\r\n      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');\r\n    }"],
		"tutorialSnippet22":[1,"codeBtn","ignore clicks after&nbsp;game&nbsp;won or&nbsp;square&nbsp;filled ","    if (calculateWinner(squares) || squares[i]) {\r\n      return;\r\n    }"],
		/*Todo: snippets for the "Adding Time Travel" section. (I decided after getting to snippet 22 that everything else was outside of scope for the current day - this is enough to make the working tic tac toe game, and probably the biggest batch of btns I have ever done)*/
	},
	"python": {
		"langName": "🚧python🚧",
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
	"Java": {
		"langName": "🚧Java🚧",
		"infoLine": "",
		"class":[0,"codeBtn","public class MyClass","public class MyClass {\r\n    \r\n\r\n}"],
		"main":[0,"codeBtn","public static void main","public static void main(String... args) {\r\n\t\r\n}"],
		"println":[0,"codeBtn","System.out.println","System.out.println(\"Hello, World!\");"]
	},
	"CSharp": {
		"langName": "🚧C#🚧",
		"🚧": [0, "codeBtn", "🚧", "🚧"],
		"HelloWorld":[0,"codeBtn","Console.WriteLine Hello World","Console.WriteLine(\"Hello World!\");"],
	},
	/* commented to limit the number of work in progress langs on the UI
	"Ada": {
		"langName": "🚧Ada🚧",
		"infoLine": "(Phil is adding this gradually as he learns this language)",
		"withGrp":[0,"group","with",["withText_IO"]],
		"withText_IO":[1,"codeBtn","with Ada.Text_IO;","with Ada.Text_IO;"],
		"procedure":[0,"codeBtn","procedure","procedure Hello is\r\nbegin\r\n\t\t\r\nend Hello;"],
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
	},
	"MiscSnippets": {
		"langName": "Misc Snippets",
		"LoremIpsum": [0, "codeBtn", "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
		"QuickBrownFox": [0, "codeBtn", "Quick brown fox", "The quick brown fox jumps over the lazy dog."],
		"CharRuler": [0, "codeBtn", "Char ruler", "         1         2         3         4         5         6         7         8         9        10        11        12        13        14        15        16\r\n1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"],
		"digits": [0, "codeBtn", "digits", "0123456789"],
		"alphabet": [0, "codeBtn", "english alphabet", "abcdefghijklmnopqrstuvwxyz"],
		"ALPHABET": [0, "codeBtn", "english ALPHABET", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
		"userStory": [0, "codeBtn", "As a user I&nbsp;want&nbsp;...", "As a user I want to be able to xyz so that I can ..."],
		"userStoryMarkdown":[0,"codeBtn","User Story (markdown)","### User Story\r\nAs a abc I want to be able to xyz so that I can ...\r\n\r\n### Definition of done\r\n - \r\n - "],
	},
	"AddBtnsToMe": {
        "langName": "🚧Add&nbsp;to&nbsp;me🚧"
    }/*,	

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
	
	//make btns for all of the langs
	showLangBtns();
	
	//if the clipboard permission is there, draw a btn for Copy all from editor
	console.log("Checking permissions for clipboard-write:");
	navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
		console.log(result);
		console.log("Permission: " + result.state);
		if(result.state === "granted"){
			drawBtn("btnCopyAllFromEditor", "", "Copy all from editor", elValueToClipboard, ["codeTA"], "afterbegin", document.getElementById("otherControlBtns"))
		}
		console.groupEnd();
	});

	loadStyle(); //attempt to load styles into the editable <style> from localStorage
	
	//Check if PostHog has been allowed, and show the relevant button and message
	if(loadFromLocalStorage("usePostHog") == "true"){
		//if PostHog flag is set to "true" show the disable btn
		applyShowClass("btnPostHogOff");
		//show a thanks message
		applyShowClass("thanksForUsingPostHogText");
	} else {
		//if not then show the enable btn
		applyShowClass("btnPostHogOn");
		//show the default message about PostHog
		applyShowClass("pleaseUsePostHogText");
	}

	//replace the paste event for the styler with one that pastes plain text. Done here so that it is only done once without needing to remove it or store that we have done it.
	//adapted from the example at https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
	const target = document.querySelector('#styleyStyle'); //document.querySelector(querySelection);
	target.addEventListener('paste', (event) => {
		event.preventDefault();

		let paste = (event.clipboardData || window.clipboardData).getData('text/plain'); //NOTE WHERE THE BRACKETS ARE!!
		const selection = window.getSelection();
		if (!selection.rangeCount) return;
		selection.deleteFromDocument();
		selection.getRangeAt(0).insertNode(document.createTextNode(paste));
		selection.collapseToEnd();
	});

	console.groupEnd();
}
//Coder beware: This func (and the UX change it was added to help create) introduces a new meaning of "LangBtn": a button with a name of a coding language on it that triggers showing the code btns (previouslty called LangBtns) for that particular language.
function showLangBtns(){
	console.groupCollapsed("showLangBtns");
	
	const allLangs = Object.keys(savedCodeWithGroupsConcept1);
	console.log(allLangs);
	
	document.getElementById("codeBtns").innerHTML = "";
	
	let btnID = "";
	for (i in allLangs){
		console.log(savedCodeWithGroupsConcept1[allLangs[i]]["langName"]);
		
		//for ref from createLangDescendantBtn
		//drawBtn("btn" + lang + btnKey, btnClass, btnText, langDescendantClick, [btnKey], position, elRelativeTo)

		btnID = "btn" + allLangs[i];
		drawBtn(btnID, allLangs[i] + " langBtn", savedCodeWithGroupsConcept1[allLangs[i]]["langName"], languageChange, [allLangs[i]], "beforeend", document.getElementById("codeBtns"));
	}
	console.groupEnd;
}

function languageChange(lang){
	console.group("languageChange");
	console.log(lang);
	
	codeBtns.innerHTML = "";
	
	//Add a button that can show the languages again
	drawBtn("btnChangeLang", "PickLang", "Change Lang", showLangBtns, [], "afterbegin", codeBtns)

	//remove any 🚧 (used to signify to users the language only has a limited amount of btns in btnCode)
	lang = lang.replaceAll("%uD83D%uDEA7", "");

	if(lang == "General"){
		showLangTop("General");
	} else {//all the langs that have not been given special cases		
		showLangTop("General");
		showLangTop(lang);
	}
	
	console.groupEnd();
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
	//var btnType = ""; //todo: linter shows these never get used. Presumably was thinking of using them in the loop for some purpose, but I have no idea right now!
	//var btnClass = "";
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

/**
 * Draws a btn, in a position defined in the position param in relation to an element in the elRelativeTo param
 * @param {string} id <button id=""
 * @param {string} btnClass <button class=""
 * @param {string} btnText innerHTML
 * @param {Function} clickFunc function to run in the click event (pass the actual function, not the string of the name)
 * @param {array} clickArgs args for the function, in an array
 * @param {string} position 
 *  There are four acceptable inputs for the "position" param, directly from the Element Web API, setting which side of the opening or closing tag of the element you are placing the new btn in relation to:
 * 
 *  	'beforebegin': Before the element in elRelativeTo itself. ("before" the "begin" tag)
 * 		<newBtn></newBtn><elRelativeTo></elRelativeTo>
 *
 *  	'afterbegin': Just inside the element in elRelativeTo, before its first child. ("after" the "begin" tag)
 * 		<elRelativeTo><newBtn></newBtn><siblingOfNewBtn/></elRelativeTo>
 *
 *  	'beforeend': Just inside the element in elRelativeTo, after its last child. ("before" the "end" tag)
 * 		<elRelativeTo><siblingOfNewBtn/><newBtn></newBtn></elRelativeTo>
 * 	
 *  	'afterend': After the element in elRelativeTo itself. ("after" the "end" tag)
 * 		<elRelativeTo></elRelativeTo><newBtn></newBtn>
 * @param {element} elRelativeTo an element to position the new btn next to or within
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
/**
 * used in eventlisteners for elements created via JS, to get round the issue of passing functions in at element creation, with their params, but without calling those functions at the moment.
 * @param {*} callback 
 * @param {*} args 
 */
function runEvent(callback, args){
	callback.apply(this, args);
}


/**
 * Finds a select element by ID and adds options from the strings passed in items. DOES NOT EMPTY FIRST. Consider setupSelect if that is needed. 
 * @param {Array<string>} items 
 * @param {ID} selectId 
 */
function addToSelect(items, selectId){
	//Pasted in from my tearounder codebase
//<option value="item">item</option>
    var selectElement = document.getElementById(selectId);
    var indexes;
    for (indexes in items){
        selectElement.innerHTML += "<option value=\"" + items[indexes] + "\">" + items[indexes] + "</option>" ;
    }
}
/**
 * Finds a select element by ID, empties it, and refills with defaultOptions showing first, followed by extraOptions
 * @param {id} selectID 
 * @param {Array<string>} defaultOptions 
 * @param {Array<string>} extraOptions 
 */
function setupSelect(selectID, defaultOptions, extraOptions){
	let options = defaultOptions;
	options = options.concat(extraOptions);
	document.getElementById(selectID).innerHTML = ""; //wipe before filling, to prevent adding a copy of the list to an existing copies each time user switches tab
	addToSelect(options, selectID);
}

/**
 * Takes the value of an element (such as the value of a textarea), and adds to clipboard
 * Requires the 'clipboard-write' permission, but we check for that in pageLoad before drawing any button that calls this
 * 
*/
function elValueToClipboard(elementID){
	//Todo: could use this for more copy to clipboard buttons, say on the styler or the add btn JSON viewer
	//console.group("Attempting to copy:");
	//console.log(document.getElementById(id));
	//console.log(id);
	//console.log(document.getElementById(id).value);
	navigator.clipboard.writeText(document.getElementById(elementID).value);
	//console.groupEnd();
}
function makeCode(key){
	console.group("makeCode: " + key);
	//get the button that was clicked
	var btnClicked = event.target || event.srcElement; //linter in VS Code marks parts of this line as deprecated: event is still in use according to MDN and I believe the || event.srcElement part is there for backwards compatibility with IE, probably not strictly necy for btnCode since there is no real requirement for IE support, but I don't think this line can hurt
	//get the lang from the class
	console.log(btnClicked.className);
	//get the text
	console.log(savedCode[btnClicked.className][key]);
	
	//insertTextAtCursor(el, text)
	insertTextAtCursor(codeTA, savedCode[btnClicked.className][key]);
	
	console.groupEnd();
}
/**
 * inserts text to where the cursor is inside a text area (possibly inputs as well, but that is untested)
 * preserves coding indentation provided that indentation is consistent per line (ie either spaces or tabs but not a mix)
 * @param {*} el 
 * @param {*} text 
 */
function insertTextAtCursor(el, text) {
    /*I had no idea how to find the cursor so searched online and got an entire function for inserting text at a cursor, it didn't account for code whitespace conventions though:
	https://stackoverflow.com/questions/7404366/how-do-i-insert-some-text-where-the-cursor-is

	Notes:
	Seems that this solution has to account for browser differences - this is what the top level if test is about

	Stuff I did not recognise:
	ownerDocument: https://www.w3schools.com/jsref/prop_node_ownerdocument.asp
	selectionStart

	*/
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
function emptyEditor(){
	//this confirm wrapper is here because every now and then I would miss-click on the empty editor button when meaning to go back to the editor from another panel. Todo: it may be better to have a facility for saving the contents of the editor temporarily and switching the empty editor button for a restore contents button until there are say twenty characters in the editor, instead of or as well as the confirm.
	if(confirm("Empty editor?")){
		codeTA.value = "";
	}
}

/**
 * toggles the browser between full screen and not full screen
 */
function toggleFullscreen(){
	if(is_fullscreen()){
		closeFullscreen();
	} else {
		openFullscreen();
	}
}
/**
 * shorthand for document.fullscreenElement != null
 * true if fullscreen
 * false if not fullscreen
 * @returns 
 */
function is_fullscreen(){
    return document.fullscreenElement != null;
}
/**
 * opens the browser in full screen - particularly wanted on mobile so that we have a bit more screen to work with
 */
function openFullscreen() {
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
/**
 * Makes the browser exit from full screen.
 * Limitation: only works if opened to full screen via our JS and not via f11
 */
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
	//the standard main view change stuff
	hideBottomStuff();
	applyShowClass("btnMkr");
	togglePanelSwitcherBtns("btnCreateBtn");

	//Prototype 1
	setupSelect("addBtnToLang", ["Add to new lang"], Object.keys(savedCodeWithGroupsConcept1)); //todo: fragile code! if "Add to new lang" altered, you must update function addBtnToLangChange to match!

	//Prototype 2
	setupSelect("btnMkrProto2EditLangChoice", [], Object.keys(savedCodeWithGroupsConcept1));
}
/**
 * made for onclicks within btnMkrProto2 that "take users to" the next "view" of the prototype guiding them through making btns. 
 * ie show the next step, hide the previous step, do any loading thats needs to be done between
 * @param {string} viewID
 */
function btnMkrProto2GoToView(viewID){
	//get all the view divs (relies on me sticking to the good nesting pattern in the HTML, but that seems more likely than me remembering to update a hardcoded list of view IDs)
	let views = [];
	const nodeList = document.querySelectorAll("#btnMkrProto2Steps div");
	for (let i = 0; i < nodeList.length; i++) {
		views.push(nodeList[i].id);
	}
	
	let hideIDs = views.filter(item => item !== viewID);
	let showIDs = [viewID];
	if (viewID != "btnMkrProto2Step1"){
		showIDs[1] = "btnMkrProto2StartAgain";
	} else {
		hideIDs.push("btnMkrProto2StartAgain");
	}
	hideShow(hideIDs, showIDs);
}
/**
 * @param {array<string>} hideIDs ids of elements to hide
 * @param {array<string>} showIDs ids of elements to show
 */
function hideShow(hideIDs, showIDs){
	for(index in hideIDs){
		applyHideClass(hideIDs[index]);
	}
	for(index in showIDs){
		applyShowClass(showIDs[index]);
	}
}
function addBtnToLangChange(el){
	//the function that runs when the onchange event fires for the select addBtnToLang 
	//console.log(el.value);
	if (el.value == "Add to new lang"){ //todo: fragile code! This line must match a corresponding value in the select. If the UI is altered, so must this line, or else this if will not trigger
		applyShowClass("newLangsLangNameInputLbl");
		applyShowClass("newLangsLangNameInput");
		applyShowClass("newLangsKeyInputLbl");
		applyShowClass("newLangsKeyInput");
	} else { //chosen an existing lang
		applyHideClass("newLangsLangNameInputLbl");
		applyHideClass("newLangsLangNameInput");
		applyHideClass("newLangsKeyInputLbl");
		applyHideClass("newLangsKeyInput");
		let groups = getGroups(el.value);
		setupSelect("addBtnToGrp", ["don't add to a group"], groups);
	}
}
function getGroups(lang){
	//console.log(savedCodeWithGroupsConcept1[lang]); //shows everything inside the given lang
	//get the buttons for lang - Note that without wrapping in Object.keys you get the value of each key instead. This var previously called langBtns but that became horribly confusing as context changed
	var langDescendantKeys = Object.keys(savedCodeWithGroupsConcept1[lang]);
	//console.log(langDescendantKeys);
	//console.log(savedCodeWithGroupsConcept1[lang]);
	
	var btnKey = "";
	let groups = [];
	
	for (val in langDescendantKeys) {
		btnKey = langDescendantKeys[val];
		
		//we store what type of btn it is in index 1 of the btns outer array
		//so just need to look there for the string "group"
		if(savedCodeWithGroupsConcept1[lang][btnKey][1] == "group"){
			//console.log("group found: " + langDescendantKeys[val]);
			groups.push(langDescendantKeys[val]); //todo: there is probably a fancier or faster way of doing this.
		}
	}
	return groups;
}
/**
 * Makes the array for a new btn, from the inputs. Originally (in early prototyping) alerted out the result for pasting into the codebase.
 * groups use "jsKey": [lvlInt, "group", "Text to go on the btn", ["jsKeyForBtn1", "jsKeyForBtn2" etc]]
 * codeBtns use "jsKey": [lvlInt, "codeBtn", "Text to go on the btn", "text to insert"]
 * */
function makeBtnDataArray(){
	/*	Some examples of what we are making:
	"Span": [1, "codeBtn", "&lt;span&gt;", "<span></span>"],
	
	*/
	//.replace(/[<]/g,"&lt;")
	
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

	return [parseInt(lvlInt.value), btnType.value, textOnBtn, lastPart];
}
function alertBtnJS(){
	let btnObj = {};
	btnObj[jsKey.value] = makeBtnDataArray();
	var stringified = JSON.stringify(btnObj);
	alert(stringified.slice(1, stringified.length - 1));
}

function addToSavedCodeObject(){
	var langToAssignTo = "";
	var jsKeyText = document.getElementById("jsKey").value;
	if (jsKeyText == ""){
		alert("we need a JS key to save this against. Typically a camelCase word that captures what this is (though the Emoji lang uses the relevant emoji)");
		return;
	}
	console.log(makeBtnDataArray());
	if (addBtnToLang.value == "Add to new lang"){
		if (newLangsLangNameInput.value == "" || newLangsKeyInput.value == ""){
			alert("Can't add a btn without a lang, but at least one text box for 'New lang name' seems to be empty, while 'Add to new lang' seems selected.");
			return;
		}
		langToAssignTo = newLangsKeyInput.value; //TODO: validation!! I believe this has been done before within adding btns

		savedCodeWithGroupsConcept1[langToAssignTo] = {};
		savedCodeWithGroupsConcept1[langToAssignTo]["langName"] = newLangsLangNameInput.value; 
	} else {
		langToAssignTo = addBtnToLang.value;
	}
	savedCodeWithGroupsConcept1[langToAssignTo][jsKeyText] = makeBtnDataArray();
	console.log("Assigned new btn to: " + langToAssignTo);
}

function showSavedCodeObject(){
	coreShowJson(savedCodeWithGroupsConcept1);
	applyShowClass("hideSavedCodeObject");
	//set up the select for filtering to a given lang
	document.getElementById("langToShowSavedCodeOf").innerHTML = ""; //remove anything already there to avoid duplicates and out of date options.
	let selectOptions = [];
	selectOptions.push("all");
	let langs = Object.keys(savedCodeWithGroupsConcept1); //Todo: potential code smell here: I have already done getting all the langs into a select (for the dropdown for which lang to add it to)  but a)that only became apparent enough after I had finished writing this bit here and b) that code does not feel easily to hand!
	for (const lang in langs) {
		selectOptions.push(langs[lang]);
	}
	addToSelect(selectOptions, "langToShowSavedCodeOf"); //fill
	applyShowClass("langToShowSavedCodeOf"); //show

	document.getElementById("showSavedCodeObject").innerText = "b) Refresh/reshow the view of your savedCode object";//alter button text for correct grammatical tense, and improved UX
}
function showLangJSON(){
	let lang = document.getElementById("langToShowSavedCodeOf").value;
	if (lang == "all"){ //special case where we want to show the full set
		coreShowJson(savedCodeWithGroupsConcept1);
		return;
	}
	coreShowJson(savedCodeWithGroupsConcept1[lang]);
}
function coreShowJson(json){ //Here to be DRY and make it easier to keep things consistent between showSavedCodeObject() and showLangJSON()
	var stringified = JSON.stringify(json, null, 4); //4 enforces pretty print using 4 spaces
	stringified = stringified.slice(1, stringified.length - 1);
	stringified = "(also shown in developer console) \r\n" + stringified;
	console.log(json);
	//stick it in savedCodeObjectDisplay
	document.getElementById("savedCodeObjectDisplay").innerText = stringified;
}
function hideSavedCodeObject(){
	applyHideClass("hideSavedCodeObject");
	applyHideClass("langToShowSavedCodeOf");
	document.getElementById("savedCodeObjectDisplay").innerText = "";
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
/**
 * 
 * @param {string} idToToggle id of the element to be shown/hidden
 * @param {Element} togglerEl (optional) button or other element that triggered this, if applicable and if you wish to use this to alter the innerHTML
 * @param {string} togglerHideInner (optional) what to set the inner of togglerEl when toggling hide
 * @param {string} togglerShowInner (optional) what to set the inner of togglerEl when toggling show
 */
function toggleHideShowClass(idToToggle, togglerEl = false, togglerHideInner = "", togglerShowInner = ""){
	//console.log(togglerEl);
	if(document.getElementById(idToToggle).classList.contains("hide")){ //is hidden, so toggling to show
		//would be slightly more maintainable to call applyHideClass / applyShowClass, but my feeling right now is it does not make much difference either way, and this is slightly more performant
		document.getElementById(idToToggle).classList.remove("hide");
		document.getElementById(idToToggle).classList.add("show");
		if(togglerEl){
			togglerEl.innerHTML = togglerShowInner;
		}
	} else { //is showing, so toggling to hide
		document.getElementById(idToToggle).classList.remove("show");
		document.getElementById(idToToggle).classList.add("hide");
		if(togglerEl){
			togglerEl.innerHTML = togglerHideInner;
		}
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

function saveStyle(){
	console.log(document.getElementById("styleyStyle").innerText);
	saveToLocalStorage("btnCodeStyle", document.getElementById("styleyStyle").innerText)
}
function loadStyle(){
	let value = loadFromLocalStorage("btnCodeStyle");
	//console.log(`btnCodeStyle loaded from localStorage, value = :${value}`)
	if (value == "" || value == null){//guard against loading nothing. Todo: this seems flimsy - do we need to check for valid CSS going in? Probably need a reset styles button
		return; //no need to log here if already logged during loadFromLocalStorage
	}
	document.getElementById("styleyStyle").innerText = value;
}
function pickStyle(styleName){
	console.log(`style picked: ${styleName}`);

	/*Next line explanation:
		take the styleName param as a string, 
		append "Stylez" (our suffix for differentiating styles stored in JS string vars) to it
		get a var with window scope (a global) with that name
		and bung the contents of that var into value
	(thanks to https://stackoverflow.com/a/5613859 for the window[] part)
	Now this does mean that all of these styles must be a var that fits this pattern, but I think that is likely better than maintaining a switch case or if/else here
	At time of writing this, all these Stylez vars where in external JS files, in the stylePick directory, linked into the head of index.html
	*/
	var value = window[styleName + "Stylez"]; 
	document.getElementById("styleyStyle").innerText = value;
}

/**
 * Checks if browser supports Storage, and if it does, sets one Local Storage Key and Value
 * @param {string} key 
 * @param {string} value 
 * @returns true if storage was successful, false (and alerts) if no web storage
 */
function saveToLocalStorage(key,value){ 
	//checking browser support for Storage (covers both localStorage and sessionStorage)
	if (typeof(Storage) !== "undefined") { //Storage is there, so we'll save it
		localStorage.setItem(key, value);
		return true; //For use in functions that called this function
	} else {//No Web Storage support
		//TODO: is this a good experience??
		alert("couldn't save, browser doesn't support local storage");
		return false; //For use in functions that called this function
	}
}
/**
 * general purpose localStorage loading function (it is often more useful to have more specific functions for loading particular keys)
 * @param {string} key 
 * @returns {string} the value matching the key, or an empty string if cannot find the key (also logs to console if that is the case)
 */
function loadFromLocalStorage(key){
	let value = localStorage.getItem(key);
	if(value == ""){
		console.log(`tried to load: ${key} but found nothing`);
		return "";
	} else {
		return value;
	}
}

function enablePostHog(){
	//This is run either when users start the enable post hog process, or they might come back to finish the process if say they had to save some stuff before the page reload
	if(loadFromLocalStorage("usePostHog") != "true"){ //only ask about recording if the flag shows they have not already agreed
		if(confirm("Let PostHog record how you use btnCode? (you can disable it again, whenever you like, as easily as enabling it)")){
			saveToLocalStorage("usePostHog", "true");
		} else {
			return;
		}
	}

	if (confirm("To finish activating PostHog, we will need to reload the page. If you have unsaved work you need to copy or download, please choose cancel and manually reload the page later. Is it safe to reload?")){
		alert("To disable PostHog on btnCode at any time: either click the button marked disable PostHog... or in developer tools remove the local storage item \"usePostHog\" or set the value of it to anything other than true, then reload the page");
		location.reload();
	} else {
		document.getElementById("btnPostHogOn").innerText = "Reload page (to finish activating PostHog)";
	}

}
function disablePostHog(){
	saveToLocalStorage("usePostHog", "false");

	if(confirm("You will need to reload the page to finish disabling it. Reload now??")){
		alert("Thanks again for letting me see how you use btnCode!");
		location.reload();
	} else {
		alert("PostHog will not run next time you reload the page or in new browser tabs of btnCode, but will continue here for now. Thanks again for letting me see how you use btnCode!");
	}
}

/**
 * returns true if key is a key of jsonObject
 * at last check was not in use, left in here in case it becomes useful later
 * - was written to be called within function languageChange(lang) as part of a more flexible workaround for langs that need langNames different to their keys
 * - committed as part of "hardcoded langName conversion not needed" on 7th Jan 2023
 * - but during that work I realised I did not need to go that approach, as I could pass the key into the function instead of the langName by altering the code for langBtn generation
 * @param {string} key 
 * @param {JSON} jsonObject 
 * @returns boolean
 */
function isKeyOfJsonObject(key, jsonObject){ //todo: (after say 7th July 2023), check if this func is in use yet, and remove from codebase if not
	if (Object.keys(jsonObject).contains(key)){
		return true;
	} else {
		return false;
	}
}
/**
 * returns true if running locally.
 * at last check was not in use, left in here in case it becomes useful later
 * checked 8th Jan 2023
 * I believe this was written for pageLoad to know if it should draw the "Copy all text" btn, and then replaced with code that detects if the copy permission is granted instead
 * would be marginally useful to call for not attempting PostHog, but the effort to get that to work well would not be worth the tiny benefit
 * @returns boolean
 */
function isRunningLocally(){
	if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === ""){
		console.log("Detected running locally");
		return true;
	} else {
		console.log("btnCode seems to be running from a server");
		return false;
	}
}
/** An early basic prototype for displaying HTML of code that the user has written
 * at last check was not in use, commented call to it in index.html, left in here in case I ever decide to re-add that form of displaying HTML
 * todo: check if this is likely to ever be used
 */
function displayInDiv(){
	webDisplayDiv.innerHTML = codeTA.value;
}