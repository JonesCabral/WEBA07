import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}


props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {login:'',password:''}
            if(login === '') validateObj.login = 'is-invalid'
            if(password === '') validateObj.password = 'is-invalid'
            setValidate(validateObj)


export default Home;
