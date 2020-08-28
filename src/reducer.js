export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOve after finished developing
  // token: 'BQCUMkwHi3RJEnv1UrUD5KIuAdCApDT7shOPKsL8H_sj10mk6R1Yso2lQgp8iz7ek2_Am6Ojb8i65WeI6_QGIuPYWKBga0wsTCJrts0BSgv6xvcJWCkyY1x59Og4O52zRMJ2MMuR0CdOfvdQdouRnc_SS6fCI_O3ONocZ91RiDMrVNUF',
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch(action.type){
    case 'SET_USER': 
      return { // return new state which look like below
        ...state,         // keep whatever the current state
        user: action.user // update the user
	  };
	  case 'SET_TOKEN':
		  return {
			...state,
			token: action.token
		  };
	  case 'SET_PLAYLISTS':
		  return {
			...state,
			playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
	default: // if nothing happen
		return state;
  }

  

}

export default reducer;