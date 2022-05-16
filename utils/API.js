import routes from "./routes"
import { AsyncStorage} from 'react-native';

// console.log("dsfasd",TOKEN);

  export const apiGet = async(url,serviceName,userToken) => {
  let apiUrl = verifyService(serviceName);
  let TOKEN = await AsyncStorage.getItem('userToken')
  return new Promise((resolve, reject) => {
  fetch(`${apiUrl}${url}` , {
      method: 'GET',
      headers: {'Content-Type': 'application/json' , "Authorization" : `Bearer ${TOKEN}`}
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          console.log("err",err);
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const apiPost = async (url, values,serviceName) => {
  let apiUrl = verifyService(serviceName);
  let TOKEN = await AsyncStorage.getItem('userToken')
  console.log("TOKEN",TOKEN);
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        try {
          const parsedResponse = await response.json();
          // console.log("parsedResponse",parsedResponse)
           resolve(parsedResponse);
        } catch (err) {
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const apiPut = async(url, values ,serviceName) => {
  console.log("values",url);
  let apiUrl = verifyService(serviceName);
  let TOKEN = await AsyncStorage.getItem('userToken')

  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json' , "Authorization" : `Bearer ${TOKEN}`},
      body: JSON.stringify(values),
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const apiDelete = async(url,values, serviceName) => {

  let apiUrl = verifyService(serviceName);
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          console.log("err",err);
          reject(err);
        }
      })
      .catch(err => {
        console.log("err1",err);
        reject(err);
      });
  });
}

export const apiPostImage = async (url, values,serviceName) => {
  let apiUrl = verifyService(serviceName);
  let TOKEN = await AsyncStorage.getItem('userToken')

  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'POST',
      body: values,
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

function verifyService(serviceName) {
  console.log("serv",serviceName);
  const urls = {
    // BLOG_MS: routes.BLOG_MS.BASE_PATH,
    // USER_MS: routes.USER_MS.USERS_PATH,
    // ORGANIZATION_PROFILE: routes.ORGANIZATION_PROFILE.ORGANIZATION_PATH
    STOCK_11: routes.STOCK_11.BASE_PATH,

  }
  return urls[serviceName];
}

