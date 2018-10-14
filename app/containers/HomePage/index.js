/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Icon, Input, AutoComplete } from 'antd';
import messages from './messages';
import styles from './index.less';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  static defaultProps = {
    defaultActiveFirstOption: false,
    onPressEnter: () => {},
    onSearch: () => {},
    className: '',
    placeholder: 'Search for anything',
    dataSource: [],
    defaultOpen: false,
  };

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    onPressEnter: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    dataSource: PropTypes.array,
    defaultOpen: PropTypes.bool,
  };

  state = {
    searchMode: this.props.defaultOpen,
    value: '',
  };

  componentWillMount() {
    clearTimeout(this.timeout);
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.timeout = setTimeout(() => {
        this.props.onPressEnter(this.state.value);
      }, 0);
    }
  };

  onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.state.searchMode) {
        this.input.focus();
      }
    });
  };

  leaveSearchMode = () => {
    this.setState({ searchMode: false, value: '' });
  };

  render() {
    const { className, placeholder, ...restProps } = this.props;
    delete restProps.defaultOpen;
    return (
      <Layout className={styles.homePage}>
        <Sider>
          <div
            className="logo"
            style={{
              height: '32px',
              background: '#666',
              margin: '16px',
            }}
          />
          <Menu mode="inline" theme="dark">
            <Menu.Item key="1">123</Menu.Item>
            <SubMenu
              key="2"
              collapsible
              collapsed="true"
              title={<span>123</span>}
            >
              <Menu.Item key="2.1">123</Menu.Item>
              <Menu.Item key="2.2">2.2</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">123</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="" style={{ background: '#fff', padding: 0 }}>
            <span onClick={this.enterSearchMode}>
              <AutoComplete
                key="AutoComplete"
                {...restProps}
                value={this.state.value}
                onChange={this.onChange}
              >
                <Search
                  size="large"
                  placeholder={placeholder}
                  ref={node => {
                    this.input = node;
                  }}
                  onKeyDown={this.onKeyDown}
                  onBlur={this.leaveSearchMode}
                />
              </AutoComplete>
            </span>

            <Menu mode="horizontal" theme="dark">
              <Menu.Item key="1">
                <Icon type="appstore" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
              </Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.content}>maincontent</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
