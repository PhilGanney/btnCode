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
Currently, you have to copy code elsewhere to run it. When coding on my laptop, I have btnCode open in a tab in a browser on my extra monitor, while notepad++ is open on the laptop screen. I will draft stubs of code out in btnCode, and then copy to notepad++ or, if I'm editing existing code, I just use btnCode as a quick reference - but btnCode is really good for that purpose too. Of course you can use whatever editor or IDE you wish to use.

If I fancy coding on my phone, it's generally just for a few minutes, to think through an idea that has popped in my head. In those instances just seeing the code I had in mind is enough to confirm or throw out the idea I was thinking of. I typically wait til I'm at my laptop to code the idea up properly. So far the best experience on mobile I have found, for coding HTML, JS and CSS; beyond just checking an idea; is to draft it out on btnCode.com then paste into playcode.io and just use btnCode for a reference from then on. 

### ..do I exit btnCode?
Close the tab.

## What ...
### ..are the differences between running btnCode locally, and going to btncode.com?
Consider the codebase at btncode.com to be the live version, and the latest commit on github as the latest dev build, though the two should never be far apart. I usually update the website to get the latest commit as soon as the commit is done. 

Another difference between the two options, at least while the website is http rather than https, is that running locally should give you a "Copy all text" button. (Browsers only give the JS permission for writing to clipboard in secure contexts, so we only show the button if we detect we have that permission). There may be other features in future that for similar reasons only appear when running locally. If btncode gains traction, or other factors make it warrant being more than a little pet project, I will upgrade btncode.com to being https.
