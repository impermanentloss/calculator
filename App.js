import './App.css';
import ParticlesBg from 'particles-bg'
import React from 'react';


const DONATIONS = [
  {
    name:"Bitcoin",
    symbol:"BTC",
    walletAdr:"1EHpwE4upzdSgzs4ErJcchJKGkzjgixsrx",
    logo:""
  }, {
    name:"Ethereum",
    symbol:"ERC20",
    walletAdr:"0x58F7F9b524357571d376811369708E522A13Fc53",
    logo:""
  }, {
    name:"Binance BNB",
    symbol:"ERC20",
    walletAdr:"0x58F7F9b524357571d376811369708E522A13Fc53",
    logo:""
  }, {
    name:"Avalanche AVAX ",
    symbol:"ERC20",
    walletAdr:"0x58F7F9b524357571d376811369708E522A13Fc53",
    logo:""
  }
]

const STYLES={
  main:{marginBottom:"-15px"},
  header:{height:"150px",overflow: "hidden",paddingTop:"50px",paddingLeft:"20vw"},
  content:{background:"white",overflow: "hidden",padding:"50px"},
  footer:{background:"grey",overflow: "hidden",padding:"50px",color:"white"},
  input:{marginLeft:"5px",marginRight:"5px",minWidth:"250px"},
  table:{display: "table",margin: "auto"},
  textCenter:{textAlign:"center"}
}


class App extends React.Component {
 
  constructor(props){
    super(props)
    this.state={
      initialValueA:0,
      initialValueB:0,
      initialAmountA:0,
      initialAmoungB:0,
      initialPriceAB:0,
      currentValueA:0,
      currentValueB:0,
      currentAmountA:0,
      currentAmountB:0,
      currentPriceAB:0,
      totalSpent:0,
      totalReceived:0,
      totalPotential:0,
      impermanentLossValue:0,
      impermanentLossPercent:0,
    }
    this.changeValue = this.changeValue.bind(this)
    this.calculateImpermanentLoss = this.calculateImpermanentLoss.bind(this)
  }

  getDonationComponent(){
    let donations = []
    for(let counter=0;counter<DONATIONS.length;++counter){
      donations.push(<div>

        {DONATIONS[counter].name} ({DONATIONS[counter].symbol}): {DONATIONS[counter].walletAdr}

      </div>) 
    }
    return donations
  }

  calculateImpermanentLoss(){
    let k =0
    let initialPriceAB =0
    let currentPriceAB =0

    let localThis = this

    let calculateStuff = function(){
      let currentAmountA = 0
      let currentAmountB =0
      let totalSpent = 0
      let totalReceived  = 0
      let totalPotential = 0
      let impermanentLossValue = 0
      let impermanentLossPercent = 0

      if(localThis.state.currentPriceAB !=0){
        currentAmountA = localThis.state.initialAmountA*(Math.sqrt(localThis.state.initialPriceAB/localThis.state.currentPriceAB))
      }
      currentAmountB =currentAmountA*localThis.state.currentPriceAB
   
      totalSpent = (localThis.state.initialValueA*localThis.state.initialAmountA)+(localThis.state.initialValueB*localThis.state.initialAmountB)
     
      totalReceived = (localThis.state.currentValueA*currentAmountA)+(localThis.state.currentValueB*currentAmountB)

      totalPotential = (localThis.state.currentValueA*localThis.state.initialAmountA)+(localThis.state.currentValueB*localThis.state.initialAmountB)

      impermanentLossValue = totalPotential - totalReceived

      if(totalSpent!=0){
        impermanentLossPercent = impermanentLossValue / totalSpent
      }

      localThis.setState({
        currentAmountA,
        currentAmountB
      })

      if(!isNaN(totalSpent)){
        localThis.setState({
          totalSpent
        })
      }
      if(!isNaN(totalSpent)){
        localThis.setState({
          totalSpent
        })
      }
      if(!isNaN(totalReceived)){
        localThis.setState({
          totalReceived
        })
      }
      if(!isNaN(totalPotential)){
        localThis.setState({
          totalPotential
        })
      }
      if(!isNaN(impermanentLossValue)){
        localThis.setState({
          impermanentLossValue
        })
      }
      if(!isNaN(impermanentLossPercent)){
        localThis.setState({
          impermanentLossPercent
        })
      }
    }

    if(this.state.initialValueB != 0){
      initialPriceAB = this.state.initialValueA/this.state.initialValueB
      this.setState({
        initialPriceAB
      },()=>{calculateStuff()}) 
    }
    if(this.state.currentValueB != 0){
      currentPriceAB = this.state.currentValueA/this.state.currentValueB
      this.setState({
        currentPriceAB
      },()=>{calculateStuff()}) 
    }

    calculateStuff()
  }

