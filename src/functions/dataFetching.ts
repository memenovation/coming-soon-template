/* ---------- wrapper function for performing api request --------- */
export async function handleAPI(func, params) {
  try {
    // execute function
    const result = await func(params);
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}
