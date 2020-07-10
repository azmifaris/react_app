import React,{Component} from 'react';
import '../App.css';

class Home extends React.Component {
    //deskripsi nilai awal dari masing-masing variabel
     constructor(props){
        super(props);
        this.state={
            name:'',
            alamat:'',
            skill:[],
        }
    //deskripsi fungsi ketika terjadi perubahan, submit, dan pick
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onPick = this.onPick.bind(this);

     }
     //fungsi apabila terjadi submit
    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const {name} = this.state;
        alert('namaku adalah '+this.state.name
         +', aku bisa '+this.state.skill
         +', alamatku di '+this.state.alamat 
        )
    }
    // fungsi apabila terjadi perubahan value
    onChange(event){
        const{name, value } = event.target;
        this.setState({[name] : value})
        
    }
    //fugnsi apabila terjadi pick pada multi select
    onPick(event){
        let skill = [...this.state.skill];
        let idx = skill.findIndex(element => event.target.value === element);
        if(idx > 0){
            skill = [...skill.slice(0, idx), ...skill.slice(idx+1, skill.length)]    
        }else if(idx == 0){
            skill = [...skill.slice(idx+1, skill.length)]
        }else {
        skill.push(event.target.value)
        }
        this.setState({skill})
    } 
    render(){
        const{name, gaji, alamat, skill, gender} = this.state;
    return (
    <div>
        <h1>Selamat Datang</h1>
        <h5>silahkan masukan data anda</h5>
        <form onSubmit={this.onSubmit}> 
        <label>
                Nama :
                <input name="name" type="text" value={name} onChange={this.onChange}/>
                <br/>
                Skill
                <select multiple value={skill} onChange={this.onPick}>
                    <option value="memasak">Memasak</option>
                    <option value="menari">Menari</option>
                    <option value="menyanyi">Menyanyi</option>
                </select><br/>
                Alamat
                <textarea name="alamat" value={alamat} onChange={this.onChange}></textarea> 
                <br/><button type="submit">Submit</button>
            </label>
        </form>        
    </div>
  );
}
}

export default Home;

