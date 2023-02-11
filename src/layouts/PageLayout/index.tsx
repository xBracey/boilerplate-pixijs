import React, { ReactNode } from 'react';
import styles from './index.module.css';

interface IPageTemplate {
    children: ReactNode;
}

const PageTemplate = ({ children }: IPageTemplate) => {
    return <div>{children}</div>;
};

export default PageTemplate;
