import styled from "styled-components";
import SuitBoi from "../../assets/Suitboi2.svg";
const HeadingDiv = styled.div`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  padding: 1rem;
  color: #fff;
  display: flex;
  align-items:flex-start ;
  .text_area {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80%;
  }
  .suitboi_svg {
    display: none;
    width: 300px;
    height: 300px;
    transform: translateY(10%);
  }
  @media screen and (min-width: 1000px) {
    justify-content: space-between;
    .suitboi_svg {
      display: inline;
    }
  }
`;
export default function HeadingSection() {
  return (
    <>
      <HeadingDiv>
        <img className="suitboi_svg" src={SuitBoi} alt="suitboi" />
        <div className="text_area">
          <h1>Insights</h1>
          <p>
              The institute has had active relations with many corporations in different sectors, including core, analytics,finance
              ,consulting,IT,PSUs and many more. Top recruiters from around the world flock to the campus to pick up talents.
          </p>
        </div>
      </HeadingDiv>
    </>
  );
}
