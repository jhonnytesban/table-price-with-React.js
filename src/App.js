import './App.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Join our community</h1>
      <p className="text">30-day, hassle-free money backguarantee</p>
      <p className="text">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
    </header>
  )
}

function Info() {
  return (
    <section className="section">
      <h2 className="subtitle">Monthly Subscription</h2>
      <p className="section__text">$29 <span className="span">per month</span></p>
      <p className="section__info">Full access for less than $1 a day</p>
      <button className="button">Sign Up</button>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <h2>Why Us</h2>
      <p>Tutorials by industry experts</p>
      <p>Peer and experts code review</p>
      <p>Coding exercises</p>
      <p>Access to our Github repos</p>
      <p>Community forum</p>
      <p>Flashcard decks</p>
      <p>New videos every weeks</p>
    </section>
  )
}
function Board(){
  return (
    <div className="board">
      <Header />
      <Info />
      <About />
    </div>
  )
}

function App() {
  return (
    <div className="container-app">
      <Board />
    </div>
    
  );
}

export default App;
