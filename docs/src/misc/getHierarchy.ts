export function getHierarchy(obj: JSDocComment): string[] {
    if (obj.path == null) return [];

    return obj.path.map(path => path.name);
}
