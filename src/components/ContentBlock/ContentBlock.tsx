import React, { PropsWithChildren } from 'react';
import { Container } from './styled';

export const ContentBlock = (props: PropsWithChildren) => (
  <Container>
    {props.children}
  </Container>
);
