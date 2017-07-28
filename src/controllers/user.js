import User from '../models/user';

export const createUser = async(req, res) => {
  const { title, description } = req.body;
  const newUsers = new User({ title, description });

  try {
    return res.status(201).json({ Users: await newUsers.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Users' });
  }
};

export const getAllUsers = async(req, res) => {
  try {
    return res.status(200).json({ Users: await User.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Users' });
  }
};
