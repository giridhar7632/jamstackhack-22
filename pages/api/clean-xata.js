import { getXataClient } from '../../utils/xata.codegen'

const xata = getXataClient()

const deleteItem = async (id) => {
  return await xata.db.nextjs_with_xata_example.delete(id)
}

export async function cleanDummyDataFromXata(req, res) {
  const { id } = req.body
  await deleteItem(id)

  res.json({
    ok: true,
  })
}

export default cleanDummyDataFromXata
