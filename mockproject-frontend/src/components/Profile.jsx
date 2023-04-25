import React from "react";
import "./ProfileStyle.css";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// import * as React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useParams } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Profile = ({searchData}) => {
  const [value, setValue] = React.useState(4.4);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {username} = useParams();
  console.log(username);

  const profileData2 = {
    profilePic:
      "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
    username: "janedoe_",
    name: "Jane Doe",
    followers: 188,
    following: 206,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️",
    posts: [
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
      {
        url: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
        likes: 43,
        comments: 67,
      },
    ],
  };

  const profileData = searchData.find(e => e.username == username)
  return (
    <div>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img src={profileData2.profilePic} alt="" />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{profileData.username}</h1>

              {/* <button className="btn profile-edit-btn">Edit Profile</button> */}

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">
                    {profileData.photos_uploaded}
                  </span>{" "}
                  posts
                </li>
                <li>
                  <span className="profile-stat-count">
                    {profileData.follower}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="profile-stat-count">
                    {profileData.following}
                  </span>{" "}
                  following
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">{profileData.name}</span>{" "}
                {profileData.description}
              </p>

              <Rating
                name="half-rating-read"
                precision={0.5}
                value={value}
                readOnly
                size="large"
              />
            </div>
          </div>
          {/* <!-- End of profile section --> */}
        </div>
        {/* <!-- End of container --> */}
      </header>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <main>
        <div className="container">
          <div className="profile-section-buttons">
            <button className="btn profile-edit-btn book-button" onClick={handleOpen}>
              Book a Travel
            </button>
            <button className="btn profile-edit-btn chat-button">Chat</button>
            <button className="btn profile-edit-btn any-button">anything</button>
          </div>

          <div className="gallery">
            {profileData2.posts.map((data, index) => {
              return (
                <div className="gallery-item" tabindex="0" key={index}>
                  <img src={data.url} className="gallery-image" alt="" />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true"></i>{" "}
                        {data.likes}
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i
                          className="fas fa-comment"
                          aria-hidden="true"
                        ></i>{" "}
                        {data.comments}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- End of gallery --> */}

          {/* <div className="loader"></div> */}
        </div>
      </main>
    </div>
  );
};

export default Profile;
