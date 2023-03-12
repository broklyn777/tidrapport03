// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

fetch('/data.json')
  .then(response => response.json())
  .then(data => console.log(data));

