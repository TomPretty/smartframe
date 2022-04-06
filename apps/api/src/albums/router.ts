import { Router } from "express";

interface Album {
  name: string;
}

const ALBUMS: Album[] = [
  { name: 'Holiday 2020' },
  { name: 'Holiday 2021' },
  { name: 'Holiday 2022' },
]

export const router = Router();

router.get('/', (_, res) => {
  res.json({ albums: ALBUMS })
})
