const request = require("request");
const async = require("async");
var accessToken = '';
var username = 'manti96';


// manti96 -> id=186039140
// Client-ID -> 5nkra350cpu02rrnfi0uecrbiu9m31
// client-secret -> m28mnymjguv6x1nu4qrkd6ee50r0r8
// Token -> m00nbbfgelithcqdyayj244duoyxul

// function gameRequest(accessToken) {
//     setTimeout(() => {
//         const gameOptions = {
//             url: 'https://api.twitch.tv/helix/games/top',
//             method: 'GET',
//             headers: {
//                 'Client-ID': '5nkra350cpu02rrnfi0uecrbiu9m31',
//                 'Authorization': 'Bearer ' + accessToken
//             }
//         }
//         if (!accessToken) {
//             console.log("No Token");
//         } else {
//             console.log(gameOptions);

//             const gameRequest = request.get(gameOptions, (err, res, body) => {
//                 if (err) {
//                     return console.log(err);
//                 }

//                 console.log('Status: ${res.statusCode}');
//                 console.log(JSON.parse(body));
//             });

//         };

//     }, 2000)
// }
const options = {
    url: 'https://id.twitch.tv/oauth2/token',
    json: true,
    body: {
        client_id: '5nkra350cpu02rrnfi0uecrbiu9m31',
        client_secret: 'm28mnymjguv6x1nu4qrkd6ee50r0r8',
        grant_type: 'client_credentials'
    }
};

request.post(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    // console.log('Status: ${res.statusCode}');
    // console.log(body.access_token);

    // LLAMADA A LAS PETICIONES
    getFollowers(body.access_token);
    // gameRequest(body.access_token);
    // getUserData(body.access_token);
    // getAllFollowers(body.access_token);
    // modifyColorUser(body.access_token);

});

///////////////////////////////////////////////////////////////////
// https://api.twitch.tv/helix/users/follows?to_id=23161357'

// function getFollowers(accessToken, pagination) {
//     setTimeout(() => {
//         // var username = 186039140; mant96
//         var username = 250822258;
//         // var pagination = '';
//         const gameOptions = {
//             url: `https://api.twitch.tv/helix/users/follows?to_id=${username}&after=${pagination}`,
//             method: 'GET',
//             headers: {
//                 'Client-ID': '5nkra350cpu02rrnfi0uecrbiu9m31',
//                 'Authorization': 'Bearer ' + accessToken
//             }
//         }
//         if (!accessToken) {
//             console.log("No Token");
//         } else {
//             console.log(gameOptions);

//             const gameRequest = request.get(gameOptions, (err, res, body) => {
//                 if (err) {
//                     return console.log(err);
//                 }

//                 var obj = JSON.parse(body);
//                 var numFollowers = obj['total'];
//                 var users = [];
//                 var duplicados = [];

//                 // console.log(JSON.parse(body));
//                 // console.log(obj['pagination']['cursor']);
//                 pagination = obj['pagination']['cursor'];

//                 // for (let i = 0; i < numFollowers - 1; i++) {
//                 for (let i = 0; i < 10; i++) {
//                     // Save the user id and date follow of each user
//                     users.push({ "ID": obj['data'][i]['from_id'], "dateFollow": obj['data'][i]['followed_at'] });
//                 }

//                 // console.log(users);

//                 // // Sort by ID
//                 // users.sort((a,b) => a.ID - b.ID);

//                 // TO-DO COMPROBAR SI FUNCIONA BIEN
//                 for (let i = 0; i < users.length - 1; i++) {
//                     if (users[i + 1]['dateFollow'] === users[i]['dateFollow']) {
//                         duplicados.push(users[i]);
//                     }
//                 }

//             });

//         };

//     }, 2000)
// }


// async function getAllFollowers(accessToken) {
//     var pagination = '';
//     var numero = 0;
//     var res = await getFollowers(accessToken, pagination)
//     var all = [res]
//     // while(pagination !== null){
//     while (numero < 2) {
//         res = await getFollowers(accessToken, pagination)
//         // console.log('RESPONSE ' + res);
//         // all.push(JSON.parse(body))
//         // pagination++;
//         numero++;
//     }
//     // console.log('TODO' + all);
//     return all
// }


// // GET https://api.twitch.tv/helix/users

