import styled from 'styled-components';

import Layout from 'components/layout';
import { H2 } from 'components/style';

import { BigBasket, TinyBasket } from 'module';

const Outer = styled.div`
  flex: 1 1 auto;
  display: flex;
  margin: 0 auto 25px;
  max-width: 1600px;
`;

const Big = styled.div`
  flex: 1 1 auto;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
`;

const Tiny = Big.extend`
  flex: 0 0 300px;
`;

const Inner = styled.div`
  background: #fff;
  flex: 1 1 auto;
  overflow: auto;
`;

export default ({ router }) => (
  <Layout router={router}>
    <Outer>
      <Big>
        <H2>Big</H2>
        <Inner>
          <BigBasket />
        </Inner>
      </Big>
      <Tiny>
        <H2>Tiny</H2>
        <Inner>
          <TinyBasket />
        </Inner>
      </Tiny>
    </Outer>
  </Layout>
);
