# btnCode

 Button Code - a very different UI for coding.

## Why?

Text editors and IDEs are pretty great for coding if all of these conditions are true:
 - You are working at a device with a good keyboard
 - You are physically able to type at a reasonable speed
 - Knowing what to type, comes quickly to you for that particular language
 
I am building btnCode to be the next best thing when a condition above is false, to be used alongside existing tools and editors. Early stage focus is on assisting productivity when non-fluent in a language, with the UI working much like a reference, but with buttons that put a matching code snippet into the editor. 

I have also put some time into making the editor usable on phones. Now btnCode.com is a good way to think through ideas wherever they strike.

## How ...
### ..does one start using this?
btnCode is designed to be easy to use from the moment you get to btncode.com and since the editor is all client side JS, you can also just have all the files locally and open index.html in a modern browser. 

Pick a coding language from the choices available and the language options will be replaced with buttons ("btns"), that either insert text into the coding area or they might toggle showing a selection of btns. Use the "Change Lang" btn to see the list of languages ("Langs") again.

### ..do I exit btnCode?
Close the tab.

## What ...
### ..are the differences between running btnCode locally, and going to btncode.com?
Consider the codebase at btncode.com to be the live version, and the latest commit on github as the latest dev build, though the two should never be far apart. I usually update the website to get the latest commit as soon as the commit is done. 

Another difference between the two options, at least while the website is http rather than https, is that running locally should give you a "Copy all text" button. (Browsers only allow the JS for add to clipboard in secure contexts, we only show the button if we detect we have permission to write to clipboard). There may be other features that I build in the near future that for similar reasons only appear when running locally. If btncode gains traction, or other factors make it warrant being more than a little pet project, I will upgrade btncode.com to being https.
