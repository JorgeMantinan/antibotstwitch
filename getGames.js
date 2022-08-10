
function getGames(accessToken){

// const gameOptions = {
//     url: 'https://api.twitch.tv/helix/games/top',
//     json:true,
//     client_id: 'w90oqmu9u0of2vsh0xnv6qxivn8bko',
//     Authorization: 'Bearer ' + accessToken,
//     timeout: 5000
// }

// const gameOptions = {
//     url: `https://api.twitch.tv/ceo_dos/users/follows?to_id=${username}`,
//     json:true,
//     client_id: '5nkra350cpu02rrnfi0uecrbiu9m31',
//     Authorization: 'Bearer ' + accessToken,
//     timeout: 5000
// }

request.get(gameOptions,(err,res,body) => {
    if(err){
        return console.log(err);
    }
    console.log('Status: ${res.statusCode}');
    console.log(body);
});
};

// function getFollowers(accessToken){
//     var username = 'manti96';
//     const gameOptions = {
//         url: `https://api.twitch.tv/ceo_dos/users/follows?to_id=${username}`,
//         json:true,
//         client_id: '5nkra350cpu02rrnfi0uecrbiu9m31',
//         Authorization: 'Bearer ' + accessToken,
//         timeout: 5000
//     }
    
//     request.get(gameOptions,(err,res,body) => {
//         if(err){
//             return console.log(err);
//         }
//         console.log('Status: ${res.statusCode}');
//         console.log(body);
//     });
// };

// function getUser(username, accessToken) {
//     return fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
//         method: "GET",
//         headers: {
//             'Client-ID': '5nkra350cpu02rrnfi0uecrbiu9m31',
//             'Authorization': 'Bearer ' + accessToken
//         }
//     }).then(async (res) => res.json())
// };
