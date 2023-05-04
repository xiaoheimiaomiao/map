import { AppContext } from "@/Modal";
import { Checkbox, Collapse } from "antd";
import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";

const { Panel } = Collapse;
type Props = {};
const LandMultipleSelect: FC<Props> = observer(() => {
  const app = useContext(AppContext);
  const { secondLayer } = app.RegionDataSelectModal;
  // console.log("secondLayer: ", secondLayer);
  const [down, setDown] = useState(true);
  return (
    <div
      className="absolute z-50 flex overflow-hidden rounded-md cursor-pointer right-4 top-10"
      style={{
        background: "#2D3036",
      }}
    >
      <Collapse
        className="w-44"
        size="small"
        collapsible="header"
        bordered={false}
        defaultActiveKey={["1"]}
      >
        <Panel header="AOI" key="1">
          <div className="flex flex-col justify-around gap-4 px-2">
            {secondLayer?.map((item: any, index: number) => {
              return (
                <div className="flex items-center justify-between h-5 rounded-lg">
                  <div className="flex items-center text-white">
                    <div
                      className="flex items-center w-2 h-2 mr-2 rounded-sm"
                      style={{
                        background: item.color,
                      }}
                    ></div>
                    <div className="mr-1 text-sm">{item.layerName}</div>
                  </div>
                  <div>
                    <Checkbox defaultChecked></Checkbox>
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});
export default LandMultipleSelect;
