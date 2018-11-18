

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = distanceTo;
/**
 * Calculate the distance between pointA and pointB
 * @ignore
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance
 */
function distanceTo(pointA, pointB) {
  const xDiff = Math.pow(pointB.x - pointA.x, 2);
  const yDiff = Math.pow(pointB.y - pointA.y, 2);

  return Math.sqrt(xDiff + yDiff);
}
module.exports = exports.default;
// # sourceMappingURL=distance-to.js.map
