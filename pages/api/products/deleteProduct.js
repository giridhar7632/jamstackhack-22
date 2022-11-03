import { getXataClient } from '../../../utils/xata'

const xata = getXataClient()

const handler = async (req, res) => {
  // use delete method for deleting the records in database
  const { id } = req.body
  try {
    await xata.db.products.delete(id)
    res.json({ message: 'Success 😁' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default handler
