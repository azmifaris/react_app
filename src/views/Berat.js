import React,{Component} from 'react';
import '../App.css';
//kelas untuk mengatur massa input
class MassaInput extends React.Component{
    _handleChange = (e) =>{
        this.props.onChangeMassa(e.target.value)
    }
    render(){
        const { labelMassa, massa } = this.props;
    return(
        <>
            <label>
                {labelMassa === 'gr' ? 'Gram:' : 'Kilo Gram:'}:
                <input type="number" value={massa} onChange={this._handleChange} />
            </label>
        <br/>
        </>
    )
    }
}

class App extends React.Component {
    //deklarasi nilai awal variabel
    constructor(props){
        super(props);
        this.state={
            gram : 0,
            kilogram : 0
        }
    }
    //perubahan pada gram
    onChangeGram = (gram) => {
        let kilogram = (parseFloat(gram) / 1000).toString();
        this.setState({gram, kilogram})
    }
    //perubahan pada kilogram
    onChangeKiloGram = (kilogram) => {
        let gram = (parseFloat(kilogram) * 1000).toString();
        this.setState({gram, kilogram})
    }
    //fungsi submit
    onSubmit = (e) => {
        e.preventDefault();
        alert(this.state.gram+' gram  sama dengan '+this.state.kilogram+' Kg')
    }

    render(){
        const {gram, kilogram} = this.state;
        
        return (
            <form onSubmit={this.onSubmit}>
                <MassaInput labelMassa="gr" massa={gram} onChangeMassa={this.onChangeGram} />
                <MassaInput labelMassa="Kilo Gram" massa={kilogram} onChangeMassa={this.onChangeKiloGram} />
                <button type="submit">Convert</button>
            </form>
        )
    }


}
    
  
export default App;
