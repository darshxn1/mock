// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import axios from 'axios'
// const searchLocalData = [
//     {
//         "name": "Rajesh Kumar",
//         "username": "rajeshkumar",
//         "bio": "I am a passionate travel guide with over 10 years of experience in exploring and discovering new places. My goal is to provide my clients with the best travel experiences and memories that will last a lifetime.",
//         "photos_uploaded": 30,
//         "location": {
//           "state": "Karnataka",
//           "city": "Bangalore"
//         },
//         "follower": 5000,
//         "following": 100,
//         "profile_photo_url": "https://example.com/profiles/rajeshkumar.jpg",
//         "rating": 4.8
//       },
//       {
//         "name": "Sneha Sharma",
//         "username": "snehasharma",
//         "bio": "As a travel guide, I believe that every place has a unique story to tell. With my expertise and knowledge, I aim to provide my clients with the most authentic and enriching travel experiences.",
//         "photos_uploaded": 20,
//         "location": {
//           "state": "Maharashtra",
//           "city": "Mumbai"
//         },
//         "follower": 10000,
//         "following": 200,
//         "profile_photo_url": "https://example.com/profiles/snehasharma.jpg",
//         "rating": 4.9
//       },
//       {
//         "name": "Ravi Singh",
//         "username": "ravisingh",
//         "bio": "I am an adventurous travel guide who loves to explore off-the-beaten-path destinations. My clients can expect a mix of exciting and unconventional travel experiences with me.",
//         "photos_uploaded": 15,
//         "location": {
//           "state": "Rajasthan",
//           "city": "Jaipur"
//         },
//         "follower": 2000,
//         "following": 50,
//         "profile_photo_url": "https://example.com/profiles/ravisingh.jpg",
//         "rating": 4.6
//       },
//       {
//         "name": "Aman Verma",
//         "username": "amanverma",
//         "bio": "I am a travel guide who loves to explore the hidden gems of India. My clients can expect a blend of culture, adventure, and relaxation on their trips with me.",
//         "photos_uploaded": 25,
//         "location": {
//           "state": "Uttarakhand",
//           "city": "Dehradun"
//         },
//         "follower": 3000,
//         "following": 80,
//         "profile_photo_url": "https://example.com/profiles/amanverma.jpg",
//         "rating": 4.7
//       },
//       {
//         "name": "Priya Shah",
//         "username": "priyashah",
//         "bio": "As a travel guide, I am dedicated to providing my clients with personalized and unique travel experiences that exceed their expectations. With me, you'll discover the beauty of India like never before!",
//         "photos_uploaded": 10,
//         "location": {
//           "state": "Gujarat",
//           "city": "Ahmedabad"
//         },
//         "follower": 4000,
//         "following": 120,
//         "profile_photo_url": "https://example.com/profiles/priyashah.jpg",
//         "rating": 4.5
//       }
// ]
const searchLocalData =  axios.get('http://127.0.0.1:8000/api/getUserData/').then(data=>console.log(data))
console.log(searchLocalData)
export {searchLocalData};