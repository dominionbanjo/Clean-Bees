import Wrapper from "../assets/wrappers/FaqPage";
import { IoIosSearch } from "react-icons/io";
import GeneralList from "../components/GeneralList";
import SecondList from "../components/SecondList";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [listState, setListState] = useState(true);

  return (
    <Wrapper>
      <div className="faq-top">
        <div className="faq-top-left">
          <h1>FAQ</h1>
          <p>The Ins And Outs of How We Do Business</p>
        </div>
        <div className="faq-top-right">
          <div className="faq-top-right-up">
            <p className="qq">
              Frequently asked questions <IoIosSearch />
            </p>
            <p className="qqq">
              <span
                onClick={() => setListState(true)}
                className={listState ? "ctrl1 set-yellow" : "ctrl1"}
              >
                General
              </span>{" "}
              <span
                onClick={() => setListState(false)}
                className={listState ? "ctrl2 " : "ctrl2 set-yellow"}
              >
                Setting Up FAQs
              </span>
            </p>
          </div>
          <div className="faq-top-right-lists">
            <AnimatePresence
              mode="wait" // Ensures the previous component exits before the next one enters
            >
              {listState ? (
                <motion.div
                  key="general"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                >
                  <GeneralList />
                </motion.div>
              ) : (
                <motion.div
                  key="second"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                >
                  <SecondList />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="faq-bottom">
        <div className="faq-bottom-left">
          <h1>
            BILLING & <br /> PRICING
          </h1>
          <p>
            Find The Best Package <br /> For Your Budget
          </p>
        </div>
        <div className="faq-bottom-right">
          <div className="right-item">
            <h2>Payments Accepted</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>

          <div className="right-item">
            <h2>Cancellation Policy</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>

          <div className="right-item">
            <h2>Satisfaction Guarantee</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Faq;
