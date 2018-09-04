import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Hit endpoint.', req.body);
  const jwt = '123';
  res.status(201).send({ jwt });
});

export default [router];
