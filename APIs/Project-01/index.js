const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log(body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const user = users.find((user) => user.id === id);
  const updatedUser = { ...user, ...body };
  updatedUser.id = id;
  users[id - 1] = updatedUser;

  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success", updatedUser });
  });
});

app.delete("/api/users/:id", (req, res) => {
  //Get the id of the user
  const id = Number(req.params.id);

  //Find out the index of the user with above id from the array "users"
  const userIdx = users.findIndex((user) => user.id === id);

  //Get the deleted user object using splice. Mind we need to get the
  // object and not array as returned by splice method, so '[0]' satisfies this requirement.
  //The resulting object is just for the sake of displaying, you may neglect storing it if you don't want to display.
  const delUser = users.splice(userIdx, 1)[0];

  //Write the changes into the json file.
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", delUser });
  });
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
