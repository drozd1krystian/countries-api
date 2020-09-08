export const getCountryData = async (name) => {
  try {
    const data = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then(async (result) => {
        const bordersShortcuts = result[0].borders.join(";");
        const bordersFullNames = await getCountriesFullNames(bordersShortcuts);
        result[0].borders = bordersFullNames;
        return result[0];
      });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getCountriesFullNames = async (borders) => {
  try {
    const data = await fetch(
      `https://restcountries.eu/rest/v2/alpha?codes=${borders}`
    )
      .then((res) => res.json())
      .then((borders) => {
        if (borders.status === 400) return [];
        return borders.map((el) => el.name).sort();
      });
    return data;
  } catch (e) {
    console.log(e);
  }
};
