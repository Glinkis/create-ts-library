import * as React from "react";
// import * as Prism from "prismjs"; TODO: Fix prism.

export function getExamples(comment: JSDocComment) {
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
    <pre ref={() => null /*() => Prism.highlightAll(true)*/}>
      <code className="language-js" data-lang="javascript">
        {props.children}
      </code>
    </pre>
  );
}
