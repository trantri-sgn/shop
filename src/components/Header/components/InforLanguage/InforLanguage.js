import React from 'react'

export default function InforLanguage() {
    return (
        <>
            <ul className="nav nav-divided navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href=" #!">
                        <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                </a>
                    {/* Menu */}
                    <div className="dropdown-menu minw-0">
                        <a className="dropdown-item" href="#!">
                            <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />United States
                  </a>
                        <a className="dropdown-item" href="#!">
                            <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada
                  </a>
                        <a className="dropdown-item" href="#!">
                            <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany
                  </a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#!">USD</a>
                    {/* Menu */}
                    <div className="dropdown-menu minw-0">
                        <a className="dropdown-item" href="#!">USD</a>
                        <a className="dropdown-item" href="#!">EUR</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#!">English</a>
                    {/* Menu */}
                    <div className="dropdown-menu minw-0">
                        <a className="dropdown-item" href="#!">English</a>
                        <a className="dropdown-item" href="#!">French</a>
                        <a className="dropdown-item" href="#!">German</a>
                    </div>
                </li>
            </ul>
        </>
    )
}
