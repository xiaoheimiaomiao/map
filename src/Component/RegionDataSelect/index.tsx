// 区域数据集组件
// import { RegionData } from "@/utils/enum";

import { Api } from "@/api";
import { AppContext } from "@/Modal";
import { Switch } from "antd";
import { runInAction } from "mobx";
import { FC, useContext } from "react";
import { useRequest } from "umi";
type Props = {
  regionData: defs.traffic.TheLayerDisplayData[] | undefined;
};
const RegionDataSelect: FC<Props> = ({ regionData }) => {
  const app = useContext(AppContext);
  const { run: getGetSecondLayer } = useRequest(
    Api.traffic.demo.getGetSecondLayer,
    {
      manual: true,
      onSuccess: (data) => {
        runInAction(() => {
          app.RegionDataSelectModal.secondLayer = data;
        });
      },
    }
  );
  const onChange = (checked: boolean, id?: number) => {
    if (checked) {
      getGetSecondLayer({ layerTypeFirst: id });
      // console.log("checked: ", checked);
      // console.log("event: ", event);
    }
  };
  return (
    <div className="flex flex-wrap justify-between gap-y-2 ">
      {regionData?.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between h-10 px-2 rounded-lg"
            style={{ width: "8.75rem", background: item.color }}
          >
            <div className="flex items-center text-white">
              <div>
                <img className="w-4 h-4" src={item.logo} alt="" />
              </div>

              <div className=" text-xs m-0.5">{item.layerName}</div>
              <img src="http://182.92.203.199/static/question-line.10621512.svg"></img>
            </div>
            <div>
              <Switch
                key={item.id}
                size="small"
                onChange={(checked) => onChange(checked, item.layerTypeFirst)}
              ></Switch>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RegionDataSelect;
