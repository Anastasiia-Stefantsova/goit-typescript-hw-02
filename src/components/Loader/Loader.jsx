import { ThreeCircles } from 'react-loader-spinner';
import css from "./Loader.module.css"

export default function Loader() {
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
}