 
import './App.css';
import AdminPage from './AdminPage';

function App() {
 
  return (
    <div className="App">
      <AdminPage key ={1}/>      
    </div>
  );
}

export default App;

// export function Monika() {
//   const arr = [
//     {
//       name: "Monika",
//       age: "22",
//       job: "React Developer",
//     },
//     {
//       name: "Hari",
//       age: "24",
//       job: "Angular Developer",
//     },
//     {
//       name: "Mohammed",
//       age: "20",
//       job: "Vue Developer",
//     },
//   ];
//   const myFunc = (item) => (
//     <div>
//       <h1>{item.name}</h1>
//       <p>{item.age}</p>
//       <p>{item.job}</p>
//     </div>
//   );
//   return (
//     <div>
//       {arr.map((item) => {
//         return myFunc(item);
//       })}
//     </div>
//   );
// }
