import axios from "axios";

export function getUserInfo() {
  axios
    .get("/profile/profileInfo")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log());
}

export function updateUserInfo(email:string , user: { [key: string]: string; }, language: string): void {
  axios.post("profile/edit", {
    email: email,
    first_name: user.first,
    last_name: user.last,
      native_language: language,
  });
}
