const Lesson20 = (props) => {
  let a = 5;
  let b = a;

  b += 5;

  console.log(">>> check a: ", a);
  console.log(">>> check b: ", b);

  let person = {
    name: "Hỏi Dân IT",
    age: 25,
  };

  let member = person;
  member.age = 26;

  console.log(">>> check person: ", person);
  console.log(">>> check member: ", member);

  return <div>Lesson 20: What's wrong with 'normal' assign/copy ?</div>;
};

export default Lesson20;
