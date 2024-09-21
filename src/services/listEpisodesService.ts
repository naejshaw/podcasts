import { FilterPodcastModel } from "../models/filterPodcastModel"
import { repositoryPodcast } from "../repositories/podcastsRepository"
import { StatusCode } from "../utils/statusCode"


export const serviceListEpisodes = async () => {
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }
    
    const data = await repositoryPodcast()

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent


    return data
}