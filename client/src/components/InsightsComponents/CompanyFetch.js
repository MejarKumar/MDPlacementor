import styled from "styled-components";
import { Card } from "../HomeComponents/PastRecruiter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import MyLoader from "./MyLoader";
const Container = styled.div`
  color: rgba(138, 94, 191, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card_container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export default function CompanyFetch(props) {
  //
  const navigate = useNavigate();
  let [company, getCompany] = useState([]);
  // let [reqyear, setReqYear] = useState("2021");
  useEffect(() => {
    axios
      .get(`/api/${props.url}/all_companies`)
      .then((response) => {
        console.log(response.data);
        getCompany(response.data);
      });
  }, [props.url]);
  console.log(props.query);

  // const handleSubmit = (e) => {
  //   setReqYear(e.target.value);

  // }



  return (
    <>
      {/* <Form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "flex-end", width: "100%", justifyContent: "flex-end", paddingRight: "2.5rem" }}>
          <Form.Check
            inline
            name="group1"
            label="2021"
            value="2021"
            type="radio"
            onChange={handleSubmit}
          />
          <Form.Check
            inline
            name="group1"
            label="2022"
            value="2022"
            type="radio"
            onChange={handleSubmit}
          />
        </div>
      </Form> */}

      <Container>
        <h1> Recruiters</h1>
        <div className="card_container">
          {!company ? (
            <MyLoader />
          ) : (
            company
              .filter((val) => {

                if (!props.query) return val;
                else if (
                  val.company_name &&
                  val.company_name
                    .toLowerCase()
                    .includes(props.query.toLowerCase())
                )
                  return val;
              })
              .map((comp, idx) => (
                < Card
                  onClick={() => {
                    navigate(`/${props.type}/${comp.company_name}`);
                  }}
                  key={idx}
                >
                  <h3 style={{ textTransform: "uppercase", textAlign: "center", "fontWeight": "800" }}>
                    {comp.company_name}
                  </h3>
                  {/* <p>{comp.selected_students}</p> */}
                  {/* <p>{comp.eligible_branch}</p> */}
                  {/* <p>{comp.year}</p> */}
                  {comp.logo && (
                    <img style={{ height: "20%" }} src={`${comp.logo}`} alt="" />
                  )}
                </Card>
              ))
          )}
        </div>
      </Container>
    </>
  );
}
