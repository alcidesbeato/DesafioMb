import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Wrapper, Heading } from './styles';

interface ComingSoonProps {
  children: ReactNode;
}

function ComingSoon({ children }: ComingSoonProps) {
  return (
    <Wrapper>

      <Heading> Coming soon </Heading>

      {children}
    </Wrapper>
  );
};

export default ComingSoon;
