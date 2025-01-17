import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Rohit Kumar Singh",
    location: "Noida",
    tagline: "I'm a Node.JS Developer",
    email: "rohit.k.chauhan1997@gmail.com",
    availability: "Open for work",
    brand:
      "I am a Node.js developer who builds scalable solutions by combining technical expertise with creative thinking and a user-first approach. My ability to understand end-user needs helps me craft efficient, user-centered digital products that drive impactful results.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
