import { ThreeCircles } from 'react-loader-spinner';
import css from "./Loader.module.css"

const Loader: React.FC = () => {
  return (
<div className={css.container}>
    <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#0000ff"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
</div>
);
};

export default Loader;