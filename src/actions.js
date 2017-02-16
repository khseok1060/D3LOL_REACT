export const ONE_PLUS = "one";
export const REQUEST_USER = "request_user";
export const RECEIVE_USER = "receive_user";
export const FAILGET_USER = "failget_user";
import axios from 'axios';
export function onePlus(value){
  return {
    type: ONE_PLUS,
    val: value
  }
}

export function requestUser(){
	return { 
		type: REQUEST_USER,
		status: "Loading........"
	}
}

export function receiveUser(res){
	return {
		type: RECEIVE_USER,
		status: "SUCCESS",
		data: res
	}
}

export function failgetUser(){
	return {
		type: FAILGET_USER,
		status: "FAIL",
		data: "ERR"
	}
}

export function axiosGet(query){
	return function(dispatch){
		
		dispatch(requestUser())

		return axios.get('/api/search', { params: { username: query } })
      			.then(res => {
   				   	console.log(res)
        			dispatch(receiveUser(res))
      			})
      			.catch(err => {
        			console.error(err);
      			})
	}

}