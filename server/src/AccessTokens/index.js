import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ response: 'hello world' });
});

router.post('/refresh', (req, res) => {
  const { refresh_token } = req.body;
  const jwt = '123';
  res.status(200).send({ jwt });
});

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const jwt = '123';
  res.status(201).send({ jwt });
});

router.delete('/', (req, res) => {
  const { refresh_token } = req.body;
  console.log('Logging out.');
  res.status(204).send({ response: true });
});

export default [router];
