class Counter extends React.Component{
    constructor(props){
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    
  }
  onIncrease(e){
    this.props.onIncrease(this.props.counterIndex)
  }
  onDecrease(e){
    this.props.onDecrease(this.props.counterIndex)
  }
  
  render(){
    return(
    <>
      <button onClick={this.onIncrease}>+</button>
      <span>{this.props.count}</span>
      <button onClick={this.onDecrease}>-</button>
    </>
      )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter1:0, counter2:0, counter3:0}
    this.onIncreaseCounter = this.onIncreaseCounter.bind(this)
    this.onDecreaseCounter = this.onDecreaseCounter.bind(this)
    this.onIncreaseAll = this.onIncreaseAll.bind(this)
    this.onDecreaseAll = this.onDecreaseAll.bind(this)
  }
  
  onIncreaseCounter(counterIndex){
    const counter = `counter${counterIndex}`
    this.setState({[counter]: this.state[counter]+1})
  }
  onDecreaseCounter(counterIndex){
    const counter = `counter${counterIndex}`
    this.setState({[counter]: this.state[counter]-1})
  }
  
  onIncreaseAll(){
    for(let counterIndex=1; counterIndex<=3; counterIndex++){
     this.onIncreaseCounter(counterIndex)
    }
  }
   onDecreaseAll(){
    for(let counterIndex=1; counterIndex<=3; counterIndex++){
     this.onDecreaseCounter(counterIndex)
    }
  }
  
  render(){
    return(
    <div>
        <h4>Item 1</h4>
        <Counter count = {this.state.counter1}
        counterIndex = {1}
        onIncrease = {this.onIncreaseCounter}
        onDecrease = {this.onDecreaseCounter} />
        <hr></hr>
        <h4>Item 2</h4>
        <Counter count = {this.state.counter2}
        counterIndex = {2}
        onIncrease = {this.onIncreaseCounter}
        onDecrease = {this.onDecreaseCounter} />
        <hr></hr>
        <h4>Item 3</h4>
       <Counter count = {this.state.counter3}
       counterIndex = {3}
       onIncrease = {this.onIncreaseCounter}
       onDecrease = {this.onDecreaseCounter} />
      <hr></hr>
       <button onClick={this.onIncreaseAll}>+All</button>
      <hr></hr>
       <button onClick={this.onDecreaseAll}>-All</button>
    </div>
      )
  }
  
}

ReactDOM.render(<App />, document.getElementById("root"));
