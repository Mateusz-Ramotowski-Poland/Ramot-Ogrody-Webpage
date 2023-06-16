const post = (data: any) => {
  const serverUrl = "https://ramotogrodycontactform.onrender.com/";

  return fetch(serverUrl, { method: "POST", body: data });
};

export const api = {
  post: post,
};
