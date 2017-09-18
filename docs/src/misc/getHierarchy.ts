export function getHierarchy(comment: JSDocComment): string[] {
    if (comment.path == null) return [];

    return comment.path.map(path => path.name);
}
