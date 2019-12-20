/**
 * Date : 11/12/2019
 * Time : 17:45
 * @author Yusuf Abdillah Putra <yusufabdillahputra@gmail.com>
 * @license ISC
 */

import React, { Component } from 'react';
import Color from '../../global/style/Color';
import {
  Container,
  Header,
  Spinner,
  Content,
} from 'native-base';

class LoadingScreen extends Component {
  render () {
    return (
      <Container>
        <Header transparent androidStatusBarColor={Color.primary} />
        <Content padder>
          <Spinner style={{marginTop: 250}} color={this.props.color} />
        </Content>
      </Container>
    );
  }
}

export default LoadingScreen;
