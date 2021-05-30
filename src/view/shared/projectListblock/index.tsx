import LeftListBlock from "./leftListBlock";
import RightListBlock from "./rightListBlock";
export const ProjectListBlock = (props: any) => {
  return (
    <>
      <div className="container__wrapper">
        <LeftListBlock image={true} />
        <RightListBlock image={true} />
        {/* <LeftListBlock image={true} />
        <RightListBlock image={true} /> */}
      </div>
    </>
  );
};
