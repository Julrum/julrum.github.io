import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { MatchParams } from '@common/router.type';
import MenuBar from '@components/organisms/MenuBar';
import Home from '@pages/Home';
import {
  Wrapper,
  Content,
  ContentWrapper,
  MenuBarSpace,
} from './BasicLayout.style';

const BasicLayout: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return (
    <Wrapper>
      <MenuBar />
      <MenuBarSpace />
      <ContentWrapper>
        <Content>
          <Route exact path={match.url} component={Home} />
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default BasicLayout;
