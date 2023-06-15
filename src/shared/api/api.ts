const post = (data: any) => {
  const serverUrl = "http://127.0.0.1:3001/";

  return fetch(serverUrl, { method: "POST", body: data });
};

export const api = {
  post: post,
};
