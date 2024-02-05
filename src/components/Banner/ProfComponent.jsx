import React from "react";
import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h2>
            Hello <span className="green">I'am</span>
          </h2>
          <h1 className="green">Samantha Chaniwa</h1>
          <h3>Front-end Developer</h3>
          </Texts>
         
       
      </Slide>
      <Slide direction="right">
        <Profile>
        <div className="bees">
          <button>Get in touch</button>
          <a  href="https://www.canva.com/design/DAF7XvnmFNA/dcO21LAejl0-KCLcDWV4RQ/edit?utm_content=DAF7XvnmFNA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
            <button>Dowload CV</button></a>
          </div>
          <Social>
            <p>Explore my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                <AiOutlineWhatsApp />
                </a>
              </span>
              <span>
                <a href="/">
                  <GrFacebookOption/>
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h2 {
    padding: 1rem 0;
    font-weight: 500;
  
  }
 
  h1 {
    font-size: 4rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    color:cyan;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
 


`;

const Profile = styled.div`
margin-top: 12rem;
margin-left: 4rem;
width: 100%;
  button {
    padding: 0.9rem 3rem;
    margin-top: 3rem;
   
    cursor: pointer;
    background-color:cyan;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px  #01be9570);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
  .bees{
    display: flex;
    gap: 5%;

  }
  

`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: cyan;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
