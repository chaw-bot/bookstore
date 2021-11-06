import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Percentage = () => (
  <div className="percentageContainer">
    <AiOutlineLoading3Quarters className="oval" />
    <div>
      <p className="percentage">0%</p>
      <p className="completed">Completed</p>
    </div>
  </div>
);

export default Percentage;
