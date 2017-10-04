export function getHierarchy(comment: IJsDocComment): string[] {
  if (comment.path == null) {
    return [];
  }
  return comment.path.map((path) => path.name);
}
