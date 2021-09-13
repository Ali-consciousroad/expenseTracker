import "./Card.css";
/*  
    The idea is to use this component as a shell
    for our other components 
    Because Card is a custom component and not a <div> like before, we need to explicitly accept all the added css class.
    const classes = 'card ' + props.className; 
    will do just that.
*/


function Card(props) {
  // Withtout the withe space after "card" the app won't be displayed properly!!! Why? 
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
