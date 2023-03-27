const Title = props => (
  <>
    <h1 style={{ backgroundColor: props.bg }}>{props.content}</h1>
    <p>{props.paragraph}</p>
  </>
);
export default Title;
