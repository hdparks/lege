export function anyUndefined(...args:(any|undefined)[]): boolean {
  return args.some(x => x == undefined)
}
