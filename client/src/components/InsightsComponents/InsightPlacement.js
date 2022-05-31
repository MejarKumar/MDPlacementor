import { Link } from "react-router-dom";
import CompanyFetch from "./CompanyFetch";
import HeadingSection from "./HeadingSection";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function InsightPlacement() {
  const [query, setQuery] = useState("");

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };
  /////////////////////////styled components////////////////////////////////////////////
  const BodyLink = styled(Link)`
    background-color: ${(props) => props.activeColor || "white"};
    border-radius: 10px;
    padding: 10px 20px;
    margin: 5px;
    color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    border: ${(props) =>
      props.activeColor ? "" : "dashed 2px rgba(138, 94, 191, 1)"};
    text-decoration: none;

    &:hover {
      color: ${(props) =>
        props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    }
  `;
  const Div = styled.div`
    margin: auto;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InputField = styled.input`
    width: 90%;
    margin: 2rem 2.5%;
    height: 3rem;
    padding: 0 1rem;
    outline: none;
    border: rgba(138, 94, 191, 1) solid 1.5px;
    border-radius: 7.5px;
    color: rgba(138, 94, 191, 1);
    font-weight: 700;
  `;

  const Button = styled.button`
    height: 3rem;
    margin: 2rem 2.5%;
    padding: 0 1rem;
    width: 30%;
    background: linear-gradient(
      90deg,
      rgba(238, 109, 152, 1) 15%,
      rgba(138, 94, 191, 1) 85%
    );
    color: #fff;
    outline: none;
    border: none;
    border-radius: 7.5px;
    position: absolute;
    transform: translateX(-100%);
    cursor: pointer;
  `;
  /////////////////////////styled components////////////////////////////////////////////

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Placement Insight </title>
        <link
          rel="icon"
          type="image/png"
          href="https://github.com/MejarKumar/All-Company-Logo/blob/main/favicon-32x32.png?raw=true"
        />
        <meta name="theme-color" content="#064420" />
      </Helmet>

      <HeadingSection />
      <Div>
        <BodyLink activeColor="rgba(238, 109, 152, 1)" to="/insight/placement">
          Placement
        </BodyLink>
        <BodyLink to="/insight/internship">Internship</BodyLink>
      </Div>
      <InputField
        autoFocus
        placeholder="Search Here"
        value={query}
        onChange={inputHandler}
      />
      <Button>Search</Button>

      <CompanyFetch url="placement" query={query} type="placement" />
    </>
  );
}
