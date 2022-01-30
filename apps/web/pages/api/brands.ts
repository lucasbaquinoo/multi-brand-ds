import { NextApiRequest, NextApiResponse } from "next";

const brandTheme = process.env.BRAND_THEME;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (brandTheme) {
    case process.env.BRAND_NAME_1:
      res.status(200).json({
        color: {
          primary: '#EB7A02'
        }
      });
      break;
    case process.env.BRAND_NAME_2:
      res.status(200).json({
        color: {
          primary: '#F2CB0A'
        }
      });
      break;
    case process.env.BRAND_NAME_3:
      res.status(200).json({
        color: {
          primary: '#15B31D'
        }
      });
      break;

    default:
      res.status(404).json({ error: 'Brand not found' })
      break;
  }
}