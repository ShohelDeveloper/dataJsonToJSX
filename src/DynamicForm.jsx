import { useState } from "react";

const fromfildes = {
  name: {
    type: "text",
    label: "Whats Your Name",
    placeholder: "Shohel Rana",
  },
  email: {
    type: "email",
    label: "Whats Your Email",
    placeholder: "shohel@gmail.com",
  },
  phone: {
    type: "tel",
    label: "Whats Your Number",
    placeholder: "+8801920898886",
  },
  password: {
    type: "password",
    label: "Whats Your Password",
    placeholder: "***********************",
  },
  color: {
    type: "color",
    label: "Whats Your Number",
    placeholder: "red",
  },
  birthDay:{
      type: 'date',
      label: 'What is your birthday',
      placeholder:'1-1-2002'
    },
    age: {
        type: 'number',
        label: 'What is your Current Age',
        placeholder:20
  }
};

// step one: transform object as we need
const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    //curr = key name(color, password, name,email) & acc = whole object with value property
    acc[curr] = {
      ...obj[curr],
      value: "",
    };

    return acc;
  }, {});
};

// all key value pairing
const mapObjectArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};


const DynamicFrom = () => {
  const [fromState, setFromState] = useState(transformObject(fromfildes));
  const fromData = mapObjectArray(fromState);
  // console.log(fromData)
  // console.log(fromState)
//   console.log(setFromState)

    const handelSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(fromState).reduce((acc, curr) => {
      // console.log(acc)
      // console.log(curr)
      // console.log(fromState[curr])
      // console.log(fromState[curr].value)

      acc[curr] = fromState[curr].value;
      return acc;
    }, {});
    console.log(values);
  };

    const handelChange = (event) => {
     console.log(event)
      setFromState({
          ...fromState,
          [event.target.name]: {
            ...fromState[event.target.name],
            value:event.target.value
        }
    })
  };

  return (
    <form onSubmit={handelSubmit}>
      {fromData.map((item, index) => (
        <div key={index}>
          <label>{item.label}</label>
          <input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            value={item.value}
            onChange={handelChange}
          />
        </div>
      ))}
      <button>Submit</button>
    </form>
  );
};

export default DynamicFrom;
