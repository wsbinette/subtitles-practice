import logo from './logo.svg';
import testVid from './video/test.mp4';
import subtitle from './video/subtitles/subtitles.vtt';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Subtile Practice</h1>
      </header>
      <body>
        <video controls>
          <source src={testVid} type="video/mp4" />
          <track src={subtitle} kind="captions" label="English" srclang="en-us" default/>
        </video>
      </body>
    </div>
  );
}

export default App;
