# btnCode

 Button Code - a very different UI for coding.

## Why?

Text editors and IDEs are pretty great for coding if all of these conditions are true:
 - You are working at a device with a good keyboard
 - You are physically able to type at a reasonable speed
 - Knowing what to type, comes quickly to you for that particular language
 
But what if you get a moment of inspiration while not near a good keyboard? Wouldn't it be great to be able to use your phone, or a tablet, or whatever; without getting frustrated about trying to type. A UI that minimizes the need for typing can help with that. 

What if your main coding rig freezes or fails in a productivity killing way? Switching to some other device might be the quickest way to get going again. Particularly if you can just use a device that is already on and in your pocket.

What if you're using an unfamiliar language? A UI with buttons of core coding concepts, that give you the outline code for you to fill in, could save time.

What about people with injuries or disabilities that make large amounts of typing painful, difficult or impossible? Maybe btnCode can help?

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
