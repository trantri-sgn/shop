import React from 'react'

export default function IconSocial() {
    return (
        <>
            <ul className="nav navbar-nav flex-row">
                <li className="nav-item">
                    <a className="nav-link text-gray-350" href="#!">
                        <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li className="nav-item ml-xl-n4">
                    <a className="nav-link text-gray-350" href="#!">
                        <i className="fab fa-twitter" />
                    </a>
                </li>
                <li className="nav-item ml-xl-n4">
                    <a className="nav-link text-gray-350" href="#!">
                        <i className="fab fa-instagram" />
                    </a>
                </li>
                <li className="nav-item ml-xl-n4">
                    <a className="nav-link text-gray-350" href="#!">
                        <i className="fab fa-medium" />
                    </a>
                </li>
            </ul>
        </>
    )
}
