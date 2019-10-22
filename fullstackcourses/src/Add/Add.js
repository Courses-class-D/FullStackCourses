import React, { Component } from 'react';
import AddTutorial from "./AddTutorial"
import AddTag from "./AddTag"
import axios from 'axios'

import uuid from 'uuid'


export default class Add extends Component {

    state= {
        tutorials :[]
        //   {
        //       id :uuid(),
        //       Title:"Androis Tutorial",
        //       Link: "https://www.tutorialspoint.com/android/index.htm",
        //       Description:"Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers",
        //       Tag:"Android",
        //       TypeOfTutorial:"Video",
        //       TyoeOfPay:"Free",
        //       SkillLevel:"Beginner"
        //   },
        //   {
        //     id : uuid(),
        //     Title:"PHP Tutorial",
        //     Link: "https://www.w3schools.com/php/",
        //     Description:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",
        //     Tag:"PHP",
        //     TypeOfTutorial:"Video",
        //     TyoeOfPay:"Free",
        //     SkillLevel:"Intermediate"
        //   },
        //   {
            
        //     id : uuid(),
        //     Title:"Laravel Tutorial",
        //     Link: "https://laravel-news.com/your-first-laravel-application",
        //     Description:"Laravel focuses on the end user first, which means its focus is on simplicity, clarity, and getting work done",
        //     Tag:"Laravel",
        //     TypeOfTutorial:"Video",
        //     TyoeOfPay:"Free",
        //     SkillLevel:"Advanced"
        //   }
        // ]
        ,
        tags:[
          {id:uuid(),
            label:"Android",
          tagLink:"www.android.com",
          value:"Android"
      
            },
            {id:uuid(),
              label:"php",
              tagLink:"www.php.com",
              value:"php"
                }
      
        ]
      }
      
      readTutorials=()=>{
        axios.get(`http://localhost:9000/data`).then((res)=>{
          console.log(res.data)
          const tutorials =res.data;
          this.setState({tutorials})
      })}
      
      componentDidMount(){
        this.readTutorials();
      }
      
      
      addtutorial =(tutorial)=>{
        axios.post(`http://localhost:9000/addtutorial`,{tutorial})
        .then(({data})=> {
          // console.log(response);
          this.setState({tutorials:data})
        })
        .catch(function (error) {
          console.log(error);
        });
        this.readTutorials();
      }
      
      
      
      addtag=(tag)=>{
        let newTag = this.state.tags
        if(
          tag.label !=="" && 
          tag.tagLink!=="" 
              
      ){
      
        newTag.push(tag)}
        
        this.setState({tags:newTag})
      }
      
        render(){
      const {addtutorial,addtag}= this
      const {tutorials,tags}= this.state
          return(
            <>
                   <AddTutorial addtutorial={addtutorial} tutorials={tutorials} tags={tags} />     
                   <AddTag addtag={addtag} tags={tags}/>
      
                      {/* <BrowserRouter>
                        <Link to="/AddTag">Tag</Link>
                        <Route path="/AddTag">
                        <AddTag addtag={addtag} tags={tags}/>
                        </Route>
                      </BrowserRouter>  */}
      
            </>
          );
        }
        


}