import "./Lesson8.scss";

const Lesson8 = (props) => {
  //   function handleOnClick1() {
  //     alert("click me"); //binding
  //   }

  const handleOnClick2 = () => {
    alert("click me"); //this
  };

  //event handler

  //running (execute) vs passing functions

  return (
    <div className="lesson8">
      <h3>Lesson 8 :</h3>
      <div>
        <button
          onClick={handleOnClick2} //passing
          //onClick={handleOnClick2()} //running function => execute function immediately when render
        >
          Tham Chiếu
        </button>
      </div>
      <div>
        <button
        // onClick={alert("Click me")}
        >
          Inline
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            alert("Click me"); //annonymous function
          }}
        >
          Arrow function
        </button>
      </div>
    </div>
  );
};

export default Lesson8;
