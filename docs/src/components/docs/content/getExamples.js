import React from "react";

/**
 * @param {JSDocComment} obj
 */
export function getExamples(obj) {
  if (!obj.examples || !obj.examples.length) {
    return null;
  }

  const examples = obj.examples.map(example => {
    return (
      <pre className="language-js">
        <code className="language-js" data-lang="javascript">
         {example.description}
        </code>
      </pre>
    );
  });

  return (
    <figure className="highlight">
      <hr />
      {examples}
    </figure>
  );
}
