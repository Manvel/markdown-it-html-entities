# markdown-it-html-entities

Currently [markdown-it](https://github.com/markdown-it/markdown-it) follows
[CommonMark specs](https://spec.commonmark.org) which requires HTML Entities
[replacement with Unicode
Characters](https://spec.commonmark.org/0.28/#entity-references) and currently
there is no native way to disable [HTML
Entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity) autoconvertion.

This plugin disables the automatic HTML Entities to Unicode convertion in
markdown-it and let the browser display expected character using HTML Entities
accordingly, avoiding unexpected character convertion which might not play well
if you would like to integrate the Markdown output with the system that expect
HTML Entities and in general it's just adding support for using HTML Entities in
the Markdown.

## Installation

```bash
npm i markdown-it-html-entities
```

## Usage

```js
const markdownIt = require("markdown-it");
const htmlEntities = require("markdown-it-html-entities");

const markdown = markdownIt().use(htmlEntities);

const result = markdown.render("curly &#123; & &#125; brackets");
console.log(result); // <p>curly &#123; &amp; &#125; brackets</p>
```
