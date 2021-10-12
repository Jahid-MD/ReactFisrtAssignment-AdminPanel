import React, { Component } from 'react';
import axios from 'axios'
import "./style.css"

class AdminPage extends Component {
    constructor(){
        console.log("constructor()")
        super()
        this.state={
            num:0,
            statement:"",
            users:[],
            filteredUser:[],
            activeUser:""
        }
    }
    
   
     myFunc=async()=>{
        const response =await axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'")
        this.setState({users:response.data})
        this.setState({filteredUser:this.state.users})
        
    }
    async componentDidMount(){
     this.myFunc()
    
    }
    handlefilter=(e)=>{
      let filterData= this.state.users.filter(item=>{
        return item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || item.lastName.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase())
    })
       this.setState({filteredUser:filterData})
    }
    handleClick=(data)=>{
        let employees=document.getElementsByClassName("data-row")
        console.log(employees.length)
        for( let i=0;i<employees.length;i++){
            employees[i].className="data-row"
        }
        let activeEmployee=document.getElementById(data.id+data.firstName)
        activeEmployee.className="data-row active"
      let insertUser= <div>
            <div id="info-content" style={{display:"block"}}>
        <div><b>User selected:</b> {data.firstName} {data.lastName}</div>
        <div>
            <b>Description: </b>
            <textarea cols="50" rows="5" readonly>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
            </textarea>
        </div>
        <div><b>Address:</b> {data.address.streetAddress}</div>
        <div><b>City:</b> {data.address.city}</div>
        <div><b>State:</b> {data.address.state}</div>
        <div><b>Zip:</b> {data.address.zip}</div>
    </div>
            
        </div>
        this.setState({activeUser:insertUser})
        console.log(insertUser)
    }
    render() {
        console.log(this.state.users)
        
        return (
            <div>
                 <main>

<div id="table-section">

    <form action="/">
        <img src='./img/search-icon.svg' alt="Search Icon" />
        <input  onChange={this.handlefilter} type="text" placeholder="Enter something" name="search-box" id="search-box" />
    </form>

    <div id="table-wrapper">

        <div id="table-headers">
            <table>
                <thead>
                    <tr>
                        <th class="column1">Id</th>
                        <th class="column2">FirstName</th>
                        <th class="column3">LastName</th>
                        <th class="column4">Email</th>
                        <th class="column5">Phone</th>
                    </tr>
                </thead>
            </table>
        </div>

        <div id="table-data">
            <table>
                <tbody>
                    {this.state.filteredUser.map(item=>{
                    return <tr onClick={()=>this.handleClick(item)} id={item.id+item.firstName}  key={item.id+item.firstName} class="data-row">
                    <td class="column1">{item.id}</td>
                    <td class="column2">{item.firstName}</td>
                    <td class="column3">{item.lastName}</td>
                    <td class="column4">{item.email}</td>
                    <td class="column5">{item.phone}</td>
                </tr>
                })}
                </tbody>
            </table>
        </div>

    </div>

</div>




<div id="info-wrapper">
    <h1>Details</h1>
    <p>Click on a table item to get detailed information</p>
    {this.state.activeUser}
</div>

</main>
            </div>
        );
    }
}

export default AdminPage;

