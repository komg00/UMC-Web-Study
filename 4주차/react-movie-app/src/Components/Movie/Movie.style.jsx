import styled from 'styled-components';

export const Body = styled.body`
  background-color: #22254b;;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  position: relative;
  color: white;
  background-color: #373b69;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.img`
  max-width: 100%;
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MovieTitle = styled.h4`
  margin: 0;
`;

export const VoteAverage = styled.span`
  margin-left: 3px;
`;

export const Overview = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.9;
  overflow: auto;
  ${MovieContainer}:hover & {
    display: block;
  } 
`;

export const OverviewTitle = styled.h4`
  margin: 25px 15px 10px;
`;

export const OverviewInfo = styled.p`
  overflow: auto;
  padding: 15px;
`;