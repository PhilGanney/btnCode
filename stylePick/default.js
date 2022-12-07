var defaultStylez = `
	header{
		position: relative; /*This rule overruled to "sticky" by a media query when the screen is tall enough to have it onscreen all the time*/
		top: 0px;
		width: 100%;
		text-align: center;
		background-color: #FFFFFFF1;
	}
	main{
		padding-bottom: 70px;
		width: 98%;
		padding-left: 1%;
		padding-right: 1%;
		background-color: lightGreen;
	}
	footer{
		position: relative; /*This rule overruled by a media query when the screen is tall enough to have footer position set to fixed. (on mobile, when the on-screen keyboard slides on screen, you suddenly get a very short browser area)*/
		bottom: 0px;
		width: 100%;
		text-align: center;
		background-color:#9EFEFE;
	}
	
	
	.stylerBtns{/*Styler btns*/
		width: 100px;
		float: left;
		margin: 2px;
	}

	button{ /*all buttons*/
		height: 66px;
		border-radius: 8px;
		border-width: 2px;
		margin-right: 0px;
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
		background-color: white;
		color: black;
		white-space: pre; /*pre = preserve white-space and only break lines at br elements or newline characters. Use pre-wrap if you want text to wrap. "Normal" or "nowrap" will collapse sequences of spaces into once space*/
		overflow-wrap: normal;
		overflow-x: auto;
		font-family: monospace; /*USER pick your own editor font here!! Some options: Courier New, arial, Flux-Regular (the python font here via @font-face), (Phil intentionally only specified a monospace font, leaving font choice to the user)*/
	}

	#btnJS{ /*Button marked JS*/
		font-size: 1em;
	}
	.JS{/*All of the buttons/elements for coding JS*/
		background-color: DodgerBlue;
		/*w3C logo colour is #005a9c but I prefer my initial choice personally*/
		color: #000000;
	}
	
	.CSS{/*All of the buttons/elements for coding CSS*/
		background-image: linear-gradient(to top, green, blue); /*Design considerations: 1) styling theme for CSS should be a bit more snazzy than most - just a bg colour and a text colour will not cut it here! 2) gradients are snazzy but need to be careful not to have them squished or overstretched - this class is applied to buttons that are sometimes very narrow, but have uniform height so a vertical linear gradient will look good, but horizontal not. 3)Text needs to be easily readable in front of any part of the gradient 4)the background also needs to not be too overstated when on many buttons in a line next to each other*/
		color: white;
	}
	.CSS.group{ /* .group denotes a group button that is not yet opened*/
		/*need two background images simultaneously, rather than having the standard .group rules wipe over the .CSS background rules*/
		background-image:  url("arrow.png"), linear-gradient(to top, green, blue);
		background-repeat: no-repeat, repeat;
		background-position: right, right;
	}
	.CSS.openGroup{ /*.openGroup denotes a group button that is in open mode (ie the "child" buttons are showing already)*/
		/*need two background images simultaneously, rather than having the standard .openGroup rules wipe over the .CSS background rules*/
		background-image:  url("arrowDwn.png"), linear-gradient(to top, green, blue);
		background-repeat: no-repeat, repeat;
		background-position: right, right;
	}

	.HTML{ /*note the full stop to denote class - this styles the btns for the HTML lang*/
		background-color: #3c790a;
		color: white;
	}
	
	@font-face { /*get that sweet python typeface*/
		font-family: Flux-Regular;
		src: url("fonts/FluxRegular.otf") format("opentype");
	}
	#btnpython{ /*style the main button for Python (id is lowercase throughout because it is generated based on the button text which is based on the Python logo)*/
		font-size: 1.2em; /*Even with the extra size from the class, it still looked small compared with buttons next to it (perhaps due to being lowercase next to uppercase as well as the font. Cannot use 1.2em in the entire class though, otherwise the text on some buttons overflows vertically)*/
	}
	.python{ /*Style all the elements for coding Python.*/
		/*Styling taken from python.org homepage*/
		background: #1c3b56;
		color: #ffd343;
		/*color: #fff*/
		font-size: 1.1em; /*Just a tinee bit bigger than it would be, to correct for smaller looking typeface, but not so big anything overflows*/
		font-family: Flux-Regular, SourceSansProBold, Arial, sans-serif;
	}

	.php{/*Style all the elements for coding php*/
		/*Styling taken from php.net homepage*/
		background-color: #7A86B8;
		color: #1f222e;
		font-weight: 700;
	}

	.CSharp{ /*Style all the elements for coding C# (interestingly we could use .C\# to get things with class C# but we avoid that symbol within the JS that applies classes anyway)*/
		background: linear-gradient(45deg, #189f20 50%, #009404 50%); /*the 1st 50% stops that first colour at 50% and the 2nd starts the 2nd colour at 50%, effectively turning the gradient effect into that sweet sudden two tone effect that the C# logo has. Inspired by https://blog.prototypr.io/css-only-multi-color-backgrounds-4d96a5569a20*/
		color: #ffffff;
	}

	.Ada{ /*(Lang coming soon) anyone who can find an exciting colour scheme from Ada gets, I dunno, free lifetime btnCode usage??. Cool looking language, bland as anything logo!*/
		background-color: #ffffff;
		color: #000000;
	}

	#btnEmoji{ /*style the main button for Emoji - if you think having Emoji on here is a travesty you could try display: none to hide the button*/
		font-size: 1em; /* Unlike most of the class Emoji buttons, we don't want bigger characters for this button*/
	}
	.Emoji{ /*Style all the elements for typing emoji (isn't a coding language but they can be useful in websites or designs sometimes)*/
		background-color: #3344ED;
		color: Tomato; /*Does not effect most emoji, but does effect some emoji in some fonts in some rendering engines.*/
		font-size: 1.75em; /*When the text is only one character, the font-size can be bigger.*/
	}
	
/*Applying arrow imgs to group buttons, to indicate openable or already open, Note that if something already has a background image (eg btns for the CSS lang with .CSS class using a gradient background) you will need a selector for that + .group and another selector for that + .openGroup and in each selector assign the two relevant background-images in one background-image rule. Use what I did for CSS as a starting point!*/
	.group{
		background-image: url("arrow.png");
		background-repeat: no-repeat;
		background-position: right;
		background-size: 19px;
		padding-right: 19px;
	}
	.openGroup{
		background-image: url("arrowDwn.png");
		background-repeat: no-repeat;
		background-position: right;
		background-size: 19px;
		padding-right: 19px;
	}
/*Selects (dropdowns, eg in "Add buttons")*/
	select{
		height: 66px;
	}
	
/*Tables (eg the one in show/download) */
	th, td{
		margin-left: 1px;
		margin-right: 6px;
		border-left: burlywood 2px dashed; /*A nice light brown colour*/
	}
	th:first-child, td:first-child{
		border-left: none;
	}
	th:last-child, td:last-child{
		margin-left: 1px;
		margin-right: 1px;
	}
	tbody tr td{
		border-top: burlywood 2px dashed;
	}
	.improvementsText{
		max-height: 50px; /*Overwritten by Media Query*/
		overflow-y: auto;
		background-color: burlywood;
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