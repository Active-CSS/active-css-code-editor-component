An Active CSS code editor component for playing with Active CSS, HTML and CSS. It is used on the upcoming docs site for 2.4.0 so that all the examples can be played around with. It's like codepen, codesandbox, etc. but on a smaller scale as it doesn't allow any saving or sharing of code. It's just for playing around on and for inserting rude words into the live examples to see what happens.

Requires at least Active CSS version 2.4.0, or the latest 2.4.0 branch if unreleased and a shadow DOM supporting browser.

It consists of two files, an Active CSS config file and a CSS file for the editor itself. The component is totally self-isolated and contains its own CSS.

The code editor can be drawn multiple times on a single page, and the component's HTML tag needs at least 340px in width. The code editor will work on any device size as long as it has at least 340px width allocated to it. The styling and functionality for the component is based on its own width - not the device's width.

Proper instructions will follow on release of 2.4.0. Basically though you include the acss in your config file with some attributes and that's it. The attributes point to the different ACSS, HTML and CSS files to edit, the location of the Active CSS core file to use for running the results, plus the location of the CSS file for the editor itself.

Example use:

```
<acss-editor
    acss="/examples/acss/active-css-hello-world.acss"
    html="/examples/html/active-css-hello-world.html"
    css="/examples/html/active-css-hello-world.css"
    core="/activecss/activecss-dev-2-4-0.js"
    editor-css="/css/activecss-editor.css">
</acss-editor>
```

It doesn't have any syntax highlighting yet. Ideally syntax highlighting will get incorporated into the acss as custom commands - I'm not interesting in having a separate JS file just for syntax highlighting as it defeats the whole point of a simple single component. Syntax highlighting will happen at some point once I've worked out a sane strategy for it. It will probably end up being a set of custom commands which can just be copied into the component as additional ACSS config and so have an additional use as re-usable ACSS commands.
