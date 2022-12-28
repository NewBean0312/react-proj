import { useState } from "react";
import classnames from "https://cdn.skypack.dev/classnames";

let NotifyOnve__workDone = false;

function NotifyOnce({children}) {
  const [visible, setVisible] = useState(false);
  
  if (NotifyOnve__workDone == false) {
    setTimeout(function () {
      setVisible(true);
    }, 1000);
  
    setTimeout(function () {
      setVisible(false);
    }, 3000);

    NotifyOnve__workDone = true;
  }

  return (
    <div 
      className={classnames(
        "fixed transition-all right-[10px]",
        {"top-[-60px]": !visible},
        {"top-[10px]": visible},
      )}
    >
      {children}
    </div>
  );
}

function Alert({color: color_, children}) {
  const color = color_ ?? "red";
  return (
    <>
      <div className="alert alert-info shadow-lg">
        <div className={`text-[${color}]`}>
          <span>
            <i className="fa-solid fa-circle-info"></i>
          </span>
          <span>{children}</span>
        </div>
      </div>
    </>
  );
}

function Notice() {
  return (
    <>
      <NotifyOnce>
        <Alert>"안녕" 반가워</Alert>
      </NotifyOnce>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reprehenderit, vitae molestiae eius quasi, dolores, eum similique ullam
        impedit facilis maiores ipsum sunt architecto ad deleniti iste sint 
        odio libero aut.
      </div>
    </>
  );
}

export default Notice;
