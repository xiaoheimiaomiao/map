// 地图模式切换
import moon from "@/assets/svg/moon.svg";
import sun from "@/assets/svg/sun.svg";
import sun2 from "@/assets/svg/sun2.svg";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  model: "light" | "normal" | "dark";
  setModel: Dispatch<SetStateAction<"light" | "normal" | "dark">>;
};

const MapStyle: FC<Props> = ({ model, setModel }) => {
  console.log("model: ", model);
  return (
    <div
      style={{
        background: "#313439",
      }}
      className="absolute z-50 flex flex-col overflow-hidden rounded-md cursor-pointer right-4 bottom-16"
    >
      {(
        [
          { model: "light", icon: sun },
          { model: "normal", icon: sun2 },
          { model: "dark", icon: moon },
        ] as const
      ).map((item, index) => (
        <div
          className="p-2 border-b-2 border-slate-700"
          onClick={() => {
            setModel(item.model);
          }}
          style={{
            background: model === item.model ? "#40b7fe" : "#313439",
          }}
          key={index}
        >
          <img
            src={item.icon}
            alt="sun"
            className={`w-5 h-5 ${item.model !== model ? "opacity-50" : ""} `}
          />
        </div>
      ))}
    </div>
  );
};
export default MapStyle;
