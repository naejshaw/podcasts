import {IncomingMessage, ServerResponse} from 'http'
import { serviceListEpisodes } from '../services/listEpisodesService'
import { serviceFilterEpisodes } from '../services/filterEpisodesService'
import { serviceRegisterEpisodes } from '../services/registerEpisodesService'
import { StatusCode } from '../utils/statusCode'
import { ContentType } from '../utils/contentType'
import { FilterPodcastModel } from '../models/filterPodcastModel'

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK, {'Content-Type': ContentType.JSON})
    res.end(JSON.stringify(content))
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url)
    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON})
    res.end(JSON.stringify(content.body))
}
