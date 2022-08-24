import axios from "axios";

export default async function handleSubscription(data) {
  const res = await axios({
    method: "POST",
    url: `/api/v1/subscribe`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  });
  return res.data;
}
