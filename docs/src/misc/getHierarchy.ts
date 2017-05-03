export function getHierarchy(obj: JSDocComment): string[] {
    return obj.path.map(path => path.name);
}