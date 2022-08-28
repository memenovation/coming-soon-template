/* ---------- wrapper function for performing data fetching request --------- */
export async function handleAPI(func, params) {
  try {
    // execute function
    const result = await func(params);
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}
