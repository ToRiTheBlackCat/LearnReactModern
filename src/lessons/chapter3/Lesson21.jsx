const Lesson21 = (props) => {
  let counter = 1;
  let copiedCounter = counter;
  copiedCounter = 2;

  console.log(" counter = ", counter, " and copiedCounter = ", copiedCounter);

  let person = {
    firstName: "Tri",
    lastName: "Minh",
  };
  // Shallow copy: chỉ copy giá trị của biến, nếu biến đó là kiểu dữ liệu nguyên thủy
  // (primitive type) thì sẽ copy giá trị, còn nếu biến đó là kiểu dữ liệu phức tạp (complex type)
  //  như object, array thì sẽ copy địa chỉ ô nhớ (reference) chứ không copy giá trị thực tế của
  //  object/array đó.
  let copiedPerson = person;

  copiedPerson.firstName = "Minh Tri 2 update";
  //   console.log(">>> check person: ", person);

  // Deep copy: tạo ra một bản sao hoàn chỉnh của đối tượng, bao gồm cả các đối tượng con bên
  // trong nó.
  let copiedPerson2 = { ...person };
  copiedPerson2.firstName = "Minh Tri";
  console.log(">>> check person: ", person);
  console.log(">>> check copied person: ", copiedPerson2);

  return <div>Lesson 21: Shallow copy và Deep copy</div>;
};

export default Lesson21;
