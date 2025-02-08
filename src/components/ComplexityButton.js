const ComplexityButton = (props) => {
  const { complexity, borderSize, bombCount, selectedComplexity, onClick } = props;

  return (
    <div
      className={`complaxity-div ${complexity} ${
        selectedComplexity ? "complexityBorder" : ""
      }`}
      onClick={onClick}
    >
      <p>{complexity}</p>
      <p>{borderSize} board</p>
      <p>{bombCount} bombs</p>
    </div>
  );
};

export default ComplexityButton;
