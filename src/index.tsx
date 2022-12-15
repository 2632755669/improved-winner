import ReactDom from 'react-dom';
import App from './App';
import '@ss/mtd-react/lib/style/index.css';
import './styles/index.css';

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
