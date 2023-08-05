import './App.css';
import { Canvas } from '@react-three/fiber';
import MyElement3D from './MyElement3D';

const App = () => {
  return (
    <>
      <Canvas>
        <MyElement3D />
      </Canvas>
    </>
  );
};

export default App;
