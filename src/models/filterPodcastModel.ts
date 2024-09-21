import { Podcast } from "./podcastModel";

export interface FilterPodcastModel {
    statusCode: number;
    body: Podcast[];
}