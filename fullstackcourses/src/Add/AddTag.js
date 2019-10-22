import React, { Component } from 'react';
import uuid from 'uuid'


export default class AddTutorial extends Component {

    state={
        label:"",
         tagLink:"",
         value:""
      }


      changeValues=(event)=>{
        let newValue=event.target.value
        this.setState({[event.target.name]:newValue})
      }
    
      render(){
        const {addtag,tags}=this.props

          return(
              <>
                <input name="label" placeholder="Tag Name" value={this.state.label} onChange={this.changeValues} />
        <input name="tagLink" placeholder="Tutorial Link" value={this.state.tagLink} onChange={this.changeValues} />



        <button onClick={()=>{
      addtag({id: tags.id=uuid(),
        label:this.state.label,
        tagLink:this.state.tagLink,
        value:this.state.label
    
    } )

           this.setState({ 
            label:"",
            tagLink:"",
          value:""})
                   }
                } >Add New Tag</button>

<table >
          <thead >
            <tr>
            <th >Number</th>
            <th >Tag Title</th>
            <th >Tag Link</th>
            <th >Value</th>
            
            </tr>
          </thead>
          <tbody style={{width:100%1}}>
               { tags.map((tags,index)=>{
                  return(
                    <tr>
                    <td >{tags.id}</td>
                    <td >{tags.label}</td>
                    <td >{tags.tagLink}</td>
                    <td >{tags.value}</td>
                   
                 
                    </tr>
                  )
                })}
          
          </tbody>
          </table>
              </>
          )
      }
}
