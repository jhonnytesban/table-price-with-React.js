import './App.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Join our community</h1>
      <p className="header__text">30-day, hassle-free money backguarantee</p>
      <p className="header__text2">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
    </header>
  )
}

function Info() {
  return (
    <section className="section-info">
      <h2 className="info__subtitle">Monthly Subscription</h2>
      <p className="info__price">$29 <span className="info__span">per month</span></p>
      <p className="info__text">Full access for less than $1 a day</p>
      <button className="info__button">Sign Up</button>
    </section>
  )
}

function About() {
  return (
    <section className="section-about">
      <h2 className="about__title">Why Us</h2>
      <p className="about__text">Tutorials by industry experts</p>
      <p className="about__text">Peer and experts code review</p>
      <p className="about__text">Coding exercises</p>
      <p className="about__text">Access to our Github repos</p>
      <p className="about__text">Community forum</p>
      <p className="about__text">Flashcard decks</p>
      <p className="about__text">New videos every weeks</p>
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
