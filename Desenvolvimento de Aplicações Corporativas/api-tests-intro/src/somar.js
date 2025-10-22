function somar(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Os parâmetros devem ser números");
  }
  return a + b;
}
module.exports = somar;
