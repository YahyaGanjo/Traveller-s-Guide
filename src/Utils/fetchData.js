async function fetchData(url) {
  try {
    const getData = await fetch(url);
    const promData = await getData.json();
    return promData;
  } catch (err) {
    console.log(err.message);
  }
}
export default fetchData;
