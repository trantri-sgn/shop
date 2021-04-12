import React from 'react'

export default function ListItem({ item }) {

    return (
        <>
            <li className="list-styled-item">
                <a className="list-styled-link" href="#!">{item.title || item}</a>
            </li>
        </>
    )
}
