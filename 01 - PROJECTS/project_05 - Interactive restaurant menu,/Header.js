const Header = (props) => {

  const activeItems = props.items.filter(item => item.active === true)
  const number = activeItems.length

  return (
    <header>
    <h2> The size of the order: {number} </h2>
    <h2> To pay: {number ? `${number * 10} euro` :  "buy something"} </h2>
    </header>
  )

}