const MovieCard = (props) => {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      {props.actors.length > 0 &&
        props.actors.map((actor, index) => {
          return (
            <div key={index}>
              <h3>{actor}</h3>
            </div>
          );
        })}
      {props.synopsis ? (
        <h3>Synopsis: {props.synopsis}</h3>
      ) : (
        <h3>Synopsis: n/a</h3>
      )}
    </div>
  );
};

export default MovieCard;
