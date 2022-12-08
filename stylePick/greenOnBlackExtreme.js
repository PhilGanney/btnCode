var greenOnBlackExtremeStylez = `
body{
    background-color: black; /*Needed for unstyled margin gaps, eg around the header*/
    font-family:  terminal, monospace;
}
header{
    position: absolute; /*This rule overruled by a media query when the screen is tall enough to have it set to sticky*/
    top: 0px;
    width: 100%;
    text-align: center;
    background-color: #000000F1;
    color: green;
}
main{
    padding-bottom: 70px;
    width: 98%;
    padding-left: 1%;
    padding-right: 1%;
    background-color: black;
    color: green;
}
footer{
    position: relative; /*This rule overruled by a media query when the screen is tall enough to have footer position set to fixed. (on mobile, when the on-screen keyboard slides on screen, you suddenly get a very short browser area)*/
    bottom: 0px;
    width: 100%;
    text-align: center;
    background-color:#021E1E;
    color:green;
}


.stylerBtns{/*Styler btns*/
    width: 100px;
    float: right;
    margin: 2px;
}

button, .HTML,.JS, .CSS, .python, .php, .CSharp, .Emoji{ /*all buttons and even overriding most lang settings*/
    height: 66px;
    border-radius: 0px;
    border-width: 0px;
    margin-right: 2px;
    background: black;
    color: green;
    border: green solid 1px;
}
#controlBtns{ /*The container div for the row of buttons with controls like Full screen, Empty Editor etc*/
    height: 88px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}
#controlBtns button{ /*Each button inside the #controlBtns container div*/
    height: 86px;
}
#codeBtns{ /*The container div for the row of buttons that add code to the editor*/
    height: 68px; /*This rule overwritten in a media query when screen tall enough that we can afford this container to have space for a chunky scrollbar under the buttons (mobile browsers have skinny scrollbars)*/
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}
#codeBtns button{ /*Each button inside the #codeBtns container div*/
    width: min-content; /*the smallest width that does not make content fall out the side*/
}

#codeTA{ /*TextArea for the code editor*/
    width: 100%;
    height: 300px;
    -moz-tab-size : 4;
    -o-tab-size : 4;
    tab-size : 4; /*number of spaces tabs are equal to. Some/all browsers use 8 as a default*/
    font-size: 10pt;
    background-color: black;
    color: green;
    white-space: pre; /*pre = preserve white-space and only break lines at br elements or newline characters. Use pre-wrap if you want text to wrap. "Normal" or "nowrap" will collapse sequences of spaces into once space*/
    overflow-wrap: normal;
    overflow-x: auto;
    font-family:  terminal, monospace; /*USER pick your own editor font here!! Some options: Courier New, arial, Flux-Regular (the python font here via @font-face), (Phil intentionally only specified a monospace font, leaving font choice to the user whilst )*/
}

#btnJS{ /*Button marked JS*/
    font-size: 1em;
}
.JS{/*All of the buttons/elements for coding JS*/
    font-weight: 700;
}

.CSS{/*All of the buttons/elements for coding CSS*/
}
.CSS.group{ /* .group denotes a group button that is not yet opened*/
    /*need two background images simultaneously, rather than having the standard .group rules wipe over the .CSS background rules*/
    background-image:  url("arrow.png");

    background-repeat: no-repeat,;
    background-position: right;
}
.CSS.openGroup{ /*.openGroup denotes a group button that is in open mode (ie the "child" buttons are showing already)*/
    /*need two background images simultaneously, rather than having the standard .openGroup rules wipe over the .CSS background rules*/
    background-image:  url("arrowDwn.png");
    background-repeat: no-repeat;
    background-position: right;
}

.HTML{ /*note the full stop to denote class - this styles the btns for the HTML lang*/
}

@font-face { /*get that sweet python typeface*/
    font-family: Flux-Regular;
    src: url("fonts/FluxRegular.otf") format("opentype");
}
#btnpython{ /*style the main button for Python (id is lowercase throughout because it is generated based on the button text which is based on the Python logo)*/
    font-size: 1.2em; /*Even with the extra size from the class, it still looked small compared with buttons next to it (perhaps due to being lowercase next to uppercase as well as the font. Cannot use 1.2em in the entire class though, otherwise the text on some buttons overflows vertically)*/
}
.python{ /*Style all the elements for coding Python. Lowercase throughout*/
    /*Styling taken from python.org homepage*/
    font-size: 1.1em; /*Just a tinee bit bigger than it would be, to correct for smaller looking typeface, but not so big anything overflows*/
    font-family: Flux-Regular, SourceSansProBold, Arial, sans-serif;
}

.php{/*Style all the elements for coding php*/
    /*Styling taken from php.net homepage*/
    font-weight: 700;
}

.CSharp{ /*Style all the elements for coding C# (interestingly we could escape the # with a slash like .C# to get things with class C# but we avoid the # symbol within the JS that applies classes anyway)*/

}

#btnEmoji{ /*style the main button for Emoji - if you think having Emoji on here is a travesty you could try display: none to hide the button*/
    font-size: 1em; /* Unlike most of the class Emoji buttons, we don't want bigger characters for this button*/
}
.Emoji{ /*Style all the elements for typing emoji (isn't a coding language but they can be useful in websites or designs sometimes)*/
    font-size: 1.75em; /*When the text is only one character, the font-size can be bigger.*/
}

/*Applying arrow imgs to group buttons, to indicate openable or already open, Note that if something already has a background image (eg btns for the CSS lang with .CSS class using a gradient background) you will need a selector for that + .group and another selector for that + .openGroup and in each selector assign the two relevant background-images in one background-image rule. Use what I did for CSS as a starting point!*/
.group{
    border-right: green dashed 2px;
}
.openGroup{
    border-right: green dotted 2px;
}
/*Selects (dropdowns, eg in "Add buttons")*/
select{
    height: 66px;
}

/*Tables (eg the one in show/download) */
th, td{
    margin-left: 1px;
    margin-right: 6px;
    border-left: green 2px dashed; 
}
th:first-child, td:first-child{
    border-left: none;
}
th:last-child, td:last-child{
    margin-left: 1px;
    margin-right: 1px;
}
tbody tr td{
    border-top: green 2px dashed;
}
.improvementsText{
    max-height: 50px; /*Overwritten by Media Query*/
    overflow-y: auto;
    background-color: black;
    margin-top: 0px;
    margin-bottom: 0px;
}
/*Media Queries at the bottom, so that they overwrite*/
@media only screen and (min-height: 468px) {
    /*Responsive breakpoints are normally done on min-widths, but in this case it is the height that is the main thing we are working around - most of the outer elements have % widths so the design is pretty responsive even before mediaQueries, but we had a specific issue when typing on mobile - when the onscreen keyboard comes in, the viewport is too short to display the header and footer and still have room to see the btns and the textarea at the same time*/
    header{
        position: sticky;
    }
    footer{
        position: fixed;
    }
    
    #codeBtns{ /*The container div for the row of buttons that add code to the editor*/
        /*Space for a scrollbar*/
        height: 86px;
    }
    .improvementsText{
        max-height: 80px;
    }
}`;