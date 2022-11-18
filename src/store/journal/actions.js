import journalApi from "@/axios/journalApi"

export const loadEntries = async ( {commit} ) => {
    const {data} = await journalApi.get('/websites.json')
    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries',entries)
}

export const updateEntry = async ({ commit }, entry) => {  // entry debe de ser un parámetro

    const { id, ...rest } = entry
    const dataToSave = { id, ...rest }

    const resp = await journalApi.put( `/websites/${ entry.id }.json`, dataToSave )
    console.log(resp)

    // Commit de una mutation -> updateEntry
    commit('updateEntry', { ...entry })
}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete( `/websites/${ id }.json`)
    commit('deleteEntry',id)
    return id
}

export const createEntry = async ({ commit }, entry ) => {
    const { id, ...rest } = entry
    const dataToSave = { id, ...rest }
    const {data} = await journalApi.post( `websites.json`, dataToSave )
    dataToSave.id = data.name

    commit('addEntry', dataToSave )

    return data.name
}