import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="user-img" />
              ) : (
                <img src="/images/profile-photo.svg" alt="Add Photo" />
              )}
            </Photo>
            <Link>
              Welcome, {props.user ? props.user.displayName : "There!"}
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/connection-icon.svg" alt="connection-icon" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="item-icon" />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="plus-icon" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  background: url("/images/profile-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  width: 72px;
  height: 72px;
  box-shadow: none;
  border-radius: 50%;
  box-sizing: border-box;
  margin: -38px auto 12px;
  background-color: white;
  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }
`;
const Link = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
`;
const AddPhotoText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: #0a66c2;
  margin-top: 4px;
  cursor: pointer;
`;
const Widget = styled.div`
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;
const Item = styled.a`
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  padding: 12px;
  border-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  text-align: left;
  padding: 8px 0 0;
  a {
    font-size: 12px;
    color: black;
    padding: 4px 12px 4px 12px;
    cursor: pointer;
    &:hover {
      color: #0a66c2;
      text-decoration: underline;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Leftside);
