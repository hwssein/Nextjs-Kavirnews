const findExistUser = async (email) => {
  const API_URI = process.env.API_URI;
  const API_KEY = process.env.API_KEY;
  const API_USER = process.env.API_USER;

  const res = await fetch(`${API_URI}/users?search=${email}`, {
    method: "GET",
    headers: {
      authorization: `Basic ${Buffer.from(`${API_USER}:${API_KEY}`).toString(
        "base64"
      )}`,
    },
  });

  const data = await res.json();

  if (data.length === 0 || !data) return false;

  return {
    id: data[0].id,
    name: data[0].name,
  };
};

export default findExistUser;
