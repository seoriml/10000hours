import React, { useState } from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import InputSection from "./components/InputSection";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./css/reset.css";
import "./css/10000hours.css";

function App() {
  const [jobValue, setJobValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [resultVisible, setResultVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleJobChange = (e) => setJobValue(e.target.value);
  const handleTimeChange = (e) => setTimeValue(e.target.value);

  const calculateDays = () => setResultVisible(true);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <Header />
      <main>
        <Quote />
        <InputSection
          jobValue={jobValue}
          timeValue={timeValue}
          onJobChange={handleJobChange}
          onTimeChange={handleTimeChange}
          onCalculate={calculateDays}
        />
        {resultVisible && (
          <Results
            jobValue={jobValue}
            timeValue={timeValue}
            onOpenModal={openModal}
          />
        )}
      </main>
      <Footer />
      {modalVisible && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;
