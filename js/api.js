async function fecthProfileData() {
    const url = "https://raw.githubusercontent.com/RafaelSka/js-developer-portfolio/main/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json()
}