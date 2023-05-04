import { Api } from "@/api";
import { InIcon } from "@/assets/svg";
import OptionSelectionArea from "@/Component/OptionSelectionArea";
import RegionDataSelect from "@/Component/RegionDataSelect";
import { AppContext } from "@/Modal";
import { Button, Collapse, ConfigProvider } from "antd";
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { FC, useContext, useEffect, useState } from "react";
import { useRequest } from "umi";
// 手风琴组件
const { Panel } = Collapse;
type Props = {
  allCity: any;
};
const LeftDrawer: FC<Props> = observer(({ allCity = [] }) => {
  const app = useContext(AppContext);
  const { leftModal, map } = app;

  // 保存城市选择的id
  const [areaByCityId, setAreaByCityId] = useState<number>();
  // console.log("areaByCityId: ", areaByCityId);

  // 保存典型区域选择的id
  const [collectionsByAreaId, setCollectionsByAreaId] = useState<number>();
  // console.log("collectionsByAreaId: ", collectionsByAreaId);

  // 区域数据集组件数据
  const { data: regionData } = useRequest(Api.traffic.demo.getGetFirstLayer);

  // 获取典型区域选择数据
  const { run: getAllAreaByCity } = useRequest(
    Api.traffic.demo.getGetAllAreaByCity,
    {
      manual: true,
      onError: (error) => {
        console.log("error: ", error);
      },
      onSuccess: (data) => {
        runInAction(() => {
          leftModal.cityData = data[0];
          leftModal.allAreaByCityData = data;
        });
      },
    }
  );

  // 获取方案选择数据
  const { run: getGetCollectionsByArea } = useRequest(
    Api.traffic.demo.getGetCollectionsByArea,
    {
      manual: true,
      onSuccess: (data) => {
        // console.log("方案选择数据获取成功");
        runInAction(() => {
          leftModal.collectionsByArea = data;
        });
      },
    }
  );

  // 默认获取第一个城市的数据信息
  // 获取选择典型区域选择id
  useEffect(() => {
    setAreaByCityId(allCity[0]?.id);
    setCollectionsByAreaId(leftModal.allAreaByCityData[0]?.id);
  }, [allCity, leftModal.allAreaByCityData]);

  useEffect(() => {
    runInAction(() => {
      if (!leftModal.allAreaByCityData?.[0]?.cityName) {
        return;
      }

      leftModal.cityCenter = leftModal.allAreaByCityData[0].cityName;
    });
  }, [leftModal.allAreaByCityData]);
  useEffect(() => {
    if (!areaByCityId) {
      return;
    }
    getAllAreaByCity({
      parentId: allCity[0]?.id,
    });
  }, [areaByCityId]);

  // 默认获取第一个城市的方案选择数据
  useEffect(() => {
    if (!collectionsByAreaId) {
      return;
    }
    getGetCollectionsByArea({
      areaId: collectionsByAreaId,
    });
  }, [collectionsByAreaId]);

  return (
    <div className="absolute z-10 flex">
      <div>
        <div
          className="flex w-full h-12 text-center text-white rounded-tl-md rounded-tr-md"
          style={{
            background: "#3c3f42",
            width: "320px",
          }}
        >
          <div className="flex items-center justify-center flex-grow text-base text-center cursor-pointer ">
            <div>城市数据输入</div>
          </div>
          <div className="flex items-center justify-center flex-grow text-base text-center cursor-pointer ">
            <div>模型预测结果</div>
          </div>
        </div>
        <Collapse
          style={{
            background: " #26292c",
            width: "320px",
          }}
          bordered={false}
          defaultActiveKey={["1"]}
        >
          <Panel className="text-base font-bold" header="城市选择" key="1">
            <div className="flex justify-between text-center text-white gay-x-2 gap-y-3 ">
              {
                // 通过allCity循环渲染城市按钮
                allCity?.map((item: any, index: number) => {
                  return (
                    <div
                      className="flex items-center justify-center flex-grow rounded cursor-pointer h-7"
                      style={{
                        maxWidth: "5.6875rem",
                      }}
                    >
                      <ConfigProvider
                        theme={{
                          token: {
                            colorPrimary: "#515456",
                            controlHeight: 28,
                          },
                        }}
                      >
                        <Button
                          type="primary"
                          key={item.id}
                          style={{
                            width: "5.6875rem",
                            // background: "#28B1FF",
                          }}
                          onClick={() => {
                            getAllAreaByCity({
                              parentId: item.id,
                            });

                            runInAction(() => {
                              leftModal.cityCenter = item.cityName;
                            });
                          }}
                          // size="small"
                        >
                          {item.cityName}
                        </Button>
                      </ConfigProvider>
                    </div>
                  );
                })
              }
            </div>
          </Panel>
          <Panel className="text-base font-bold " header="典型区域选择" key="2">
            <div className="flex flex-wrap gap-2 ">
              {leftModal.allAreaByCityData?.map((item: any, index: number) => {
                return (
                  <div
                    className="flex items-center justify-center h-7"
                    key={index}
                    // style={{
                    //   maxWidth: "5.6875rem",
                    // }}
                  >
                    <ConfigProvider
                      theme={{
                        token: {
                          colorPrimary: "#515456",
                          controlHeight: 28,
                        },
                      }}
                    >
                      <Button
                        type="primary"
                        key={item.id}
                        onClick={() => {
                          getGetCollectionsByArea({
                            areaId: item.id,
                          });
                          runInAction(() => {
                            leftModal.cityData =
                              leftModal.allAreaByCityData[index];
                          });
                        }}
                      >
                        {item.areaName}
                      </Button>
                    </ConfigProvider>
                  </div>
                );
              })}
            </div>
          </Panel>
          <Panel
            className="text-base font-bold"
            header="方案选择"
            key="3"
            forceRender
          >
            <OptionSelectionArea></OptionSelectionArea>
          </Panel>
          <Panel
            className="text-base font-bold"
            header="区域数据集展示"
            key="4"
          >
            {/* 区域数据Select组件 */}
            <RegionDataSelect regionData={regionData}></RegionDataSelect>
          </Panel>
          <Panel className="text-base font-bold" header="预测模型" key="5">
            <h1>a</h1>
          </Panel>
        </Collapse>
      </div>

      <div>
        <img src={InIcon} alt="" />
      </div>
    </div>
  );
});
export default LeftDrawer;
