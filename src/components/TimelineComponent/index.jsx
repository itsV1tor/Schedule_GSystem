import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import { Container } from './styles';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import moment from 'moment';

export function TimelineComponent() {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) {
      // Definindo os grupos
      let groups = new DataSet([
        { id: 0, content: "Segunda-Feira", stack: true},
        { id: 1, content: "Terça-Feira" },
        { id: 2, content: "Quarta-Feira" },
        { id: 3, content: "Quinta-Feira" },
        { id: 4, content: "Sexta-Feira" },
        { id: 5, content: "Sábado" },
        { id: 6, content: "Domingo" },
      ]);

      // Definindo os itens (funcionários)
      let items = new DataSet([
        { id: 0, group: 0, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00', className: 'first-child cell'},
        { id: 1, group: 0, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 2, group: 0, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 3, group: 0, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 4, group: 0, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 5, group: 0, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'sixth-child cell'},

        { id: 6, group: 1, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'first-child cell'},
        { id: 7, group: 1, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 8, group: 1, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 9, group: 1, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 10, group: 1, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 11, group: 1, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className:'sixth-child cell'},

        { id: 12, group: 2, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'first-child cell'},
        { id: 13, group: 2, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 14, group: 2, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 15, group: 2, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 16, group: 2, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 17, group: 2, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'sixth-child cell'},

        { id: 18, group: 3, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'first-child cell'},
        { id: 19, group: 3, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 20, group: 3, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 21, group: 3, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 22, group: 3, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 23, group: 3, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'sixth-child cell'},

        { id: 24, group: 4, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'first-child cell'},
        { id: 25, group: 4, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 26, group: 4, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 27, group: 4, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 28, group: 4, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 29, group: 4, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'sixth-child cell'},

        { id: 30, group: 5, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'first-child cell'},
        { id: 31, group: 5, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 32, group: 5, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 33, group: 5, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 34, group: 5, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 35, group: 5, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'sixth-child cell'},

        { id: 36, group: 6, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'first-child cell'},
        { id: 37, group: 6, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 38, group: 6, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 39, group: 6, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 40, group: 6, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 41, group: 6, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'sixth-child cell'},

        { id: 42, group: 7, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'first-child cell'},
        { id: 43, group: 7, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'second-child cell'},
        { id: 44, group: 7, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'third-child cell'},
        { id: 45, group: 7, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fourth-child cell'},
        { id: 46, group: 7, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00' , className: 'fifth-child cell'},
        { id: 47, group: 7, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-01T18:00:00', className: 'sixth-child cell' },
      ]);

      // Obtendo a referência do contêiner
      let container = document.getElementById('timeline-component');

      // Definindo as opções da timeline
      let options = {
        align: 'center',
        stack: true, // Evita empilhamento dos itens
        zoomKey: 'ctrlKey', // Permite zoom usando a tecla Ctrl
        horizontalScroll: false, // Desativa a rolagem horizontal
        verticalScroll: false, // Desativa a rolagem vertical
        showMajorLabels: false,
        orientation: {
          axis: 'top'
        },
        editable: {
          updateTime: true, // Permite atualização do tempo ao mover
          updateGroup: false, // Impede a atualização do grupo ao mover
          add: true, // Permite adição de novos itens ao arrastar
          remove: true, // Permite remoção de itens ao arrastar
          overrideItems: false, // Impede a substituição de itens ao arrastar
        },
        margin: {
          item: {
            vertical: 10
          },
        },
        timeAxis: {
          scale: 'hour',
          step: 1,
        },
        start: moment('2023-01-01T08:00:00'), // Início às 8h
        end: moment('2023-01-02T08:00:00'),   // Fim às 8h do dia seguinte
        zoomable: false, // Desativa a funcionalidade de zoom
      };

      // Criando a timeline
      timelineRef.current = new Timeline(container, items, groups, options);
    }
  }, []);

  return (
    <Container id="timeline-component"></Container>
  );
}
