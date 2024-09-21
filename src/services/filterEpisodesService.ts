import { repositoryPodcast } from "../repositories/podcastsRepository"
import { PodcastDTOModel } from "../models/PodcastDTOModel"
import { StatusCode } from "../utils/statusCode"


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastDTOModel> => {

    let responseFormat: PodcastDTOModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split('?p=')[1] || ""
    const data = await repositoryPodcast(queryString)

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }
    
    return responseFormat
}