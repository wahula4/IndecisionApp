import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        // shorthand syntax, the options object must be surrounded by parentheses
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            // if the option to remove is not equal to the option then keep it in the array 
            options: prevState.options.filter((option) => optionToRemove !== option)      
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }
    handleAddOption = (option) => {
        if (!option) {
            // if the option is an empty string
            return 'Enter valid value';
            // if the option is already in the array
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        // this.setState is equivalent to the else statement
        this.setState((prevState) => ({
                // use concat to add option to the array without changing the array
                options: prevState.options.concat([option])
        }));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
        // fetching data
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        }   catch (error) {
                 
            }
    }
    // saving data
    componentDidUpdate = (prevProps, prevState) => {
        // only save the data if the data is different
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    }
    // fetching data
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        }   catch (error) {
                 
            }
    }
    // saving data
    componentDidUpdate = (prevProps, prevState) => {
        // only save the data if the data is different
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                 </div>
                 <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                 />
            </div>
        );
    }
}