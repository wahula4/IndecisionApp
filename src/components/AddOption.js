import React from 'react';

export default class AddOption extends React.Component {
    // class properties syntax
    state = {
        error: undefined
    };
    handleAddOption = (event) => {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        // refers to handleAddOption in parent
        const error = this.props.handleAddOption(option);

        this.setState(() => ({
                error
                // equivalent to error: error
        }));

        if (!error) {
            event.target.elements.option.value = '';
        }
    };
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