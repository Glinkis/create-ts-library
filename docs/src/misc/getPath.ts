export function getPath(base: string, hierarchy: string[]): string {
  return base + hierarchy.reduce((acc, next) => acc + "/" + next);
}