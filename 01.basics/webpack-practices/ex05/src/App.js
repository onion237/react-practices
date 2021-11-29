import '../public/assets/scss/App.scss'

const App = function(){
    const app = document.createElement('h1')
    app.textContent = 'Hello World!!!!!'
    app.className = 'Header'
    return app;
}

export default App;