import "./App.css"
import Accordion from "./components/Accordion"

function App() {
  return (
    <div className="App">
      <Accordion
        title={"Click Me!"}
        // content={``}
      >
        <img
          src="https://i.ytimg.com/vi/mRf3-JkwqfU/mqdefault.jpg"
          className="puppy"
          alt=""
        />
        <p>
          The Labrador Retriever, often abbreviated to Labrador, is a breed of
          retriever-gun dog from the United Kingdom that was developed from
          imported Canadian fishing dogs. The Labrador is one of the most
          popular dog breeds in a number of countries in the world, particularly
          in the Western world.
        </p>
        {/* <Accordion title={"Did you know?"}>
          <img
            src="https://i.ytimg.com/vi/mRf3-JkwqfU/mqdefault.jpg"
            className="puppy"
            alt=""
          />
          <p>
            The Labrador Retriever, often abbreviated to Labrador, is a breed of
            retriever-gun dog from the United Kingdom that was developed from
            imported Canadian fishing dogs. The Labrador is one of the most
            popular dog breeds in a number of countries in the world,
            particularly in the Western world.
          </p>
        </Accordion>
        <Accordion title={"Did you know?"}>
          <img
            src="https://i.ytimg.com/vi/mRf3-JkwqfU/mqdefault.jpg"
            className="puppy"
            alt=""
          />
          <p>
            The Labrador Retriever, often abbreviated to Labrador, is a breed of
            retriever-gun dog from the United Kingdom that was developed from
            imported Canadian fishing dogs. The Labrador is one of the most
            popular dog breeds in a number of countries in the world,
            particularly in the Western world.
          </p>
        </Accordion> */}
      </Accordion>
    </div>
  )
}

export default App
