import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/mongodb";
import LineUps from "@/models/lineUpsModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const { season } = req.query; 
      const lineUpsModel = await LineUps.find({ season });
      return res.status(200).json({data: lineUpsModel});
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "Error fetching todos" });
    }
  } else if (req.method === "POST") {
    try {
      const {
        team_id,
        season,
        line_ups
      } = req.body;

      const lineUpsModel = await LineUps.create({
        team_id,
        season,
        line_ups
      });

      return res.status(200).json({data: lineUpsModel});
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "Error fetching todos" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}