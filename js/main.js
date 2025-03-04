// Acordeão interativo
const acordeonTriggers = document.querySelectorAll('.acordeon .acionador');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        document.querySelectorAll('.acordeon').forEach((item) => item.classList.remove('open'));

        if (!isOpen) {
            acordeon.classList.add('open');
        }
    });
});

// Função para buscar dados do perfil
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/RafaelSka/js-developer-portfolio/main/data/profile.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar perfil:", error);
        return null;
    }
}

// Atualizar informações do perfil
function updateProfileInfo(profileData) {
    if (!profileData) return;

    const foto = document.getElementById('profile-foto');
    if (foto) foto.src = profileData.minhaFoto;

    const name = document.querySelector('.nome');
    if (name) name.textContent = profileData.meuNome;
}

// Carregar dados do perfil ao iniciar
(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);

    console.debug("Nome carregado:", profileData?.meuNome);
})();
