import React from 'react';
import { useRouteMatch } from 'react-router-dom'

const generatePage = page => {
    try {
        const Component = require(`./pages/${page}`).default
        return <Component />;
    } catch (err) {
        console.warn(err)
        return 'Under Construction'
    }
}


export default function PageRenderer () {
    const {
        params: { page }
    } = useRouteMatch()

    return generatePage(page)

}

