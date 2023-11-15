import React from 'react';
import { Container } from './styles';
import { Header } from '../components/Header';
import { TimelineComponent } from '../components/TimelineComponent';

export function App() {
  return (
    <Container>
      <Header/>
      <TimelineComponent/>
    </Container>
  );
}
