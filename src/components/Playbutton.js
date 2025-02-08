const PlayButton = (props) => {
  const { handleviewChange } = props;

  return (
    <button className="play-button" onClick={handleviewChange}>
      Play
    </button>
  );
};

export default PlayButton;
