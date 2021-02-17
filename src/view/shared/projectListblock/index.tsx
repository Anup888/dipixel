import LeftListBlock from "./leftListBlock";
import RightListBlock from "./rightListBlock";
export const ProjectListBlock = (props: any) => {
  return (
    <>
      <LeftListBlock image={true} />
      <RightListBlock image={true} />
      <LeftListBlock image={true} />
      <RightListBlock image={true} />
    </>
  );
};
