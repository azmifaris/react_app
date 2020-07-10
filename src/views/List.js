import React,{Component} from 'react';
import '../App.css';
//class ProductTypeRow
class ProductTypeRow extends React.Component {
    render() {
      const type = this.props.type;
      return (
        <tr>
          <th colSpan="2">
            {type}
          </th>
        </tr>
      );
    }
  }
  //class ProductRow
  class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const nama = product.ready ?
        product.nama :
        <span style={{color: 'red'}}>
          {product.nama}
        </span>;
  
      return (
        <tr>
          <td>{nama}</td>
          <td>{product.harga}</td>
        </tr>
      );
    }
  }
  //class ProductTable
  class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastType = null;
  
      this.props.products.forEach((product) => {
        if (product.nama.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.ready) {
          return;
        }
        if (product.type !== lastType) {
          rows.push(
            <ProductTypeRow
              type={product.type}
              key={product.type} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.nama}
          />
        );
        lastType = product.type;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>nama</th>
              <th>harga</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  //class SearchBar untuk proses pencarian
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  //class FilterableProductTable untuk mefilter produk yang tersedua
  class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }
  //kelas list 
class List extends Component{
    render(){
      //deskripsi product
        const PRODUCTS = [
            {type: "Mobil", harga: "Rp 148.000.000", ready: true, nama: "Brio"},
            {type: "Mobil", harga: "Rp 205.500.000", ready: true, nama: "Mobilio"},
            {type: "Mobil", harga: "Rp 252.500.000", ready: false, nama: "Jazz"},
            {type: "Motor", harga: "Rp 16.000.000", ready: true, nama: "Beat"},
            {type: "Motor", harga: "Rp 29.000.000", ready: false, nama: "PCX"},
            {type: "Motor", harga: "Rp 35.000.000", ready: true, nama: "CBR150R"}
          ];
          
          
      return (
        <div className="App">
            <h1>List Produk</h1>
            
            <center><FilterableProductTable products={PRODUCTS} /></center>
        </div>
      );
  
    };
    
  }
  export default List;


