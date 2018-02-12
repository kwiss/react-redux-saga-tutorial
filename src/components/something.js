import React, { Component } from 'react'

const Something = props => (
  <div>
    something
    {console.log(props)}
    {!props.something.isFetchings && (
      <div>
        {props.something.data.map((item, index) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image_url} alt={item.name} />
            <p>{item.tagline}</p>
            <p>{item.brewers_tips}</p>
            <span>{item.contributed_by}</span>
            <span>{item.first_brewed}</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    )}
  </div>
)

export default Something
