import css from "./Loading.module.css"
import { ThreeDots } from 'react-loader-spinner';
export const Loading = () => (
  <div className={css.Loading}>
    <ThreeDots
      height="80"
      width="80"
      color="red"
      ariaLabel="three-dots-loading"
    />
  </div>
);
