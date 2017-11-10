import React from 'react';

const Header = (props) => (
            // a subtitle will only be rendered if there is a subtitle
            <div className="header">
                <div className="container">
                    <h1 className="header__title">{props.title}</h1>
                    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
                </div>
            </div>
        );
// default prop values
Header.defaultProps = {
    title: 'Indecision'
}

export default Header;