import { CreateUrlDTO, OriginalUrlDTO, UrlClickCountDTO, UrlDTO } from "../dto/Url/UrlDtos.js";
import { ActionResult } from "../types/ActionResult.js";
import * as urlService from "../db/services/urlService.js"

export const createUrl = async (payload: CreateUrlDTO):Promise<ActionResult<UrlDTO | null>> => {
  return await urlService.createUrl(payload);
}

export const findOrinalUrl = async (shortUrlId: string):Promise<ActionResult<OriginalUrlDTO | null>> => {
  return await urlService.findOriginalUrl(shortUrlId);
}

export const getUrlClickCount = async (urlId: string):Promise<ActionResult<UrlClickCountDTO | null>> => {
  return await urlService.getUrlClickCount(urlId);
}