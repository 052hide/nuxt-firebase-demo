import db from '~/plugins/firebase/db'

export const findAll = async () => {
  const users = await db.collection('users').get()
  return users
}
