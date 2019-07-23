const apiEndpoint = "http://localhost:3000/"
const allSushisUrl = `${apiEndpoint}sushis`

const getAllSushis = () => fetch(allSushisUrl).then(response => response.json())

export default {
    getAllSushis
}