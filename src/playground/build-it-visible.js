class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                <p>Here are the deets</p>
                )}
            </div>
        )
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// // ternary operator, if visibility is true then button should say hide details
// // logicalAND operator, if visibility is true show the JSX
// const render = () => {
//     const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>
//             {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && (
//             <p>Here are the deets</p>
//         )}
//     </div>
// );

// ReactDOM.render(template, document.getElementById('app'));
// };

// render();