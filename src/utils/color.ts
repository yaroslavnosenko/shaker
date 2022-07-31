export const changeBrightness = (oldColor: string, percent: number) => {
  var ctx = document.createElement('canvas').getContext('2d')
  if (ctx === null) return '#000000'
  ctx.fillStyle = oldColor
  ctx.fillRect(0, 0, 1, 1)
  var color = ctx.getImageData(0, 0, 1, 1)
  var r = color.data[0] + Math.floor((percent / 100) * 255)
  var g = color.data[1] + Math.floor((percent / 100) * 255)
  var b = color.data[2] + Math.floor((percent / 100) * 255)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
