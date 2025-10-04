import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="font-bold text-amber-300">Tailwind and Props</h1>
      <br />
      <Card
        url="https://www.royalcupcoffee.com/sites/default/files/images/blog/AdobeStock_159183621update.jpg"
        imgText="Coffee"
        title="Coffee and Developers"
        description="Coffee is extremely favourite to developers."
      />
      <br />
      <Card
        url="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
        title="Code and Developers"
        imgText="Code"
      />
    </>
  );
}

export default App;