// function getUserData(accessToken) {
//     setTimeout(() => {
//         // var username = 'manti96';
//         const gameOptions = {
//             url: `https://api.twitch.tv/helix/users?login=ceo_dos`,
//             method: 'GET',
//             headers: {
//                 'Client-ID': '5nkra350cpu02rrnfi0uecrbiu9m31',
//                 'Authorization': 'Bearer ' + accessToken
//             }
//         }
//         if (!accessToken) {
//             console.log("No Token");
//         } else {
//             console.log(gameOptions);

//             const gameRequest = request.get(gameOptions, (err, res, body) => {
//                 if (err) {
//                     return console.log(err);
//                 }

//                 // console.log(`Status: ${res.statusCode}`);
//                 console.log(JSON.parse(body));
//                 // console.log(JSON.parse(res));
//             });

//         };

//     }, 2000)
// }

// function modifyColorUser(accessToken) {
//     setTimeout(() => {
//         // var username = 'manti96';
//         const gameOptions = {
//             url: `https://api.twitch.tv/helix/chat/color?user_id=186039140&color=red`,
//             method: 'PUT',
//             headers: {
//                 'Client-ID': '5nkra350cpu02rrnfi0uecrbiu9m31',
//                 'Authorization': 'Bearer ' + accessToken
//             }
//         }
//         if (!accessToken) {
//             console.log("No Token");
//         } else {
//             console.log(gameOptions);

//             const gameRequest = request.get(gameOptions, (err, res, body) => {
//                 if (err) {
//                     return console.log(err);
//                 }

//                 // console.log(`Status: ${res.statusCode}`);
//                 console.log(JSON.parse(body));
//                 // console.log(JSON.parse(res));
//             });

//         };

//     }, 2000)
// }




///////////////////////////////////////////////////////////////////////////////////////////////
function getFollowers(accessToken) {

    var gameOptions;
    var gameRequest;
    var obj;
    var numFollowers;
    var users;
    var duplicados;
    
    
    setTimeout(() => {
        // var username = 186039140; mant96
        var username = 250822258;
        var pag = 0;
        
        var pasa = 0;
        var pagination;
        var prueba = '';
        
        do {

            console.log('HOLA pasa ' + pasa + ' ' + pagination);
            console.log('HOLA pasa ' + pasa + ' ' + prueba);
            pagination = pagination;
            gameOptions = {
                // url: `https://api.twitch.tv/helix/users/follows?to_id=${username}&after=` + pagination,
                url: `https://api.twitch.tv/helix/users/follows?to_id=${username}&after=${prueba}`,
                method: 'GET',
                headers: {
                    'Client-ID': '5nkra350cpu02rrnfi0uecrbiu9m31',
                    'Authorization': 'Bearer ' + accessToken
                }
            }
            if (!accessToken) {
                console.log("No Token");
            } else {
                console.log(gameOptions);

                gameRequest = request.get(gameOptions, (err, res, body) => {
                    if (err) {
                        return console.log(err);
                    }

                    obj = JSON.parse(body);
                    numFollowers = obj['total'];
                    users = [];
                    duplicados = [];

                    // console.log(JSON.parse(body));
                    // console.log(obj['pagination']['cursor']);
                    pagination = obj['pagination']['cursor'];

                    // // for (let i = 0; i < numFollowers - 1; i++) {
                    // for (let i = 0; i < 10; i++) {
                    //     // Save the user id and date follow of each user
                    //     users.push({ "ID": obj['data'][i]['from_id'], "dateFollow": obj['data'][i]['followed_at'] });
                    // }

                    // console.log(users);

                    // // Sort by ID
                    // users.sort((a,b) => a.ID - b.ID);

                    // // TO-DO COMPROBAR SI FUNCIONA BIEN
                    // for (let i = 0; i < users.length - 1; i++) {
                    //     if (users[i + 1]['dateFollow'] === users[i]['dateFollow']) {
                    //         duplicados.push(users[i]);
                    //     }
                    // }

                    
                // console.log('PAG: ' + pagination);

                }).on('response', (res) => {
                    // console.log('RESPUESTA: ' + JSON.stringify(body));
                    // console.log('PAG RES: ' + pagination); //Este cambia
                    // console.log(JSON.stringify(res));
                    prueba = pagination;
                    // console.log('PRUEBA: ' + prueba);

                });
            }
            
            pasa++;
            console.log('LAST: ' + pagination);
        } while (pasa < 6);
    }, 2000)
}