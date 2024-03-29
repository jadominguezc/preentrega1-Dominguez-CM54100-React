import "./itemlistcontainer.css"

function ItemListContainer(props) {
  return (
    <div className="container">
      <br/><br/>
        <div className="message">
          <br/><br/><br/>
          {props.greeting}
          <br/><br/><br/><br/>
        </div>
    </div>
  )
}

export default ItemListContainer
