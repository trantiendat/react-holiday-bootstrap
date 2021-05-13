import React from 'react';
import { Container } from 'react-bootstrap';
import * as Styles from './styles';

interface IBodyProps {}

type ILayoutProps = React.PropsWithChildren<IBodyProps>;
type ILayoutType = React.FC<IBodyProps>;

const LayoutComponent: ILayoutType = ({ children }: ILayoutProps) => {
  return (
    <Container>
      <Styles.JumbotronStyle>{children}</Styles.JumbotronStyle>
    </Container>
  );
};

export const Layout = React.memo(LayoutComponent);
