const serverUrl = "http://127.0.0.1:3001/";

const post = (data: object) => {
  return fetch(serverUrl, { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
};

export const api = {
  post: post,
};
