import React, { Component } from 'react';
import uuid from 'uuid'
// import {inputLink} from "react-input-link"


export default class AddTutorial extends Component {

    state={
      Title:"",
        Link:"",
        Description:"",
        Tag:"",
        TypeOfTutorial:"",
        TyoeOfPay:"",
        SkillLevel:""
    }

    
  changeValues=(event)=>{
    let newValue=event.target.value
    this.setState({[event.target.name]:newValue})
  }

  render(){
    const {addtutorial,tutorials,tags}=this.props
    // const {changeValues}=this


    return(
        <>
        <input name="Title" placeholder="Tutorial Title" value={this.state.Title} onChange={this.changeValues} />
        <input name="Link" placeholder="Tutorial Link" value={this.state.Link} onChange={this.changeValues} />
        <input name="Description" placeholder="Tutorial Description" value={this.state.Description} onChange={this.changeValues} />


          <select name="Tag" value={this.state.Tag} onChange={this.changeValues}   >
          <option selected  hidden >Choose</option>
                {
                  tags.map((tags,index)=>{
                      return(
                        <option value={tags.value}> {tags.label}</option>
                            )
                  })
                  
                }
        </select>

     

      
        <select name="TypeOfTutorial" value={this.state.TypeOfTutorial} onChange={this.changeValues}  >
            <option selected  hidden >Choose</option>
            <option value="Video" >Video</option>
            <option value="Blog" >Blog</option>
        </select>

        <select name="TyoeOfPay" value={this.state.TyoeOfPay} onChange={this.changeValues}  >
            <option selected  hidden >Choose</option>
            <option value="Free" >Free</option>
            <option value="Pay" >Pay</option>
        </select>

        <select name="SkillLevel" value={this.state.SkillLevel} onChange={this.changeValues}  >
            <option selected  hidden >Choose</option>
            <option value="Beginner" >Beginner</option>
            <option value="Intermediate" >Intermediate</option>
            <option value="Advanced" >Advanced</option>
        </select>

      

 <button onClick={()=>{
      addtutorial({id: tutorials.id=uuid(),
        Title:this.state.Title,
        Link:this.state.Link,
        Description:this.state.Description,
        Tag:this.state.Tag,
        TypeOfTutorial:this.state.TypeOfTutorial,
        TyoeOfPay:this.state.TyoeOfPay,
        SkillLevel:this.state.SkillLevel
    } )

           this.setState({ 
               Title:"",
                Link:"",
                Description:"",
                Tag:"",
                TypeOfTutorial:"",
                TyoeOfPay:"",
                SkillLevel:""})
                   }
                } >Add New Tutorial</button> 
            
              {/* 
                <Router>
                <button><Link to="addtag">add</Link></button>
                </Router> */}


<table >
          <thead >
            <tr>
            <th >Number</th>
            <th >Title</th>
            <th >Link</th>
            <th >Description</th>
            <th >Tags</th>
            <th >Type Of Tutorial</th>
            <th >Tyoe Of Pay</th>
            <th >Skill Level</th>
            </tr>
          </thead>
          <tbody >
               { tutorials.map((tutorials,index)=>{
                  return(
                    <tr>
                    <td >{tutorials._id}</td>
                    <td >{tutorials.Title}</td>
                    <td ><a href={tutorials.Link}>Tutorial Link</a></td>
                    <td >{tutorials.Description}</td>
                    <td >{tutorials.Tag}</td>
                    <td >{tutorials.TypeOfTutorial}</td>
                    <td >{tutorials.TyoeOfPay}</td>
                    <td >{tutorials.SkillLevel}</td>
                 
                    </tr>
                  )
                })}
          

          </tbody>
          </table>
      </>
    )
  }
}