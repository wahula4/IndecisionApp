// react components must include render method, render returns JSX

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        // the state of options is in the default props
        this.state = {
            options: props.options
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            // if the option is an empty string
            return 'Enter valid value';
            // if the option is already in the array
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        // this.setState is equivalent to the else statement
        this.setState((prevState) => {
            return {
                // use concat to add option to the array without changing the array
                options: prevState.options.concat([option])
            };
        });
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                 />
                <Options
                     options={this.state.options}
                     handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                 />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

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

// stateless functional components are faster than class based components
// BUT cannot use this, cannot set state
// converting class Action to stateless functional component
// must add props as an argument and remove this,, also removed render()

const Action = (props) => {
    return (
        <div>
            <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
}
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                  onClick={this.props.handlePick}
//                  disabled={!this.props.hasOptions}
//                  >
//                  What should I do?
//                  </button>
//             </div>
//         );
//     } 
// }

const Options = (props) => {
        return (
            <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
                {
                    props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
}

const Option = (props) => {
        return (
            <div>
                Option: {props.optionText}
            </div>
        );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        // passed down from parent
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(event) {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        // refers to handleAddOption in parent
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error
                // equivalent to error: error
            };
        });
    }
    render() {
        return (
            // if error is truthy then display the error using logical AND operator
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    } 
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));