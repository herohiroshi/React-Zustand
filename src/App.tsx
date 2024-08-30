import { useStore } from "./store";
import "./App.css";

function Card1() {
  const { count1, count2, obj } = useStore((state) => ({
    count1: state.count1,
    count2: state.count2,
    obj: state.obj,
  }));
  return (
    <div className="my-card">
      <p>卡片1</p>
      <p>count1: {count1}</p>
      <p>count2: {count2}</p>
      <p>年龄: {obj.age}</p>
      <p>随机数 {Math.random()}</p>
    </div>
  );
}

function Card2() {
  const count1 = useStore((state) => state.count1);
  return (
    <div className="my-card">
      <p>卡片2</p>
      <p>count1: {count1}</p>
      <p>随机数 {Math.random()}</p>
    </div>
  );
}

function App() {
  const increment1 = useStore((state) => state.increment1);
  const increment2 = useStore((state) => state.increment2);
  const increaseAge1 = useStore((state) => state.increaseAge1);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Card1 />
        <Card2 />
      </div>
      <div className="card">
        <button onClick={increment1}>count1++</button>
        <button onClick={increment2}>count2++</button>
        <button onClick={increaseAge1}>增加年龄</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
