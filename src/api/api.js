const baseURL = "https://drivn.com/api/feed";

export const getData = async () => {
  try {
    const res = await fetch(baseURL);
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json();
    // console.log("json",json)
    return json;
  } catch (error) {
    console.error("error in making request", error);
  }
};


