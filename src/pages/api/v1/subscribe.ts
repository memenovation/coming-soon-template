//NOTE Endpoint to handle newsletter subcsription

//import packages
import { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  /* ------------------- check if request method is correct ------------------- */

  if (req.method !== "POST") {
    res.status(400).json({ error: "Invalid Request" });
    return;
  }

  /* --------------------------- Check if valid body -------------------------- */

  if (!req.body) {
    res.status(400).send({ error: "Missing Body" });
    return;
  }

  if (!("email" in req.body)) {
    res.status(400).send({ error: "Invalid Body" });
    return;
  }

  const { email, name } = req.body;
  const parsedEmail = email.toString();
  const parsedName = name.toString();
  const subscription_date = dayjs().format("YYYY/MM/DD");

  /* ---------------------------- Airtable configs --------------------------- */
  const endpoint = `${process.env.AIRTABLE_ENDPOINT}/${process.env.AIRTABLE_BASE_ID}`;
  const tableName = process.env.AIRTABLE_TABLE_NAME;
  const fields = {
    email: parsedEmail,
    name: parsedName,
    subscription_date: subscription_date,
  };

  console.log("fields", fields);

  /* ---------------------------- submit to Airtable --------------------------- */
  try {
    const response = await fetch(`${endpoint}/${tableName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({ fields }),
    });

    const result = await response.json();
    console.log("result", result);

    return res.status(200).send({ status: "success", result: result });
  } catch (error) {
    console.log("error", error);
    return res.status(404).send({ error: error.message });
  }
};
