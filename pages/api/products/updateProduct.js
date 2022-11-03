import { getXataClient } from '../../../utils/xata'

const xata = getXataClient()

const handler = async (req, res) => {
  // using update method to update records in database
  const { id, ...data } = req.body
  try {
    await xata.db.products.update(id, { ...data })
    res.json({ message: 'Success 😁' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default handler
