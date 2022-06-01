import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState();
  let array = [
    { name: "vipul", age: 18 },
    { name: "keval", age: 20 },
    { name: "satish", age: 18 },
    { name: "nayan", age: 25 },
    { name: "rajan", age: 35 },
    { name: "vinay", age: 27 },
    { name: "sahil", age: 22 },
    { name: "nirmal", age: 38 },
  ];
  let demoArray = [];
  const handleChange = (e) => {
    if (e.target.value == "") {
      setData(array);
    }
    array.filter((item) => {
      let filterValue =
        item.name.includes(e.target.value) ||
        ("" + item.age).includes(e.target.value);
      if (filterValue) {
        demoArray.push(item);
      }
    });
    setData(demoArray);
  };
  useEffect(() => {
    setData(array);
  }, []);

  return (
    <div className="App">
      <h1>You can search here</h1>
      <input onChange={handleChange} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
