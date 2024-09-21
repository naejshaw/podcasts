import fs from 'fs'
import path from 'path'
import { Podcast } from '../models/podcastModel'

const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const language = 'utf-8'
    const rawData = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: Podcast) => podcast.podcastName === podcastName)
    }
    return jsonFile
}