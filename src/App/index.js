import Header from '../components/Header';
import Layout from '../components/Layout';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';

function App() {
  return (
    <div>
      <Header 
        title="This is title"
        descr="This is Description!"
      />
      <Layout 
        id="1"
        title="This is title"
        descr="This is Description!"
        urlBg={bg2}
        colorBg=""
      />
      <Layout 
        id="2"
        title="This is title"
        descr="This is Description!"
        urlBg=""
        colorBg="#74E1FF"
      />
      <Layout 
        id="3"
        title="This is title"
        descr="This is Description!"
        urlBg={bg3}
        colorBg=""
      />
    </div>
  );
}

export default App;
