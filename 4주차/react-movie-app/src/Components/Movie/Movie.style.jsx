import styled from 'styled-components';

export const PosterUrl = "https://image.tmdb.org/t/p/w1280/"

export const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  color: white;
  border-radius: 5px;
  background-color: #373b69;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const MovieTitle = styled.h4`
  margin: 0;
`;

export const VoteAverage = styled.span`
  margin-left: 3px;
`;

export const Overview = styled.div`
  overflow-y: auto;
  display: none;
  width: 250px;
  height: 420px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  margin-top: -420px;
  opacity: 0.9;
  ${MovieContainer}:hover & {
      display: flex;
      overflow-y: auto;
  }
`;

export const OverviewInfo = styled.div`
  overflow-y: auto;
  margin: 12px;
`;

