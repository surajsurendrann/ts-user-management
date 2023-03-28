import styled from "styled-components";

interface User {
  name: string;
  email: string;
  designation: string;
  image?: string;
}

interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
  return (
    <CardContainer>
      <ImageContainer>
        {user.image ? (
          <Image src={user.image} />
        ) : (
          <Image src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" />
        )}
      </ImageContainer>
      <DetailsContainer>
        <Details>Name : {user.name}</Details>
        <Details>Designation : {user.designation}</Details>
        <Details>Email : {user.email}</Details>
      </DetailsContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 2px 2px 5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid;
  border-radius: 50px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 10px;
`;

const Details = styled.span`
  margin-bottom: 6px;
`;
