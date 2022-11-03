import { getXataClient } from '../../../utils/xata'

const xata = getXataClient()

const handler = async (req, res) => {
  // create method is used to create records in database
  try {
    await xata.db.products.create({ ...req.body })
    res.json({ message: 'Success 😁' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default handler
