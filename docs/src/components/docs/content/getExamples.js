import React from "react";
import Prism from "prismjs";

const JavascriptCode = props => (
  <pre ref={Prism.highlightAll}>
    <code className="language-js" data-lang="javascript">
      {props.children}
    </code>
  </pre>
);

/**
 * @param {JSDocComment} obj
 */
export function getExamples(obj) {
  if (!obj.examples || !obj.examples.length) {
    return null;
  }

  const examples = obj.examples.map(example => (
    <JavascriptCode>
      {example.description}
    </JavascriptCode>
  ));

  return (
    <figure className="highlight">
      <hr />
      {examples}
    </figure>
  );
}
