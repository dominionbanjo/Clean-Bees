import { IoIosArrowDown } from "react-icons/io";
import { faq1 } from "../utils/Faq";
import FaqItem from "./FaqItem";
const GeneralList = () => {
  return (
    <>
      <div className="list-general">
        {faq1.map((faq, index) => {
          return (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          );
        })}
      </div>
    </>
  );
};
export default GeneralList;
