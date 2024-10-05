import * as React from "react";
import { Auth } from "../Auth/Auth";
import { Register } from "../Auth/Register";

export default function Home() {
  const [isRegistered, setIsRegistered] = React.useState(true);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {isRegistered ? (
        <Auth setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}
