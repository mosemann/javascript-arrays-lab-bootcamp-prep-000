const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop(1)
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
  return kittens
}
function appendKitten(name) {
  return [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.lenght - 1)
}
function removeFirstKitten() {
  return kittens.slice(0)
}