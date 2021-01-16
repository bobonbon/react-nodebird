import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';
import Router from 'next/router';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .ant-col:first-child {
        padding-left: 0 !important;
    }
    .ant-col:last-child {
        padding-right: 0 !important;
    }
`;

const AppLayout = ({ children }) => {
    const [searchInput, onChangeSearchInput] = useInput('');
    //리덕스 initial state를 가져온다.
    const { me } = useSelector((state) => state.user);
    //구조분해는 취향차이
    //const { isLoggedIn } = useSelector((state) => state.user);

    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item> 
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item> 
                    <SearchInput 
                        enterButton 
                        value={searchInput}
                        onChange={onChangeSearchInput}
                        onSearch={onSearch}
                    />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://bobonbon.com" target="_blank" rel="noreferrer noopener">Made by bobonbon</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
