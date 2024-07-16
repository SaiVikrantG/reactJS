const Box = props => {
  const {name,class} = props;

  return(
      <div className={class}>
          <p>{name}</p>
      </div>
  );
}

const element = (
  <div class="background">
  <h1>Boxes</h1>
    <div className="d-flex flex-row">
    <Box class="background-small" name="Small"/>
    <Box class="background-medium" name="Medium"/>
    <Box class="background-large" name="Large"/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
