// eslint-disable-next-line react/prop-types
const BottomText = ({ count }) => {
  return (
    <div className="container-custom grid-rows-1 mt-5 text-center">
      Count is {count == 0 ? "Zero" : count > 0 ? "Positive" : "Negative"}
    </div>
  );
};

export default BottomText;
