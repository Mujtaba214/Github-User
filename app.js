let search = async () => {
  let inp = document.getElementById("input");
  let url = `https://api.github.com/users/${inp.value}`;
  const fetchData = await fetch(url);
  const response = await fetchData.json();
  console.log(response);
  return showData(response);
};
let profile = document.getElementById("profile");
let showData = (data) => {
    profile.innerHTML = `
            <div class="profile-header">
                <img id="avatar" src="${data.avatar_url}" alt="GitHub User Avatar">
                <h2 id="username">${data.login}</h2>
            </div>
            <div class="profile-details">
                <p>Bio: ${data.bio} </p>
                <p>ID: ${data.id}</p>
                <p>Location: ${data.location}</p>
                <p>Public Repos: ${data.public_repos}</p>
            </div>
            <div class="profile-detail">
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                <p>Created At: ${data.created_at}</p>
                <p>Updated At: ${data.updated_at}</p>
                <p>Twiiter Username: ${data.twitter_username}</p>
            </div>
    `;
};
