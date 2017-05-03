export function getPath(base: string, hierarchy: Array<string>) {
  return base + hierarchy.reduce((acc, next) => acc + "/" + next);
}