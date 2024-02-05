export const getPct = ( base: number, part: number) => {
  if(base < 1) return 0
  return Number(((part / base) * 100).toFixed(1));
}