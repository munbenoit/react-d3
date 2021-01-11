import * as d3 from 'd3'

function circle() {
  const svg = d3
    .select('#chart-area')
    .append('svg')
    .attr('width', 400)
    .attr('height', 400)
  svg
    .append('circle')
    .attr('cx', 280)
    .attr('cy', 280)
    .attr('r', 100)
    .attr('fill', 'black')
}

export { circle }
