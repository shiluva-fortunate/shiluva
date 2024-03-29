import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 425px)",
};

//header main container
export const LandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75vh;
  width: 100%;
  margin-top: 5%;

  ${media.mobile} {
    height: 90vh;
    margin-top: 0;
  }
`;

export const LandingTextHolder = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  height: 100%;

  ${media.mobile} {
    width: 100%;
    z-index: 5;
    margin-top: 3%;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  /* width: 75%; */
  margin: auto;
  position: absolute;
  left: 10%;
`;

//about main container
export const AboutContainer = styled(LandingContainer)`
  width: 90%;
  padding: 1% 5%;
  height: unset;
  margin-top: 7%;
`;

export const AboutTitleHolder = styled.div`
  width: 48%;
  /* background-color: yellow; */
`;

export const AboutContentHolder = styled.div`
  width: 50%;
`;

//languages main container
export const LangContainer = styled(AboutContainer)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

//testimonials main container
export const TitleHolder = styled(AboutContainer)`
  margin-top: 5%;
  margin-bottom: -5%;
`;

//projects main container
export const ProjectsContainer = styled(AboutContainer)`
  margin-top: 15%;
`;

export const ProTitleHolder = styled.div`
  width: 40%;
  /* background-color: yellow; */
`;

export const ProjectsHolder = styled.div`
  display: flex;
  width: 80%;
  overflow-x: scroll;

  text-align: ${(props) => (props.justify ? "justify" : "unset")};
`;

export const ProjectCard = styled.div`
  margin-right: 5%;
  width: ${(props) => (props.header ? "270px" : "350px")};
  height: ${(props) => (props.header ? "45vh" : "300px")};
`;

export const ProjectImage = styled.img`
  opacity: 0.9;
  width: inherit;
  height: inherit;
  border-radius: 10px;
  background-color: #ff8fcf;
  object-fit: cover;
  text-align: ${(props) => (props.justify ? "justify" : "unset")};
`;

//contact main container
export const ContactContainer = styled(AboutContainer)``;

export const ContactDetails = styled.div`
  width: 35%;
`;

export const ContactFormHolder = styled.div`
  width: 60%;
`;

//footer
export const FooterContainer = styled.div`
  margin-top: 3%;
  background-color: #1a1a1a;
  padding: 4% 5%;
`;

export const FooterHolder = styled(AboutContainer)`
  padding: 0;
  width: 100%;

  margin-top: ${(props) => (props.margin ? "40px" : "0")};
`;

export const FooterLeft = styled.div`
  width: 50%;
  padding: 0;
  text-align: left;
`;

export const FooterRight = styled.div`
  /* width: 50%; */
  width: ${(props) => (props.icons ? "20%" : "50%")};
  display: ${(props) => (props.icons ? "flex" : "revert")};
  justify-content: ${(props) => (props.icons ? "space-around" : "initial")};
`;
