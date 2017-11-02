console.log("app.js is running")
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();

    if(option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderOptionsApp();
    }
};

const reset = () => {
    app.options = [];
    renderOptionsApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderOptionsApp = () => {
    const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={reset}>Remove All</button>
        <ol>
            {
                app.options.map((option) => <li key={option}>Option: {option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

renderOptionsApp();