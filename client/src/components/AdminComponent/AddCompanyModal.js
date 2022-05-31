import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
export default function AddCompanyModal(props) {
  const [company_name, setCompany_name] = useState("");
  const [selected_students,setSelected_students ] = useState("");
  const [step1 , setStep1] = useState("");
  const [step2 , setStep2] = useState("");
  const [step3 , setStep3] = useState("");
  const [year, setYear] = useState("");
  const [logo, setLogo] = useState("");
  
  const [eligible_branch, setEligible_branch] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [takeaways, setTakeaways] = useState("");
  const [test_series, setTest_series] = useState("");
  const [technical_round, setTechnical_round] = useState("");
  const [HR_round, setHR_round] = useState("");
  const [projects, setProjects] = useState("");
  const [PORs, setPORs] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState("");

  //handle type change
  const handleType = (e) => {
    setType(e.target.value);
  };

  // Handling the name change
  const handleName = (e) => {
    setCompany_name(e.target.value);
  };

  // Handling the selected_student change
  const handleSelected_students = (e) => {
    setSelected_students(e.target.value);
  };
  // Handling the selected_student change
  const handleStep2 = (e) => {
    setStep2(e.target.value);
  };
  const handleStep1 = (e) => {
    setStep1(e.target.value);
  };
  const handleStep3 = (e) => {
    setStep3(e.target.value);
  };

  const handleLogo = (e) => {
    setLogo(e.target.value);
  };
  const handleEligible_branch = (e) => {
    setEligible_branch(e.target.value);
  };
  const handleCGPA = (e) => {
    setCGPA(e.target.value);
  };
  const handleTakeaways = (e) => {
    setTakeaways(e.target.value);
  };
  // Handling the selected_student change
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleTest_series = (e) => {
    setTest_series(e.target.value);
  };
  const handleHR_round = (e) => {
    setHR_round(e.target.value);
  };
  const handleProjects = (e) => {
    setProjects(e.target.value);
  };
  // const handleHR_round = (e) => {
  //   setHR_round(e.target.value);
  // };
  const handlePORs = (e) => {
    setPORs(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = async function (e) {
    e.preventDefault();
    if (
      type === "" ||
     company_name=== "" ||
      selected_students === "" ||
      year === ""
    ) {
      setError(true);
    } else {
      const item = { company_name, selected_students,step1,step2,step3,year,logo,eligible_branch,CGPA,takeaways,test_series,technical_round,HR_round,projects,PORs};

      const result = await axios.post(`/api/${type}/add_company`, item);
      console.log(result);
      setCompany_name("");
      setSelected_students("");
      setStep2("");
      setStep1("");
      setStep3("");
      setLogo("");
      setEligible_branch("");
      setCGPA("");
      setTakeaways("");
      setYear("");
      setTest_series("");
      setHR_round("");
      setProjects("");
      setPORs("");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      setError(false);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        m={2}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {submitted && (
          <Form.Text
            style={{ color: "green" }}
            className="m-2  align-text-center"
          >
            <h3>SuccessFull Submitted</h3>
          </Form.Text>
        )}
        <Form.Text className="text-muted">{error}</Form.Text>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Company
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ===================form body==================== */}
          <Form>
            <Form.Check
              inline
              name="group1"
              label="Placement"
              value="placement"
              type="radio"
              onChange={handleType}
            />
            <Form.Check
              inline
              name="group1"
              label="Internship"
              value="internship"
              type="radio"
              onChange={handleType}
            />

            <Form.Group className="mb-3">
              {/* ------------------Name--------------------  */}
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                rows={1}
                onChange={handleName}
                value={ company_name}
              />
              {/* ------------------Name--------------------  */}

              {/* ------------------Selected Students--------------------  */}
              <Form.Label>Slected Students</Form.Label>
              <Form.Control
                min="1"
                type="number"
                rows={1}
                onChange={handleSelected_students}
                value={selected_students}
              />

              {/* ------------------Selected Students--------------------  */}

              {/* ------------------Description--------------------  */}
              <Form.Label>Description</Form.Label>
              <br></br>
              <Form.Label>Step 1</Form.Label>
              
              <Form.Control
                onChange={handleStep1}
                className="input"
                value={step1}
                type="text"
              />
              <Form.Label>Step 2</Form.Label>
              
              <Form.Control
                onChange={handleStep2}
                className="input"
                value={step2}
                type="text"
              />
              <Form.Label>Step 3</Form.Label>
              
              <Form.Control
                onChange={handleStep3}
                className="input"
                value={step3}
                type="text"
              />
              {/* ------------------Description--------------------  */}

              {/* ------------------Description--------------------  */}
              <Form.Label>Year</Form.Label>
              <Form.Control
                onChange={handleYear}
                className="input"
                value={year}
                type="text"
              />
              <Form.Label>Logo </Form.Label>
              <Form.Control
                onChange={handleLogo}
                className="input"
                value={logo}
                type="text"
              />
              <Form.Label>Eligible Branch </Form.Label>
              <Form.Control
                onChange={handleEligible_branch}
                className="input"
                value={eligible_branch}
                type="text"
              />
             
              <Form.Label>Takeaways </Form.Label>
              <Form.Control
                onChange={handleTakeaways}
                className="input"
                value={takeaways}
                type="text"
              />
              <Form.Label>CGPA </Form.Label>
              <Form.Control
                onChange={handleCGPA}
                className="input"
                value={CGPA}
                type="text"
              />
              <Form.Label>Test Series </Form.Label>
              <Form.Control
                onChange={handleTest_series}
                className="input"
                value={test_series}
                type="text"
              />
              <Form.Label>HR Round </Form.Label>
              <Form.Control
                onChange={handleHR_round}
                className="input"
                value={HR_round}
                type="text"
              />
              <Form.Label>Projects </Form.Label>
              <Form.Control
                onChange={handleProjects}
                className="input"
                value={projects}
                type="text"
              />
              <Form.Label>PORs  </Form.Label>
              <Form.Control
                onChange={handlePORs}
                className="input"
                value={PORs}
                type="text"
              />
              {/* ------------------Description--------------------  */}
            </Form.Group>
          </Form>
          {/* ======================form body=======================  */}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-success" onClick={handleSubmit}>
            Add
          </Button>
          <Button className="btn-danger" onClick={props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
