import getData from "../../../selenium";

export default function handler(req, res) {
  res.status(200).json(getData());
}
