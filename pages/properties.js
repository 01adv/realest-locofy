import "antd/dist/antd.min.css";
import { Dropdown, Menu, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";


const defaultOrder = ['default order']

const PropertiesGridView = () => {
  return (
    <div className="bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">
            Properties
          </div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start pt-16 pb-2 gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px]">
        <div className="w-[272px] flex flex-row  items-center justify-start">
          <div className="shrink-0 flex flex-row items-end justify-start gap-[16px]">
            <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-6 h-6 object-cover"
                alt=""
                src="/listbullets@2x.png"
              />
              <img
                className="w-6 h-6 object-cover"
                alt=""
                src="/squaresfour@2x.png"
              />
            </div>
            {/* <div className="leading-[24px]">Sort by:</div> */}
            {/* <Dropdown
              // menu={defaultOrder.length ? Menu.Items(defaultOrder) : null}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown> */}
          </div>
        </div>
        <PropertiesGridContainer />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesGridView;
