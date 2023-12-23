// import express from "express";
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

const myGithubData=
{
   "login": "NoorNazar123",
   "id": 147027571,
   "node_id": "U_kgDOCMN2cw",
   "avatar_url": "https://avatars.githubusercontent.com/u/147027571?v=4",
   "gravatar_id": "",
   "url": "https://api.github.com/users/NoorNazar123",
   "html_url": "https://github.com/NoorNazar123",
   "followers_url": "https://api.github.com/users/NoorNazar123/followers",
   "following_url": "https://api.github.com/users/NoorNazar123/following{/other_user}",
   "gists_url": "https://api.github.com/users/NoorNazar123/gists{/gist_id}",
   "starred_url": "https://api.github.com/users/NoorNazar123/starred{/owner}{/repo}",
   "subscriptions_url": "https://api.github.com/users/NoorNazar123/subscriptions",
   "organizations_url": "https://api.github.com/users/NoorNazar123/orgs",
   "repos_url": "https://api.github.com/users/NoorNazar123/repos",
   "events_url": "https://api.github.com/users/NoorNazar123/events{/privacy}",
   "received_events_url": "https://api.github.com/users/NoorNazar123/received_events",
   "type": "User",
   "site_admin": false,
   "name": "Noor-e-Nazar",
   "company": null,
   "blog": "",
   "location": null,
   "email": null,
   "hireable": null,
   "bio": "👋 Hello, I'm Noor-e-Nazar!\r\n\r\n🚀 Aspiring Front-End Developer | Passionate about Crafting User-Friendly Interfaces\r\n\r\n🌟 About Me:\r\nI'm a dedicated to my work.",
   "twitter_username": "NoorNaz82896320",
   "public_repos": 3,
   "public_gists": 0,
   "followers": 0,
   "following": 0,
   "created_at": "2023-10-05T06:01:06Z",
   "updated_at": "2023-12-07T08:23:19Z"
 }


app.get('/', (req, res) => {
   res.send('Hello World!')
});

app.get('/facebook', (req, res)=>{
   res.send("Facebook Hammad")
});
app.get('/login',(req, res)=>{
   res.send("<h1>Welcome to facebook</h1>");
});

app.get('/youtube',(req , res)=>{
   res.links({
      next: 'http://api.example.com/users?page=2',
      last: 'http://api.example.com/users?page=5'
    })
    });

app.get('/github',(req,res)=>{
   res.json(myGithubData);
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})