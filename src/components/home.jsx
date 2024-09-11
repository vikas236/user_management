import "../css/home.css";

function Home() {
  function sendMsg() {
    const input = document.querySelector(".home .chat_box input");
    const msg = input.value;
    const msgs = document.querySelector(".home .chat_box .msgs_list .right");
    const p = document.createElement("p");

    p.innerHTML = msg;

    if (msg) msgs.appendChild(p);
  }

  return (
    <div className="home">
      <span className="user_id"></span>
      <div className="chat_box">
        <div className="msgs_list">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="msg_input">
          <input type="text" />
          <button onClick={sendMsg}></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
