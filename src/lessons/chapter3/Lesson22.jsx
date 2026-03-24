const Lesson22 = (props) => {
  const obj = {
    name: "triminh",
    address: "hcm",
    //Ghi đè
    // name: "Minh Tri đẹp trai",
  };

  let obj1 = { ...obj, name: "Minh Tri đẹp trai", phone: 123123 };

  //   console.log(">>> obj ", obj);
  //   console.log(">>> obj1 ", obj1);

  // ví dụ về copy: nested object
  const person = {
    name: "abc",
    address: {
      city: "hn",
      country: "vn",
    },
    job: {
      title: "dev",
      detail: {
        position: "boss",
        salary: "5k",
      },
    },
  };

  // modify directly
  //   const clone = { ...person };
  //   clone.name = "update name"; // ok
  //   //   console.log(">>> check person: ", person, " clone= ", clone);

  //   clone.address.city = "hcm"; //2 level deep => not ok
  //   console.log(">>> check person: ", person, " clone= ", clone);

  // spread syntax
  const clone = {
    ...person,
    address: {
      ...person.address,
      city: "hcm",
    },
  };

  console.log(">>> check person: ", person, " clone= ", clone);

  return <div>Lesson 22;</div>;
};

export default Lesson22;
