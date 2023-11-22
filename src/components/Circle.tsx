import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import { changeColor } from "../state/Color/colorSlice";

export default function Circle() {
  const color = useSelector((state: RootState) => state.color.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "35vh",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: `${color}`,
          borderRadius: 100,
          width: 200,
          height: 200,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "400px",
        }}
      >
        <button onClick={() => dispatch(changeColor("blue"))}>Blue</button>
        <button onClick={() => dispatch(changeColor("green"))}>Green</button>
        <button onClick={() => dispatch(changeColor("red"))}>Red</button>
        <button onClick={() => dispatch(changeColor("yellow"))}>Yellow</button>
      </div>
    </div>
  );
}
