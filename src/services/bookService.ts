import axios from 'axios'
import type { Book } from '../types/book'

const API_URL = 'http://localhost:8000/api/books'

export const getBooks = async () => {
  const res = await axios.get(API_URL)
  return res.data.data
}

export const createBook = async (data: Book) => {
  await axios.post(API_URL, data)
}

export const updateBook = async (id: number, data: Book) => {
  await axios.put(`${API_URL}/${id}`, data)
}

export const deleteBook = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`)
}

