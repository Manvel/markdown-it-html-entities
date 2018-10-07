const markdownIt = require("markdown-it");
const markdownItEntities = require("./index");
const assert = require("assert");

const markdown = markdownIt().use(markdownItEntities);

const tests = [
  {
    input: "curly &#123; & &#125; brackets",
    output: "<p>curly &#123; &amp; &#125; brackets</p>\n"
  },
  {
    input: "# heading &lt;h1&gt;",
    output: "<h1>heading &lt;h1&gt;</h1>\n"
  },
  {
    input: "# heading &lt;h1&gt;",
    output: "<h1>heading &lt;h1&gt;</h1>\n"
  },
  {
    input: '" quote is &quot;',
    output: '<p>&quot; quote is &quot;</p>\n'
  },
  {
    input: "1 < 2 & 3 > 4",
    output: "<p>1 &lt; 2 &amp; 3 &gt; 4</p>\n"
  },
  {
    input: "`<br>`",
    output: "<p><code>&lt;br&gt;</code></p>\n"
  },
  {
    input: "&this is not entity",
    output: "<p>&amp;this is not entity</p>\n"
  }
]

describe("Testing markdown-it-html-entities using markdown.render():", () => {
  tests.forEach(test => 
  {
    it(`Input: ${test.input} \n Should output: ${test.output}`, () => {
      assert.equal(markdown.render(test.input), test.output);
    });
  });
});
