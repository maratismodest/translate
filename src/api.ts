import axios from "axios";

export async function getInfo() {
  try {
    const res = await axios.get(
      `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}