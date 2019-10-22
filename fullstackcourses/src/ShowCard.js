
import React, { Component } from 'react'
export default class ShowCard extends Component {

  cardClicked = (title) => {
      console.log("clicked" , title);
  }
  render() {
    const { tutorials } = this.props;
    return (
      <div className=" container-fluid card-deck ">
        {tutorials.map((elem, id) => {
          return (
            <div class="card border-primary mb-3" onClick={() => this.cardClicked(elem.Title)}>
              <div class="card-body">
                <h5 class="card-title">{elem.Title}</h5>
                <p class="card-text">{elem.Description}</p>
                <hr className="bg-primary" />
                <p>Official Website : <a href={elem.Link}>{elem.Link}</a></p>
              </div>
            </div>
          );

        })}




      </div>


    )
  }
}
