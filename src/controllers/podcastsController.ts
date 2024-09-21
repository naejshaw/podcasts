import {IncomingMessage, ServerResponse} from 'http'
import { serviceListEpisodes } from '../services/listEpisodesService'
import { serviceFilterEpisodes } from '../services/filterEpisodesService'
import { serviceRegisterEpisodes } from '../services/registerEpisodesService'
import { ContentType } from '../utils/contentType'
import { PodcastDTOModel } from '../models/PodcastDTOModel'

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content: PodcastDTOModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON})
    res.write(JSON.stringify(content.body))
    res.end()
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content: PodcastDTOModel = await serviceFilterEpisodes(req.url)
    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON})
    res.write(JSON.stringify(content.body))
    res.end()
}
