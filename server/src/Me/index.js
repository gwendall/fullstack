import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const email = '';
  const name = '';
  const avatar_url = '';
  res.status(200).send({ email, name, avatar_url });
});

export default [router];
