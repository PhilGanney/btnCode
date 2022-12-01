# btnCode

 Button Code - a very different UI for coding.

## Why?

Text editors and IDEs are pretty great for coding if all of these conditions are true:
 - You are working at a device with a good keyboard
 - You are physically able to type at a reasonable speed
 - Knowing what to type, comes quickly to you for that particular language
 
I am building btnCode to be the next best thing when a condition above is false; another tool in your developer toolkit, to be used alongside existing tools and editors. Early stage focus is on assisting productivity when non-fluent in a language, with the UI working much like a reference, but with buttons that put a matching code snippet into the editor. 

I have also put some time into making the editor usable on phones. Now btnCode.com is a good way to think through ideas wherever they strike.

## How ...
### ..does one start using this?
btnCode is designed to be easy to use from the moment you get to btncode.com and since the editor is all client side JS, you can also just have all the files locally and open index.html in a modern browser. 

Pick a coding language from the choices available and the language options will be replaced with buttons ("btns"), that either insert text into the coding area or they might toggle showing a selection of btns. Use the "Change Lang" btn to see the list of languages ("Langs") again.


### ..do I run my code? How does btnCode dev Phil use btnCode?
BtnCode doesn't have an interpreter, compiler or command line shell, but you can create downloadable files, show HTML content in a new tab or copy your code to the clipboard.

#### show/download area
BtnCode now has a show/download area that you can use to create a file from the current text in the editor. You need to know the MIME type for the type of file you are making, though the input box has suggestions. After a file is created, links for opening in new tab, downloading or showing in an iframe will appear in a table below. Each click of "Make a downloadable file" creates a new file and a new table row for that file. (The file table and all the links are not saved anywhere and will be gone if you reload the browser tab, so make sure you download any files you wish to keep)

#### Copying to clipboard
Alternatively you can copy code elsewhere to run it. If you use btnCode locally, you should see a "Copy all text" button on the top row to the left of the full screen button, otherwise good old ctrl+a ctrl+c are your freinds.

#### How Phil uses btnCode
When coding on my laptop, I have btnCode open in a tab in a browser on my extra monitor, while VS Code is open on the laptop screen. I will draft stubs of code out in btnCode, and then copy to VS Code or, if I'm editing existing code, I just use btnCode as a quick reference - but btnCode is really good for that purpose too. Of course you can use whatever editor or IDE you wish to use. (Initially I used notepad++ but switched to VS Code)

If I fancy coding on my phone, it's generally just for a few minutes, to think through an idea that has popped in my head. In those instances just seeing the code I had in mind is enough to confirm or throw out the idea I was thinking of; then when I'm next at my laptop I code the idea up properly. Beyond just checking an idea, the best experience on mobile I have found, for HTML, JS and CSS; is to draft it out on btnCode.com then paste into codepen.io and just use btnCode for a reference from then on. (no affiliation with codepen - they are just the most mobile-friendly of the online editors I have tried.  playcode.io and w3schools.com/tryit are two others that are ok on mobile. Playcode has a nice and advanced editor but seems to have issues getting the whitespace of pasted code correct, w3schools has a "front end" editor and a "back end" editor that covers quite a good range of languages, but has less features)


### ..do I exit btnCode?
Close the tab.

## What ...
### ..are the differences between running btnCode locally, and going to btncode.com?
Consider the codebase at btncode.com to be the live version, and the latest commit on github as the latest dev build, though the two should never be far apart. I usually update the website to get the latest commit as soon as the commit is done. 

Another difference between the two options, at least while the website is http rather than https, is that running locally should give you a "Copy all text" button. (Browsers only give the JS permission for writing to clipboard in secure contexts, so we only show the button if we detect we have that permission). There may be other features in future that for similar reasons only appear when running locally. If btncode gains traction, or other factors make it warrant being more than a little pet project, I will upgrade btncode.com to being https.
