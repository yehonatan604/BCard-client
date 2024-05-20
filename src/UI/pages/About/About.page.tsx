import { useEffect, useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component was mounted");

    return () => {
      console.log("component was unmounted");
      setCount(0);
    };
  }, []);

  return (
    <>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default About;
