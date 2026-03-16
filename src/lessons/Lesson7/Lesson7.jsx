const Lesson7 = (props) => {
  function myFunction() {
    console.log(">> Function truyen thong");
  }

  let a = function () {
    console.log(">> Anonymous Function");
  };

  (function () {
    console.log(">> Anonymous Function2");
  })(); //Js tự gọi hàm ẩn danh mà không cần phải gọi nó

  //Arrow function
  let doSomething = () => {
    console.log(">> Arrow Function");
  };

  a();
  myFunction();
  doSomething();

  return (
    <div style={{ padding: "50px" }}>
      <h3>Lesson 7 Anonymous Function:</h3>
    </div>
  );
};

export default Lesson7;
