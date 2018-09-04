import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { content, impact, ease, confidence } = req.body;
  res.status(201).send({});
});

router.delete('/:id', (req, res) => {
  res.status(204).send(true);
});

router.put('/:id', (req, res) => {
  const { content, impact, ease, confidence } = req.body;
  res.status(204).send({});
});

router.get('/', (req, res) => {
  const { page } = req.params;
  res.status(200).send([]);
});

export default [router];
