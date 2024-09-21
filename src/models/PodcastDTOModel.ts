import { Podcast } from "./podcastModel";

export interface PodcastDTOModel {
    statusCode: number;
    body: Podcast[];
}