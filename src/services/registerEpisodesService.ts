import { repositoryPodcast } from "../repositories/podcastsRepository"


export const serviceRegisterEpisodes = async (podcastName: string) => {
    const data = await repositoryPodcast(podcastName)
    return data
}