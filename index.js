require("dotenv").config();
const express = require("express");
const app = express();
// const port = 3000
const githubdata = {
  login: "itsAbdullahMaqsood",
  id: 113769634,
  node_id: "U_kgDOBsf8og",
  avatar_url: "https://avatars.githubusercontent.com/u/113769634?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/itsAbdullahMaqsood",
  html_url: "https://github.com/itsAbdullahMaqsood",
  followers_url: "https://api.github.com/users/itsAbdullahMaqsood/followers",
  following_url:
    "https://api.github.com/users/itsAbdullahMaqsood/following{/other_user}",
  gists_url: "https://api.github.com/users/itsAbdullahMaqsood/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/itsAbdullahMaqsood/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/itsAbdullahMaqsood/subscriptions",
  organizations_url: "https://api.github.com/users/itsAbdullahMaqsood/orgs",
  repos_url: "https://api.github.com/users/itsAbdullahMaqsood/repos",
  events_url:
    "https://api.github.com/users/itsAbdullahMaqsood/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/itsAbdullahMaqsood/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Abdullah Maqsood",
  company: null,
  blog: "",
  location: "Everywhere",
  email: null,
  hireable: null,
  bio: "Workin'.........",
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 7,
  following: 1,
  created_at: "2022-09-17T10:22:45Z",
  updated_at: "2025-08-20T09:04:39Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("abdullahdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Abdullah aur code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubdata);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
