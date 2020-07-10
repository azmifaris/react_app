import React,{Component} from 'react';
import '../App.css';

//kelas untuk mengatur form input
class TimeInput extends React.Component{
    _handleChange = (e) =>{
        this.props.onChangeTime(e.target.value)
    }
    render(){
        const { curTime, time } = this.props;
    return(
        <>
            <label>
                {curTime === 'Sec' ? 'Detik:' : 'Menit:'}:
                <input type="number" value={time} onChange={this._handleChange} />
            </label>
        <br/>
        </>
    )
    }
}

class Waktu extends React.Component {
    // deklarasi variabel awal dengan nilai 0
    constructor(props){
        super(props);
        this.state={
            detik : 0,
            menit : 0
        }
    }
    //perubahan yang terjadi pada bagian detik
    onChangeDetik = (detik) => {
        let menit = (parseFloat(detik) / 60).toString();
        this.setState({detik, menit})
    }
    //perubahan yang terjadi pada bagian menit
    onChangeMenit = (menit) => {
        let detik = (parseFloat(menit) * 60).toString();
        this.setState({detik, menit})
    }
    //ketika dilakukan submit pada bagian input
    onSubmit = (e) => {
        e.preventDefault();
        alert(this.state.detik+' detik  sama dengan '+this.state.menit+' menit')
    }

    render(){
        const {detik, menit} = this.state;
        
        return (
            //form input
            <form onSubmit={this.onSubmit}>
                <TimeInput curTime="Sec" time={detik} onChangeTime={this.onChangeDetik} />
                <TimeInput curTime="Menit" time={menit} onChangeTime={this.onChangeMenit} />
                <button type="submit">Convert</button>
            </form>
        )
    }


}
    
  
export default Waktu;