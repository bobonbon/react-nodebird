//전체 페이지 공통
import React from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: propTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);