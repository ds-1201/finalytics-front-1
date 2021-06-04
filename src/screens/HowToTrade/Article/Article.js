import React from 'react';
import {Scrollbars } from 'rc-scrollbars';

import './Article.css';
import ArticleHeader from './ArticleHeader';
import {articles} from '../../../articles';

function Article(props) {
    const handleClick = () => {
        props.ClickHandler()
    }

    return (
        <div className="article-container">
            <div className="back-button" onClick={handleClick}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.4375 7.58238L1.4375 18.4186C1.4375 22.1936 4.11125 24.5624 7.895 24.5624L18.105 24.5624C21.8888 24.5624 24.5625 22.2061 24.5625 18.4186L24.5625 7.58238C24.5625 3.79488 21.8888 1.43738 18.105 1.43738L7.895 1.43738C4.11125 1.43738 1.4375 3.79488 1.4375 7.58238Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.89254 12.9999L18.1075 12.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5972 17.6849L7.89217 12.9999L12.5972 8.31488" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <ArticleHeader />
            <div className="article">
            <Scrollbars style={{width: "70vw",height:"70vh"}}>
                {articles[props.id].body}
            </Scrollbars>
            </div>
        </div>
    )
}

export default Article
