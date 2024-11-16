function getParam(id){
  const urlParams = new URLSearchParams(window.location.search);
  const Param = urlParams.get(id);
  return Param
}

export { getParam };