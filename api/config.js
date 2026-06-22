export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const clientId = process.env.GOOGLE_CLIENT_ID;

  if (!clientId) {
    return res.status(500).json({
      error: 'GOOGLE_CLIENT_ID environment variable is not set in Vercel.'
    });
  }

  return res.status(200).json({ clientId });
}
