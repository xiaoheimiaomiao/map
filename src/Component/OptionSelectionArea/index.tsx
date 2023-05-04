import { AppContext } from "@/Modal";
import { Button, ConfigProvider } from "antd";
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";

const OptionSelectionArea = observer(() => {
  const app = useContext(AppContext);

  const { collectionsByArea } = app.leftModal;
  // console.log("allAreaByCityData: ", allAreaByCityData);
  const cityData = app.leftModal.cityData;
  // console.log("cityData: ", cityData);
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#515456",
              controlHeight: 28,
            },
          }}
        >
          {collectionsByArea.map((item) => {
            return (
              <div>
                <Button
                  className="flex items-center justify-center flex-grow rounded cursor-pointer bg-buttonActive h-7"
                  type="primary"
                  style={{
                    maxWidth: "5.6875rem",
                    width: "5.6rem",
                  }}
                >
                  <span>{item.dataCollection}</span>
                  <span>
                    {item.note && (
                      <img
                        className="w-4 h-4 ml-1"
                        src="http://182.92.203.199/static/question-line.10621512.svg"
                        alt=""
                      />
                    )}
                  </span>
                </Button>
              </div>
            );
          })}
        </ConfigProvider>
      </div>
      <div
        className="rounded-lg"
        style={{
          background: "#3c3f42",
        }}
      >
        <div className="pt-2 ml-1.5 text-sm text-white leading-5">
          {cityData?.cityName}-{cityData?.areaName}
        </div>
        <div className="flex flex-wrap justify-around" style={{}}>
          <div
            className="relative flex w-1/2 my-2"
            style={{
              paddingLeft: "0.625rem",
              borderRight: "1px solid rgba(151, 151, 151, 0.2)",
            }}
          >
            <div className="flex items-center justify-center">
              <img
                className="w-7 h-7"
                src="	http://182.92.203.199/static/people.7c3b051a.svg"
              ></img>
            </div>
            <div className="flex flex-col justify-around ml-2">
              <span
                className="text-xs text-white opacity-60"
                style={{
                  fontFamily: "PingFangSC-Regular",
                }}
              >
                人口 (万)
              </span>
              <span
                className="text-lg font-bold leading-5 text-white"
                style={{
                  fontFamily: "PingFangSC-Semibold, PingFang SC",
                }}
              >
                {cityData?.amountPopulation}
              </span>
            </div>
          </div>
          <div
            className="flex w-1/2 my-2"
            style={{
              paddingLeft: "0.625rem",
            }}
          >
            <div className="flex items-center justify-center">
              <img
                className="w-7 h-7"
                src="	http://182.92.203.199/static/gangwei.a9e0cc5e.svg"
              ></img>
            </div>
            <div className="flex flex-col justify-around ml-2">
              <span
                className="text-xs text-white opacity-60"
                style={{
                  fontFamily: "PingFangSC-Regular",
                }}
              >
                岗位（万）
              </span>
              <span
                className="text-lg font-bold leading-5 text-white"
                style={{
                  fontFamily: "PingFangSC-Semibold, PingFang SC",
                }}
              >
                {cityData?.amountStation}
              </span>
            </div>
            {/* <div
              className="absolute w-1/2 -bottom-2 left-2"
              style={{ height: "1px", background: "rgba(151, 151, 151, 0.2)" }}
            ></div> */}
          </div>
          <div
            className="relative flex w-1/2 my-2"
            style={{
              paddingLeft: "0.625rem",
              borderRight: "1px solid rgba(151, 151, 151, 0.2)",
            }}
          >
            <div className="flex items-center justify-center">
              <img
                className="w-7 h-7"
                src="	http://182.92.203.199/static/mianji.0a56f476.svg"
              ></img>
            </div>
            <div className="flex flex-col justify-around ml-2">
              <span
                className="text-xs text-white opacity-60"
                style={{
                  fontFamily: "PingFangSC-Regular",
                }}
              >
                面积 (k㎡)
              </span>
              <span
                className="text-lg font-bold leading-5 text-white"
                style={{
                  fontFamily: "PingFangSC-Semibold, PingFang SC",
                }}
              >
                {cityData?.acreage}
              </span>
            </div>
          </div>
          <div
            className="relative flex w-1/2 my-2"
            style={{
              paddingLeft: "0.625rem",
              borderRight: "1px solid rgba(151, 151, 151, 0.2)",
            }}
          >
            <div className="flex items-center justify-center">
              <img
                className="w-7 h-7"
                src="http://182.92.203.199/static/chuxingliang.1c4c242d.svg	"
              ></img>
            </div>
            <div className="flex flex-col justify-around ml-2">
              <span
                className="text-xs text-white opacity-60"
                style={{
                  fontFamily: "PingFangSC-Regular",
                }}
              >
                出行量 (人万次)
              </span>
              <span
                className="text-lg font-bold leading-5 text-white"
                style={{
                  fontFamily: "PingFangSC-Semibold, PingFang SC",
                }}
              >
                {cityData?.amountIn}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default OptionSelectionArea;
