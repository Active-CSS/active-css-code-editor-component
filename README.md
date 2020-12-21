An Active CSS code editor component for playing with Active CSS, HTML and CSS.

Requires at least Active CSS version 2.4.0, or the latest 2.4.0 branch if unreleased and a shadow DOM supporting browser.

It consists of two files, an Active CSS config file and a CSS that is loaded internally. It can be included multiple times on a single page, and the component's HTML tag needs at least 340px in width. The code editor will work on any device size as long as it has at least 340px width allocated to it. The CSS for the component is based on its own width - not the device's width.

Proper instructions will follow on release of 2.4.0. Basically you include the acss in your config file and then write the component tag which points to the different ACSS, HTML and CSS files to edit, plus a pointer to the CSS for the editor itself.

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
