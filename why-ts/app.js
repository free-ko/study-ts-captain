// api url
const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
      // address.innerText = user.address;   [object, object] 뜸
      // address.innerText = user.addres;    undefined 뜸 (s빼먹어서)
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();



// 왜 변수 타입을 var에서 const로 변경하니깐 데이터 호출을 하지 못하는 거지????
// let으로 변경하니 가져오는데...