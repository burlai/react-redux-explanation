import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";

const SimpleComponent = () => {
  const count = useSelector((state: StoreType) => state.countReducer.count);

  return (
    <div>
      <h3>The number from store is: {count}</h3>
    </div>
  );
};

export default SimpleComponent;
