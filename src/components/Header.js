import React from 'react';

const Header = (props) => {
        return (
            // a subtitle will only be rendered if there is a subtitle
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
}
// default prop values
Header.defaultProps = {
    title: 'Indecision'
}

export default Header;