import NavBar from './Components/NavBar'
import MyList from './Components/MyList'
import Cards from './Components/Cards'
import { connect } from "react-redux"
import './App.css';

function App(props) {
  let { cards, empty } = props

  return (
    <div className="App">
      <NavBar />
      <MyList text="Add List" />
      <div className="container">
        {cards.map((card, index) => {
          return <Cards index={index} key={index} src={card.src} name={card.name} btnText="Remove"></Cards>
        })}
      </div>
      <MyList text="Remove List" />

      <div className="container">
        {empty.map((empty, index) => {
          return <Cards index={index} key={index} src={empty.src} name={empty.name} btnText="Add" ></Cards>
        })}
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  cards: state.app.cards,
  empty: state.app.empty,
  email: state.app.email,
  counter: state.app.counter,
})

// const mapDispatchToProps = dispatch => {
// return {
//   set_Data: (counter) => dispatch(set_Data(counter)),
//   increment: (counter) => dispatch(inc_counter(counter)),
//   }
// }
export default connect(mapStateToProps)(App);
