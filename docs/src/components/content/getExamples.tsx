import * as React from "react";

export function getExamples(comment: IJsDocComment) {
  if (!comment.examples || !comment.examples.length) {
    return null;
  }

  const examples = comment.examples.map(example => (
    <JavascriptCode>{example.description}</JavascriptCode>
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
    <pre>
      <code className="language-js" data-lang="javascript">
        {props.children}
      </code>
    </pre>
  );
}
