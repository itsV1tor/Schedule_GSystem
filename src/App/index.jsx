import React, { useEffect } from 'react';

import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import { DataSet, Timeline } from 'vis-timeline/standalone';

export function App () {
  console.log('useEffect not executed');
  useEffect(() => {
    console.log('useEffect executed');
    let groups = new DataSet([
      { id: 0, content: "Segunda-Feira", value: 1 },
      { id: 1, content: "Terça-Feira", value: 2 },
      { id: 2, content: "Quarta-Feira", value: 3 },
      { id: 3, content: "Quinta-Feira", value: 4 },
      { id: 4, content: "Sexta-Feira", value: 5 },
      { id: 5, content: "Sábado", value: 6 },
      { id: 6, content: "Domingo", value: 7 },
    ]);
 
    let items = new DataSet([
      {
        id: 0,
        group: 0,
        content: "name",
        start: new Date(2014, 3, 17),
        end: new Date(2014, 3, 21),
      },
      {
        id: 1,
        group: 0,
        content: "name",
        start: new Date(2014, 3, 19),
        end: new Date(2014, 3, 20),
      },
      {
        id: 2,
        group: 0,
        content: "name",
        start: new Date(2014, 3, 17),
        end: new Date(2014, 3, 21),
      },
      {
        id: 3,
        group: 0,
        content: "name",
        start: new Date(2014, 3, 19),
        end: new Date(2014, 3, 20),
      },
      {
        id: 4,
        group: 0,
        content: "name",
        start: new Date(2014, 3, 17),
        end: new Date(2014, 3, 21),
      },
      {
        id: 5,
        group: 0,
        content: "name",
        start: new Date(2014, 3, 19),
        end: new Date(2014, 3, 20),
      },
      {
        id: 6,
        group: 1,
        content: "name",
        start: new Date(2014, 3, 16),
        end: new Date(2014, 3, 24),
      },
      {
        id: 7,
        group: 1,
        content: "name",
        start: new Date(2014, 3, 23),
        end: new Date(2014, 3, 24),
      },
      {
        id: 8,
        group: 1,
        content: "name",
        start: new Date(2014, 3, 22),
        end: new Date(2014, 3, 26),
      },
      {
        id: 9,
        group: 2,
        content: "name",
        start: new Date(2014, 3, 24),
        end: new Date(2014, 3, 27),
      },
      {
        id: 10,
        group: 2,
        content: "name",
        start: new Date(2014, 3, 24),
        end: new Date(2014, 3, 27),
      }
    ]);

    let container = document.getElementById('visualization');
    let options = {
      groupOrder: function (a, b) {
        return a.value - b.value;
      },
      editable: true,
    };
    let timeline = new Timeline(container);
    timeline.setOptions(options);
    timeline.setGroups(groups);
    timeline.setItems(items);
  }, []); 

  return (
    <div 
      id='visualization' 
      style={{width:'100%', height:'100vh', border: '1px solid #8d8d8d'}}
    >
    </div>
  );
}
