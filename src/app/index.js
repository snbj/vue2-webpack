import text from './js/main';
import './style/main.css';
import './style/main.scss';

let app = document.createElement('div');

app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(text());