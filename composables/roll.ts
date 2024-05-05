export const rolldX = (x: number) => Math.floor(Math.random() * x) + 1;
export const rollndx = (ndx: string) => {
  const [n, x] = ndx.split("d").map((s) => parseInt(s));
  let damage = 0;
  for (let i = 0; i < n; i++) {
    damage += rolldX(x);
  }
  return damage;
};
