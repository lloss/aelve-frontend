import { injectable } from 'inversify'
import { action, observable } from 'mobx';

import { ISnippet, ISnippetPageStore } from '../../interfaces'

@injectable()
export class SnippetPageStore implements ISnippetPageStore {
  @observable public snippet: ISnippet;

  @action
  public getSnippet = async (path: string) => {
    const res = await fetch(`https://5c6fd95369738000148aeb2e.mockapi.io/${path}`);
    const data = await res.json();
    this.snippet = data;
  }
}