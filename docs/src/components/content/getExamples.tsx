import * as React from "react";
import * as Prism from "prismjs";

export function getExamples(obj: JSDocComment) {
  if (!obj.examples || !obj.examples.length) return null;

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

function JavascriptCode(props: any) {
  return (
    <pre ref={() => Prism.highlightAll(true)}>
      <code className="language-js" data-lang="javascript">
        {props.children}
      </code>
    </pre>
  );
} 
