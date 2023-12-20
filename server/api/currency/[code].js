export default eventHandler(async (event) => {
  // pobierz [code] z nazwy pliku/linku
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}&base_currency=PLN`;

  const { data } = await $fetch(uri);

  return data;
});
