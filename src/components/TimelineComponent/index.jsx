import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

export function TimelineComponent() {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) {
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
      ]);

      let container = document.getElementById('visualization');

      let options = {
        groupOrder: function (a, b) {
          return a.value - b.value;
        },

        onAdd: function (item, callback) {
          item.content = prompt('Insert name:', item.content);
          if (item.content != null) {
            callback(item);
          }else{
            callback(null);
          }
        },

        onUpdate: function (item, callback) {
          item.content = prompt('edit items text:', item.content);
          if (item.content != null) {
            callback(item);
          }else{
            callback(null);
          }
        },
        margin: {
          item: 10
        },
        timeAxis: {
          scale: 'day', 
          step: 1
        },
        width: '100%',
        editable: true,
        moveable: false,
        showMinorLabels: false,
        showMajorLabels: false,
        start: new Date (2014, 3, 8),
        end: new Date(2014, 4, 2)
      };

      timelineRef.current = new Timeline(container, items, groups, options);
    }
  }, []);

  return (
      <main
        id='visualization' 
        style={{ width: '100%' }}
        >
      </main>
  );
}