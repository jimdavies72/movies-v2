const fetchData = async (baseURL, payload, httpVerb) => {
  const res = await fetch(baseURL, {
    method: httpVerb,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });

  try {
    const data = await res.json();
    if (data) {
      return data;
    } else {
      throw new Error(`${res.status}, ${res.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
