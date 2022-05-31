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
  useEffect(() => {
    axios
      .get(`/api/${props.url}/all_companies`)
      .then((response) => {
        console.log(response.data);
        getCompany(response.data);
      });
  }, [props.url]);
  console.log(props.query);
  return (
    <Container>
      <h1> Recruiters</h1>
      <div className="card_container">
        {!company ? (
          <MyLoader />
        ) : (
          company
            .filter((val) => {
              console.log(val.company_name);
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
              <Card
                onClick={() => {
                  navigate(`/${props.type}/${comp.company_name}`);
                }}
                key={idx}
              >
                <h3 style={{ textTransform: "uppercase", textAlign: "center","fontWeight":"800" }}>
                  {comp.company_name}
                </h3>
                {/* <p>{comp.selected_students}</p> */}
                {/* <p>{comp.eligible_branch}</p> */}
                {/* <p>{comp.CGPA}</p> */}
                {comp.logo && (
                  <img style={{ height: "20%" }} src={`${comp.logo}`} alt="" />
                )}
              </Card>
            ))
        )}
      </div>
    </Container>
  );
}
