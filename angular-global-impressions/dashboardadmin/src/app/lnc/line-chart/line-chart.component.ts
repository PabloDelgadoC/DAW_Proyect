import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  padding = [20, 30];
  // @Input()
  // public title: string;

  // @Input()
  // public subtitle: string;


  // @Input()
  // public footerText: string;

  data: IData[] = [
    { date: 0, value: 0 }, 
    { date: 10, value: 20 }, 
    { date: 20, value: 60 }, 
    { date: 30, value: 30 }, 
    { date: 40, value: 80 }, 
    { date: 50, value: 90 }, 
    { date: 80, value: 50 }
  ];
  dataReal: IHistorico[];

  elementRef: ElementRef;

  // constructor(elementRef: ElementRef) {
  //   this.elementRef = elementRef;
  // }
  constructor() {
  }
  cosumirAPI(arr:IHistorico[]) {
    fetch('http://localhost:3000/historico')
      .then( response => response.json())
      .then( data => {
      arr = data;
    })  
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }

  makeGraph(data:IData[]){
    let svg = d3.select('#svg');
    let container = d3.select('#container');

    let width = (svg.node() as HTMLElement).getBoundingClientRect().width;
    let height = (svg.node() as HTMLElement).getBoundingClientRect().height;

    let xAxis = d3.scaleLinear()
                  .domain([0, 100])
                  .range([0 + this.padding[1], width - this.padding[0]]);

    svg.append('g')
       .attr('transform', 'translate(0,'+(height-this.padding[1])+')')
      .call(make_x_gridlines());

    let yAxis = d3.scaleLinear()
                  .domain([0,100])
                  .range([height - this.padding[1], 0+this.padding[0]]);
    
    svg.append('g')
       .attr('transform', 'translate('+this.padding[1]+', 0)')
       .call(d3.axisLeft(yAxis));

    svg.append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + (height - this.padding[1]) + ")")
      .call(make_x_gridlines()
        .tickSize(-(height - this.padding[1] - this.padding[0]))
      ).style('color', 'grey').style('opacity', 0.2)
      .selectAll('text').remove();

    svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1.5)
    .attr('d', d3.line<IData>()
                .x(function(d) {return xAxis(d.date)})
                .y(function(d) {return yAxis(d.value)})
                );


    svg.selectAll('circle-group')
    .data(data)
    .enter()
    .append('circle')
      .attr('cx', d => xAxis(d.date))
      .attr('cy', d => yAxis(d.value))
      .attr('r', 5)
      .attr('fill', '#8FE182');
    
    svg.selectAll('vertical-lines')
    .data(data)
    .enter()
    .append('rect')
      .attr('x', d => (xAxis(d.date)-45/2))
      .attr('y', this.padding[0])
      .attr('width', '45px')
      .attr('height', height-this.padding[0]-this.padding[1])
      .attr('fill', 'transparent')
      .style('cursor', 'pointer')
      .on('mouseover', d => {
        container.append('div')
          .attr('class', 'tooltip')
          .style('position', 'absolute')
          .style('left', (xAxis(d.date)-50)+'px')
          .style('top', '-20px')
          .style('background-color', 'white')
          .style('color', 'black')
          .style('padding', '5px 0px')
          .style('border-radius', '5px')
          .style('width', '100px')
          .style('text-align', 'center')
          .html(`${d.value}`);
      })
      .on('mouseout', function() {
        container.selectAll(".tooltip").remove();
      });
    
      let svg2 = d3.select('#svg2');
      let container2 = d3.select('#container');
  
  
      svg2.append('g')
         .attr('transform', 'translate(0,'+(height-this.padding[1])+')')
        .call(make_x_gridlines());
      
      svg2.append('g')
         .attr('transform', 'translate('+this.padding[1]+', 0)')
         .call(d3.axisLeft(yAxis));
  
      svg2.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + (height - this.padding[1]) + ")")
        .call(make_x_gridlines()
          .tickSize(-(height - this.padding[1] - this.padding[0]))
        ).style('color', 'grey').style('opacity', 0.2)
        .selectAll('text').remove();
  
      svg2.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line<IData>()
                  .x(function(d) {return xAxis(d.date)})
                  .y(function(d) {return yAxis(d.value)})
                  );
  
  
      svg2.selectAll('circle-group')
      .data(data)
      .enter()
      .append('circle')
        .attr('cx', d => xAxis(d.date))
        .attr('cy', d => yAxis(d.value))
        .attr('r', 5)
        .attr('fill', '#8FE182');
      
      svg2.selectAll('vertical-lines')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => (xAxis(d.date)-45/2))
        .attr('y', this.padding[0])
        .attr('width', '45px')
        .attr('height', height-this.padding[0]-this.padding[1])
        .attr('fill', 'transparent')
        .style('cursor', 'pointer')
        .on('mouseover', d => {
          container2.append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('left', (xAxis(d.date)-50)+'px')
            .style('top', '-20px')
            .style('background-color', 'white')
            .style('color', 'black')
            .style('padding', '5px 0px')
            .style('border-radius', '5px')
            .style('width', '100px')
            .style('text-align', 'center')
            .html(`${d.value}`);
        })
        .on('mouseout', function() {
          container2.selectAll(".tooltip").remove();
        });
        
      let svg3 = d3.select('#svg3');
      let container3 = d3.select('#container');
  
  
      svg3.append('g')
         .attr('transform', 'translate(0,'+(height-this.padding[1])+')')
        .call(make_x_gridlines());
      
      svg3.append('g')
         .attr('transform', 'translate('+this.padding[1]+', 0)')
         .call(d3.axisLeft(yAxis));
  
      svg3.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + (height - this.padding[1]) + ")")
        .call(make_x_gridlines()
          .tickSize(-(height - this.padding[1] - this.padding[0]))
        ).style('color', 'grey').style('opacity', 0.2)
        .selectAll('text').remove();
  
      svg3.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line<IData>()
                  .x(function(d) {return xAxis(d.date)})
                  .y(function(d) {return yAxis(d.value)})
                  );
  
  
      svg3.selectAll('circle-group')
      .data(data)
      .enter()
      .append('circle')
        .attr('cx', d => xAxis(d.date))
        .attr('cy', d => yAxis(d.value))
        .attr('r', 5)
        .attr('fill', '#8FE182');
      
      svg3.selectAll('vertical-lines')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => (xAxis(d.date)-45/2))
        .attr('y', this.padding[0])
        .attr('width', '45px')
        .attr('height', height-this.padding[0]-this.padding[1])
        .attr('fill', 'transparent')
        .style('cursor', 'pointer')
        .on('mouseover', d => {
          container3.append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('left', (xAxis(d.date)-50)+'px')
            .style('top', '-20px')
            .style('background-color', 'white')
            .style('color', 'black')
            .style('padding', '5px 0px')
            .style('border-radius', '5px')
            .style('width', '100px')
            .style('text-align', 'center')
            .html(`${d.value}`);
        })
        .on('mouseout', function() {
          container3.selectAll(".tooltip").remove();
        });

    function make_x_gridlines() {
      return d3.axisBottom(xAxis);
    }
  }

  ngOnInit() {
    this.makeGraph(this.data)
  }

}

interface IData {
  date: number;
  value: number;
}

interface IHistorico{
  nombre: String,
  imagen: String,
  precio: Number,
  descripcion: String,
  likes: Number,
  autor: Number
}
