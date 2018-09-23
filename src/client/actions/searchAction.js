const getSearchSuccess = result => ({
  type: 'SEARCH_EVENT',
  result
});

const getSearch = (keyword) => {
  const encodedKeyword = encodeURIComponent(keyword);
  return (dispatch) => {
    const options = {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ encodedKeyword }),
      headers: { 'Content-Type': 'application/json ' }
    };
    const f = fetch(`/api/search_results/${encodedKeyword}`, options);
    f.then(res => res.json())
      .then(result => dispatch(getSearchSuccess(result)))
      .catch(err => console.log(err));
  };
};

export default getSearch;
