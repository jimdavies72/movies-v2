const MovieCard = ({ props }) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.actors}</h3>
      <h3>{props.synopsis}</h3>
    </div>
  );
};