  changeValue(event,isCoinA,isInitial,isValue){
    if(isCoinA){
      if(isInitial){
        if(isValue){
          this.setState({
            initialValueA:event.target.value
          },()=>this.calculateImpermanentLoss())
        }else{
          this.setState({
            initialAmountA:event.target.value
          },()=>this.calculateImpermanentLoss())
        }
      }else{
        if(isValue){
          this.setState({
            currentValueA:event.target.value
          },()=>this.calculateImpermanentLoss())
        }else{
          this.setState({
            currentAmountA:event.target.value
          },()=>this.calculateImpermanentLoss())
        }
      }
    }else{
      if(isInitial){
        if(isValue){
          this.setState({
            initialValueB:event.target.value
          },()=>this.calculateImpermanentLoss())
        }else{
          this.setState({
            initialAmountB:event.target.value
          },()=>this.calculateImpermanentLoss())
        }
      }else{
        if(isValue){
          this.setState({
            currentValueB:event.target.value
          },()=>this.calculateImpermanentLoss())
        }else{
          this.setState({
            currentAmountB:event.target.value
          },()=>this.calculateImpermanentLoss())
        }
      }
    }
  }

  render(){
    return (
      <div style={STYLES.main}>
        <div className="header"  style={STYLES.header}>
          <h1>
            Impermanent loss calculator
          </h1> 
        </div>
        <div className="content" style={STYLES.content}> 
          <div style={STYLES.table}>
            <h4>
              Initial
            </h4>
            <div>
              Value A <input onChange={(event)=>{this.changeValue(event,true,true,true)}} placeholder="Initial coin A value (USD) in the pool"style={STYLES.input} type="number"  />
              Amount A <input onChange={(event)=>{this.changeValue(event,true,true,false)}} placeholder="Initial coin A units" style={STYLES.input} type="number" />
            </div>
            <div>
              Value B  <input onChange={(event)=>{this.changeValue(event,false,true,true)}} placeholder="Initial coin B value (USD) in the pool" style={STYLES.input}  />
              Amount B <input onChange={(event)=>{this.changeValue(event,false,true,false)}} placeholder="Initial coin B units " style={STYLES.input}  type="number" />
            </div>
            <div>
              <p>
                Initial coin A/B price: {this.state.initialPriceAB}
              </p>
            </div>
          </div>

          <div style={STYLES.table}>
            <h4>
              Current values
            </h4>
            <div>
              Value A <input onChange={(event)=>{this.changeValue(event,true,false,true)}} placeholder="Current coin A value (USD) in the pool"style={STYLES.input} type="number"  />
              Amount A <input value={this.state.currentAmountA} disabled onChange={(event)=>{this.changeValue(event,true,false,false)}} placeholder="Current coin A units" style={STYLES.input} type="number" />
            </div>
            <div>
              Value B <input  onChange={(event)=>{this.changeValue(event,false,false,true)}} placeholder="Current coin B value (USD) in the pool" style={STYLES.input}  />
              Amount B <input value={this.state.currentAmountB} disabled onChange={(event)=>{this.changeValue(event,false,false,false)}} placeholder="Current coin B units " style={STYLES.input}  type="number" />
            </div>
            <div>
              <p>
                Current coin A/B price:  {this.state.currentPriceAB}
              </p>
            </div>
          </div>

          <h3 style={STYLES.textCenter}>
            Results
          </h3>

          <div style={STYLES.table}>
            <p>
              Total spent (USD): {this.state.totalSpent}
            </p>
            <p>
              Total acquired (USD): {this.state.totalReceived}
            </p>
            <p>
              Total potential (USD): {this.state.totalPotential}
            </p>
            <p>
              Impermanent loss (USD): {this.state.impermanentLossValue}
            </p>
            <p>
              Impermanent loss : {this.state.impermanentLossPercent}%
            </p>
          </div>

        </div>
        <div className="footer" style={STYLES.footer}>
          <div style={STYLES.table}>
            <h2>
              Roadmap coming soon.
            </h2>
            Sponsor this project by donating: <br/> <br/>
            {this.getDonationComponent()}
          </div>
        </div>
     
        <ParticlesBg type="cobweb"  bg={true} />
      </div>
    )
  }

}

export default App;
