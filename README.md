An embeddable Active CSS code editor component for playing with Active CSS, HTML and CSS. It is used on the upcoming docs site for 2.4.0 so that all the examples can be played around with. It's like codepen, codesandbox, etc. but on a smaller scale as it doesn't allow any saving or sharing of code. It's just for playing around on and for inserting rude words into the live examples to see what happens.

Requires at least Active CSS version 2.4.0, or the latest 2.4.0 branch if unreleased and a shadow DOM supporting browser.

The component consists of two files, an Active CSS config file and a CSS file for the editor itself. The component code is totally self-isolated. It utilises the window event and the body:init event of the ACSS config, but these things shouldn't intrude on its outer environment.

The component itself is written in Active CSS, so you must have Active CSS loaded for the component to work and the activecss-editor.acss file must be included in your Active CSS config when the page loads. The CSS file for styling the code editor component gets loaded by you filling out the attribute in the HTML tag itself. You can tweak this file as you like. All the colors used in the code editor are at the top of the CSS file in CSS variables.

The code editor can be drawn multiple times on a single page, and the component's HTML tag needs at least 340px in width. The code editor will work on any device size as long as it has at least 340px width allocated to it. The styling and functionality for the component is based on its own width - not the device's width.

Basically you include the component HTML tag somewhere pre-rendered or dynamically with some attributes. The attributes point to the different ACSS, HTML and CSS files to edit, the location of the Active CSS core file to use for running the results, plus the location of the CSS file for the editor itself. More attribute options will probably be added on later.

The attributes that are filled in are needed to load the acss, html and css files that you want to edit, to specify where the Active CSS core version is to be used in the result iframe, and to load the CSS for the component itself (the editor-css attribute).

How to use it:

1) Put an Active CSS core in a script tag on your page if there isn't one there already.
2) Setup an Active CSS config file if you don't have one already set up (see installation on the docs site for instructions on how to do this) and paste in the activecss-editor.acss code. Alternatively you can just load the file as an additional config file by following the installation procedure on the docs site.
4) In your HTML, write out the HTML for the component as below and fill out the attributes that point to the relevant files in your public folder. The files must be publicly readable. The files themselves will not be written to - every edit and subsequent edit is done in memory.

Note: The acss, html and css file referencing attributes can be left empty if they are not needed. But the core and editor-css attributes *must* be populated.


```
<!-- This is regular HTML -->
<acss-editor
    acss="/examples/acss/active-css-hello-world.acss"
    html="/examples/html/active-css-hello-world.html"
    css="/examples/html/active-css-hello-world.css"
    core="/activecss/activecss-dev-2-4-2.js"
    editor-css="/css/activecss-editor.css">
</acss-editor>
```

The code editor does not have any syntax highlighting yet. Ideally, syntax highlighting will get incorporated as custom ACSS commands. That would make sense - it's the sort of thing that would be really useful as a CSS command - to apply syntax highlighting of a file type to a contenteditable and just work dynamically. It is actually a styling issue. So it will probably end up being a set of custom commands which can just be copied into the component as additional ACSS config and so have an additional use as re-usable ACSS commands.
