function updateProfileInfo(profileData) {
    const foto = document.getElementById('profile.foto')
    foto.src = profileData.minhaFoto
   
    const name = document.querySelector('.nome')
    name.innerText = profileData.meuNome
    
}

(async () => {
    const profileData = await fecthProfileData()
    updateProfileInfo(profileData)
    

    console.debug(profileData.meuNome)
})()