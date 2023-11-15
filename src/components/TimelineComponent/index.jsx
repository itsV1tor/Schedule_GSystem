import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import moment from 'moment';

export function TimelineComponent() {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) {
      // Definindo os grupos
      let groups = new DataSet([
        { id: 0, content: "Segunda-Feira" },
        { id: 1, content: "Terça-Feira" },
        { id: 2, content: "Quarta-Feira" },
        { id: 3, content: "Quinta-Feira" },
        { id: 4, content: "Sexta-Feira" },
        { id: 5, content: "Sábado" },
        { id: 6, content: "Domingo" },
      ]);

      // Definindo os itens (funcionários)
      let items = new DataSet([
        { id: 0, group: 0, content: 'Vitor', start: '2023-01-01T08:00:00', end: '2023-01-02T08:00:00' },
        { id: 1, group: 1, content: 'Sanches', start: '2023-01-01T08:00:00', end: '2023-01-02T08:00:00' },
        { id: 2, group: 2, content: 'Matheus', start: '2023-01-01T08:00:00', end: '2023-01-02T08:00:00' },
        { id: 3, group: 3, content: 'João', start: '2023-01-01T08:00:00', end: '2023-01-02T08:00:00' },
        { id: 4, group: 4, content: 'Gilberto', start: '2023-01-01T08:00:00', end: '2023-01-02T08:00:00' },
        { id: 5, group: 5, content: 'Marcelo', start: '2023-01-01T08:00:00', end: '2023-01-02T08:00:00' },
      ]);

      // Obtendo a referência do contêiner
      let container = document.getElementById('timeline-component');

      // Definindo as opções da timeline
      let options = {
        stack: false, // Evita empilhamento dos itens
        zoomKey: 'ctrlKey', // Permite zoom usando a tecla Ctrl
        horizontalScroll: false, // Desativa a rolagem horizontal
        verticalScroll: false, // Desativa a rolagem vertical
        showMajorLabels: false,
        editable: {
          updateTime: true, // Permite atualização do tempo ao mover
          updateGroup: false, // Impede a atualização do grupo ao mover
          add: true, // Permite adição de novos itens ao arrastar
          remove: true, // Permite remoção de itens ao arrastar
          overrideItems: false, // Impede a substituição de itens ao arrastar
        },
        margin: {
          item: 10,
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
    <main id="timeline-component" style={{ width: '100%', height: '600px' }}></main>
  );
}
